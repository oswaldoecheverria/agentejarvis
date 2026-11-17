import { spawn } from 'child_process';
import path from 'path';

const tempDir = path.resolve('temp_edge_eval');
const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9225',
  '--user-data-dir=' + tempDir,
  'http://localhost:3333'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://localhost:9225/json').then(r => r.json());
    const tab = list.find(t => t.url && t.url.includes('localhost:3333'));
    if (!tab) {
      console.log('No localhost:3333 tab found');
      edge.kill();
      process.exit(1);
    }
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: { expression: 'document.querySelector("header").innerText' }
        }));
      }, 1500);
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 2) {
        console.log('=== HEADER TEXT FOUND ===');
        console.log(data.result?.result?.value);
        console.log('=========================');
        edge.kill();
        process.exit(0);
      }
    };
  } catch (e) {
    console.error(e);
    edge.kill();
    process.exit(1);
  }
}, 2000);
