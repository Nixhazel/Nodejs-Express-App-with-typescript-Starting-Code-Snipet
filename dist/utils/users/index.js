"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllData = void 0;
const fs_1 = __importDefault(require("fs"));
const getAllData = (pathFile) => {
    const result = fs_1.default.readFileSync("users.json", "utf-8");
    return JSON.parse(result);
};
exports.getAllData = getAllData;
