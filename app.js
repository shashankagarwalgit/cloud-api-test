const fs = require('fs');
const express = require('express');
const status = require('express-status-monitor');
const app = express();

app.use(status());

app.use(express.json());

app.get("/", async (req,res)=>{
  const stream = await fs.createReadStream('./100mb.txt', 'utf-8');
    stream.on('data', (chunk) => {
        res.write(chunk);
    });
    stream.on('end', () => {
        res.end();
    });

}
);

app.get("/hello", (req,res)=>{
   res.json("Hello world");
}
);

app.listen(3000, ()=>{
    console.log("Server started at 3000");
});