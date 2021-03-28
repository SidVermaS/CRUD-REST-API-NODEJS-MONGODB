import mongoose from 'mongoose'

const BookSchema=({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title:  {
        type: String,
        required: true
    },
    year:   {
        type: Number,
    }
})

export default mongoose.model('books',BookSchema)