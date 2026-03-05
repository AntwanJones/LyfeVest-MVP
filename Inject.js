const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html
  .replace("window.ENV_SUPABASE_URL || ''", `'${process.env.REACT_APP_SUPABASE_URL||""}'`)
  .replace("window.ENV_SUPABASE_ANON_KEY || ''", `'${process.env.REACT_APP_SUPABASE_ANON_KEY||""}'`);
fs.writeFileSync('index.html', html);
console.log('✅ Env injected');