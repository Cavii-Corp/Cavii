const { Client } = require('ssh2');
const fs = require('fs');
require('dotenv').config(); 

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH connection established');
}).connect({
  host: process.env.SSH_HOST,  
  port: 22,
  username: process.env.SSH_USERNAME,  
  privateKey: fs.readFileSync(process.env.SSH_PRIVATE_KEY_PATH, 'utf8')  
});
