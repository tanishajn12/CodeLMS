import mongoose,{Schema} from "mongoose";

const testimonialSchema = new Schema({
    content:{
        required: true,
        type: String
    },

    rating:{
        required: false,
        type: Number
    },

    courseId:{
        required: true,
        type:Schema.ObjectId,
        ref :"Course"
    },

    user:{
        required: true,
        type:Schema.ObjectId,
        ref :"User"
    },

});

export const Testimonial = mongoose.models.Testimonial?? mongoose.model("Testimonial", testimonialSchema)