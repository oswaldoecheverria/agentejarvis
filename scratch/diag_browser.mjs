import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const tempDir = path.join(process.cwd(), 'temp_edge_profile');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--user-data-dir=' + tempDir,
  '--disable-gpu',
  'http://localhost:3333'
]);

async function check() {
  await new Promise(r => setTimeout(r, 2000));
  try {
    const list = await fetch('http://localhost:9222/json').then(r => r.json());
    console.log('Open tabs:', list);
    const pageTab = list.find(t => t.url && t.url.includes('localhost:3333'));
    if (!pageTab) {
      console.log('No page tab found');
      cleanup();
      return;
    }
    
    // Connect to WS
    const wsUrl = pageTab.webSocketDebuggerUrl;
    console.log('WS Url:', wsUrl);
    
    // Use native WebSocket (available in modern Node)
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      console.log('WS Connected');
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
      ws.send(JSON.stringify({ id: 3, method: 'Page.enable' }));
      setTimeout(() => {
        ws.send(JSON.stringify({ id: 4, method: 'Runtime.evaluate', params: { expression: 'document.getElementById("root").innerHTML' } }));
      }, 2500);
    };
    
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('EXCEPTION:', JSON.stringify(data.params.exceptionDetails, null, 2));
      } else if (data.method === 'Log.entryAdded') {
        console.log('LOG:', data.params.entry);
      } else if (data.method === 'Runtime.consoleAPICalled') {
        console.log('CONSOLE:', data.params.type, data.params.args);
      } else if (data.id === 4) {
        console.log('BODY HTML length:', data.result?.result?.value?.length);
        console.log('BODY HTML preview:', (data.result?.result?.value || '').slice(0, 300));
      }
    };
    
    setTimeout(() => {
      cleanup();
    }, 4000);
  } catch (err) {
    console.error('Diagnostic error:', err);
    cleanup();
  }
}

function cleanup() {
  edge.kill();
  setTimeout(() => process.exit(0), 500);
}

check();
