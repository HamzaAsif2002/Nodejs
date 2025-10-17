const fs = require ("fs");
const path = require ("path");

const fileName = "asyncText.txt";
const filePath = path.join(__dirname, fileName);

//write file
const writeFile = fs.writeFile(filePath, "this is async file", "utf-8", (error) => {
 if(error){
    console.log(error);
 }
 else{
    console.log("Your File Saved Successfully");  
 }
})

console.log(writeFile);

//read file
const readFile = fs.readFile(filePath, "utf-8", (error, data) => {
if(error){
    console.error(error);
}
else{
    console.log(data);
    
}
})

console.log(readFile);

//append file
const appendFile = fs.appendFile(filePath, "\n updated data", "utf-8", (error) => {
  if(error){
    console.error(error);
    
  }
  else{
    console.log("append file successfully");
    
  }
})

console.log(appendFile);

//delete file
const deleteFile = fs.unlink(filePath, (error)=>{
if(error){
    console.error(error);
    
}
else{
    console.log("unlink successfully");
    
}
})
console.log(deleteFile);



// rename file.
const newFileName = "rename.txt";
const newFilePath = path.join(__dirname, newFileName);

const renameFile = fs.rename(filePath, newFilePath, (error)=> {
if(error){
    console.log(error);
}
else{
    console.log("rename Successfully");    
}
})
console.log(renameFile);
