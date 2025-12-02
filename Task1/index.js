const express = require("express");
const fs = require("fs");
const data = require("./Moc_data.json");

const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: false }));

app
  .route("/users")
  .get((req, res) => {
    res.json(data);
  })
  .post((req, res) => {
    const body = req.body;
    data.push({ id: data.length + 1, ...body });
    fs.writeFile("./Moc_data.json", JSON.stringify(data), (error) => {
      res.json({ status: "success", id: data.length });
    });
  });

app
  .route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((item) => item.id == id);
    res.json(user);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const users = data.filter((item) => item.id !== id);
    fs.writeFile("./Moc_data.json", JSON.stringify(users), (error) => {
      res.json({
        status: "success",
        message: `User with ID ${id} deleted successfully`,
        remainingUsers: users.length,
      });
    });
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const updates = req.body;
    console.log(updates);

    const userIndex = data.findIndex((item) => item.id === id);

    data[userIndex] = { ...data[userIndex], ...updates };

    fs.writeFile("./Moc_data.json", JSON.stringify(data, null, 2), (err) => {
      res.json({
        status: "success",
        message: "User updated successfully",
        updatedUser: data[userIndex],
      });
    });
  });

app.listen(port, () => {
  console.log(`Server is startin at port ${port}`);
});
