const express = require('express');
let app = express();


app.get(
    '/test',
    function (req, res) {
        res.writeHead(200, {"Content-Type": "application/json;charset=utf-8"});
        res.end('{"testcode":"200", "text":"Electorn Test~"}');
    });

app.listen(3000,
    function () {
        console.log("출력중");
    });