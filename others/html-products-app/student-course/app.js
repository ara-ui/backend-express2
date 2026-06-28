const express = require("express");

const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Student Routes
app.use("/students", studentRoutes);

// Course Routes
app.use("/courses", courseRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});