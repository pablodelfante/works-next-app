import fs from "fs";
import path from "path";

export async function readFile(pathToRead) {
    try {
        const query = fs.readFileSync(path.resolve(pathToRead), "utf8");
        return query
    } catch (err) {
        console.error('readFileDice:', err);
        return null;
    }
}