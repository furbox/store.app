import mongoose from 'mongoose';
import { config } from "dotenv";
config();
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();