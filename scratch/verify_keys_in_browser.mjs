import { spawn } from 'child_process';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9233',
  '--user-data-dir=./temp_edge_verify_keys',
  'http://localhost:3333'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://localhost:9233/json').then(r => r.json());
    const tab = list.find(t => t.url && t.url.includes('localhost:3333'));
    if (!tab) {
      console.log('No tab found');
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
          params: {
            expression: `
              ({
                totalKeys: Object.keys(window.__COMPONENT_REGISTRY__ || {}).length,
                hasPrescriptions: !!window.__COMPONENT_REGISTRY__['prescriptions-issued-table-neumorphic'],
                hasSriInvoices: !!window.__COMPONENT_REGISTRY__['sri-invoices-table-neumorphic'],
                hasSubscribers: !!window.__COMPONENT_REGISTRY__['newsletter-subscribers-table-neumorphic'],
                hasPartnerCoverage: !!window.__COMPONENT_REGISTRY__['partner-coverage-card-neumorphic'],
                hasMedicalBranch: !!window.__COMPONENT_REGISTRY__['medical-branch-card-neumorphic'],
                hasServiceOffering: !!window.__COMPONENT_REGISTRY__['service-offering-card-neumorphic']
              })
            `,
            returnByValue: true
          }
        }));
      }, 1500);
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 2) {
        console.log('=== VERIFICATION RESULTS IN BROWSER ===');
        console.log(JSON.stringify(data.result?.result?.value, null, 2));
        console.log('=======================================');
        edge.kill();
        process.exit(0);
      }
    };
  } catch (e) {
    console.error(e);
    edge.kill();
    process.exit(1);
  }
}, 2500);
