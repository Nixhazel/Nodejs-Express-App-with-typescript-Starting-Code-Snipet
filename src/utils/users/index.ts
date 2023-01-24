import fs from "fs";

export const getAllData = (pathFile: string) => {
    const result = fs.readFileSync("users.json", "utf-8");
    return JSON.parse(result);
}