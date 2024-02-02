import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        book_id: {
            type : String,
            required : true,
        },
        title:{
            type : String,
            required: true,
        },
        author:{
            type: String,
            required : true,
        },
        publicationYear:{
            type : Date,
            required : true,
        }

    },{timestamps: true}
);

const Books = mongoose.model("books",bookSchema);
export default Books;