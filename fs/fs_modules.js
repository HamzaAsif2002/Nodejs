const fs = require("fs");
const path = require ("path")


const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);


const writeFile = fs.writeFileSync(filePath, "this is a file", "utf-8");
console.log(writeFile);

const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);


const appendFile = fs.appendFileSync(filePath, "\nthis is data", "utf-8");
console.log(appendFile);

const deleteFile = fs.unlinkSync(filePath);
console.log(deleteFile);

const newFileName = "renameText.txt";
const newFilePath = path.join(__dirname, newFileName);


const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);

