import readline from "readline";
import { promises as fs } from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const showMenu = () => {
    rl.question("Enter the File Name ", (fileName) => {
        rl.question("Enter the Content for File ", (fileContent) => {
       createFile(fileName, fileContent);
       rl.close();
       })         
    })
}

const createFile = async (fileName, fileContent) => {
    try {
       await fs.writeFile(`${fileName}.txt`, fileContent, "utf-8");
        console.log("Create file sucessfully");
    } catch (error) {
    console.error("❌ Error creating file:", error);
    }  
}

showMenu();