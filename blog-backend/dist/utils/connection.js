"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
const connectToDatabase = async () => {
    try {
        await (0, mongoose_1.connect)(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ka6h6yt.mongodb.net/?retryWrites=true&w=majority`);
    }
    catch (err) {
        console.log(err);
        return err;
    }
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=connection.js.map