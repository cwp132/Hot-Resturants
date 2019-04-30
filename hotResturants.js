var express = require("express");
var path = require("path");
var http = require("http");
var server = http.createServer();
// Sets up the Express App
// =============================================================
const app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

var reservations = [];

// Start our server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});



app.get("/", function (req, res) {
    console.log("yo");
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/table", function (req, res) {
    console.log("hello");
    res.sendFile(path.join(__dirname, "table.html"))

})

app.get("/make", function (req, res) {
    console.log("ayyo");
    res.sendFile(path.join(__dirname, "make.html"))
})

app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
})
app.post("/api/reservations", function (req, res) {
    console.log(req.body);
    reservations.push(req.body);
    return res.json(reservations)
})