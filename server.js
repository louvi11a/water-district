const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { Project, Workspace } = require('epanet-js');

const app = express();
app.use(cors());

app.get('/runEpanet', async (req, res) => {
 const net1 = fs.readFileSync("net1.inp");
 const ws = new Workspace();
 const model = new Project(ws);
 ws.writeFile("net1.inp", net1);
 model.open("net1.inp", "report.rpt", "out.bin");
 model.solveH();
 model.close();
 const reportFile = ws.readFile("report.rpt");
 res.send(reportFile);
});

app.get('/', (req, res) => {
 res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
 console.log(`Server is listening on port ${port}`);
});