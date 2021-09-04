import { connect } from "mongoose";
(async () => {
    try {
        const db = await connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        return error;
        process.exit(1);
    }
})();