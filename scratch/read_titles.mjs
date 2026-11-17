import { spawn } from 'child_process';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9229',
  '--user-data-dir=./temp_edge_final_read2',
  'http://localhost:3333'
]);

setTimeout(async () => {
  const list = await fetch('http://localhost:9229/json').then(r => r.json());
  const tab = list.find(t => t.url && t.url.includes('localhost:3333'));
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  ws.onopen = () => {
    ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
    setTimeout(() => {
      ws.send(JSON.stringify({
        id: 2,
        method: 'Runtime.evaluate',
        params: { expression: 'Array.from(document.querySelectorAll("h3")).map(h => h.innerText).slice(0, 8)' }
      }));
    }, 1500);
  };
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.id === 2) {
      console.log('TITLES RENDERED:\n', data.result?.result?.value);
      edge.kill();
      process.exit(0);
    }
  };
}, 2000);
