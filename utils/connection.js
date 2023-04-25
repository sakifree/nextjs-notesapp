import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
    .on("open", () => console.log("Connected to Mongo"))
    .on("error", (error) => console.log(error))

export const connection = mongoose