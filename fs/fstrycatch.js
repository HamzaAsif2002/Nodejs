const fs = require ("fs/promises");
const path = require ("path");

const fileName = "TryCatch.txt";
const filePath = path.join(__dirname,fileName);

// Write File
 
const writeFile = async () => {
    try {
        await fs.writeFile(filePath, "This is Try and Catch file", "utf-8");
        console.log("write file sucessfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
writeFile();

// Read File

const readFile = async () => {
    try {
       data =  await fs.readFile(filePath, "utf-8");
      console.log(data);
      
    } catch (error) {
        console.log(error);
        
    }
}
readFile();

//Append File

const AppendFile = async () => {
 try {
   await fs.appendFile(filePath, "\n updated file", "utf-8")
   console.log("Update Sucessfully");
   
  } catch (error) {
    console.log(error);
    
  }
}
AppendFile();

//Unlink File

const UnlinkFile = async () => {
    try {
        await fs.unlink(filePath);
        console.log("Unlink Sucessfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
UnlinkFile();

