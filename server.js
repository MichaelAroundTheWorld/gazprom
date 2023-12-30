const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 3330;
const ip = "0.0.0.0";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/december", (req, res) => {
  try {
    const filePath = path.join(__dirname, "public", "december.html");
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/january", (req, res) => {
  try {
    const filePath = path.join(__dirname, "public", "january.html");
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/february", (req, res) => {
  try {
    const filePath = path.join(__dirname, "public", "february.html");
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/march", (req, res) => {
  try {
    const filePath = path.join(__dirname, "public", "march.html");
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getData", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/update", async (req, res) => {
  try {
    const newData = req.body;
    const data = await fs.readFile("data.json", "utf-8");
    const currentData = JSON.parse(data);

    // Обновляем earnedAmount
    currentData.earnedAmount =
      parseFloat(currentData.december_earned) +
      parseFloat(newData.january_earned) +
      parseFloat(newData.february_earned) +
      parseFloat(newData.march_earned);

    // Записываем обновленные данные обратно в файл
    await fs.writeFile(
      "data.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );

    // Возвращаем обновленные данные в JSON-формате
    res.json(currentData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/updateDecember", async (req, res) => {
  try {
    const newData = req.body;
    const data = await fs.readFile("data.json", "utf-8");
    const currentData = JSON.parse(data);

    // Обновляем earnedAmount
    currentData.december_earned =
      parseFloat(currentData.december_earned) +
      parseFloat(newData.earnedAmount);

    currentData.earnedAmount =
      parseFloat(currentData.earnedAmount) +
      parseFloat(currentData.december_earned);

    // Записываем обновленные данные обратно в файл
    await fs.writeFile(
      "data.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );

    // Возвращаем обновленные данные в JSON-формате
    res.json(currentData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/updateJanury", async (req, res) => {
  try {
    const newData = req.body;
    const data = await fs.readFile("data.json", "utf-8");
    const currentData = JSON.parse(data);

    // Обновляем earnedAmount
    currentData.january_earned =
      parseFloat(currentData.january_earned) + parseFloat(newData.earnedAmount);

    currentData.earnedAmount =
      parseFloat(currentData.earnedAmount) +
      parseFloat(currentData.january_earned);
    // Записываем обновленные данные обратно в файл
    await fs.writeFile(
      "data.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );

    // Возвращаем обновленные данные в JSON-формате
    res.json(currentData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/updateFebruary", async (req, res) => {
  try {
    const newData = req.body;
    const data = await fs.readFile("data.json", "utf-8");
    const currentData = JSON.parse(data);

    // Обновляем earnedAmount
    currentData.february_earned =
      parseFloat(currentData.february_earned) +
      parseFloat(newData.earnedAmount);

    currentData.earnedAmount =
      parseFloat(currentData.earnedAmount) +
      parseFloat(currentData.february_earned);
    // Записываем обновленные данные обратно в файл
    await fs.writeFile(
      "data.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );

    // Возвращаем обновленные данные в JSON-формате
    res.json(currentData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/updateMarch", async (req, res) => {
  try {
    const newData = req.body;
    const data = await fs.readFile("data.json", "utf-8");
    const currentData = JSON.parse(data);

    // Обновляем earnedAmount
    currentData.march_earned =
      parseFloat(currentData.march_earned) + parseFloat(newData.earnedAmount);

    currentData.earnedAmount =
      parseFloat(currentData.earnedAmount) +
      parseFloat(currentData.march_earned);
    // Записываем обновленные данные обратно в файл
    await fs.writeFile(
      "data.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );

    // Возвращаем обновленные данные в JSON-формате
    res.json(currentData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, ip, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
