import { spawn } from 'child_process';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9232',
  '--user-data-dir=./temp_edge_reg_check2',
  'http://localhost:3333'
]);

async function check() {
  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 800));
    try {
      const list = await fetch('http://localhost:9232/json').then(r => r.json());
      const tab = list.find(t => t.url && t.url.includes('localhost:3333'));
      if (!tab) continue;
      const ws = new WebSocket(tab.webSocketDebuggerUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: 'Runtime.evaluate',
            params: { expression: 'Object.keys(window.__COMPONENT_REGISTRY__ || {}).length' }
          }));
        }, 1500);
      };
      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.id === 2) {
          console.log('=== TOTAL COMPONENT KEYS IN REGISTRY ===:', data.result?.result?.value);
          edge.kill();
          process.exit(0);
        }
      };
      return;
    } catch (e) {
      // retry
    }
  }
  edge.kill();
  process.exit(1);
}

check();
