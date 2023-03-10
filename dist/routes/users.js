"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../utils/users");
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    const getAllUsers = (0, users_1.getAllData)("users.json");
    res.send({
        message: 'respond with a resource',
        data: getAllUsers
    });
});
exports.default = router;
