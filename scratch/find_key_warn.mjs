import { spawn } from 'child_process';
import path from 'path';

const tempDir = path.resolve('temp_edge_warn');
const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9226',
  '--user-data-dir=' + tempDir,
  'http://localhost:3333'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://localhost:9226/json').then(r => r.json());
    const tab = list.find(t => t.url && t.url.includes('localhost:3333'));
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        const text = data.params.args.map(a => a.value || JSON.stringify(a)).join(' ');
        if (text.includes('same key')) {
          console.log('KEY WARNING FULL ARGS:', JSON.stringify(data.params.args, null, 2));
          console.log('STACK TRACE:', data.params.stackTrace?.callFrames?.slice(0, 5));
        }
      }
    };
    setTimeout(() => {
      edge.kill();
      process.exit(0);
    }, 3000);
  } catch (e) {
    console.error(e);
    edge.kill();
    process.exit(1);
  }
}, 2000);
