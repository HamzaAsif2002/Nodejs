const fs = require("fs");
const path = require("path");

const fileName = "fspromises.txt";
const filePath = path.join(__dirname, fileName);


fs.promises.writeFile(filePath, "This is fsPromises File", "utf-8")
.then(console.log("File Create Sucessfully"))
.catch((err) => console.log(err));

fs.promises.readFile(filePath, "utf-8")
.then((data)=> console.log(data))
.catch((err) => console.log(err));

fs.promises.appendFile(filePath, "\nThis is update", "utf-8")
.then(console.log("file Update Successfully"))
.catch((err) => console.log(err));

fs.promises.unlink(filePath)
.then(console.log("Unlink Sucessfully"))
.catch((err) => console.log(err));

const newFileName = "newName.txt";
const newFilePath = path.join(__dirname, newFileName);
fs.promises.rename(filePath, newFilePath)
.then(console.log("Sucessfully"))
.catch((err) => console.log(err));

const file = __dirname;
fs.promises.readdir(file)
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

