@echo off
start cmd /k "echo start data.json&&json-server --port 3004 data.json"
start cmd /k "echo start line.json&&json-server --port 3000 line.json"
start cmd /k "echo start driver.json&&json-server --port 3001 driver.json"
start cmd /k "echo start history.json&&json-server --port 3002 history.json"
start cmd /k "echo start proposals.json&&json-server --port 3005  proposals.json"
start cmd /k "echo start submit.json&&json-server --port 3003  submit.json"