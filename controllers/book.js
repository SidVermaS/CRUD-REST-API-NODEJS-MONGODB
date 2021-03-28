import express from 'express'
import Book from '../models/Book.js'
import mongoose from 'mongoose'

const create=async (req, res)=> {
    try {
        const { title, year }=req.body

        const newBook=new Book({
            _id: new mongoose.Types.ObjectId(),
            title,
            year
        })
        const book=await newBook.save()
        if(book)    {
            return res.status(201).json({ message: 'Successfully created', book })
        }   else    {
            return res.status(500).json({ message: 'Failed to create '})
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to create '})
    }
}

const fetchAll=async (req, res)=>   {
    try {
        const books=await Book.find()
        if(books)    {
            return res.status(200).json({ message: 'Successfully fetched', books })
        }   else    {
            return res.status(500).json({ message: 'Failed to fetch '})
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to fetch '})
    }
}

const fetch=async (req, res)=>   {
    try {
        const { _id }=req.params
        const book_id=mongoose.Types.ObjectId(_id)
        const book=await Book.findOne(book_id)
        if(book)    {
            return res.status(200).json({ message: 'Successfully fetched', book })
        }   else    {
            return res.status(500).json({ message: 'Failed to fetch '})
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to fetch '})
    }
}

const update=async (req,res)=>  {
    try {
        const { _id, title, year }=req.body
        const book_id=mongoose.Types.ObjectId(_id)
        const updateBook=new Book({
            title, year
        })
        const book=await Book.findByIdAndUpdate(book_id, updateBook)
        if(book)    {
            return res.status(200).json({ message: 'Successfully updated', book })
        }   else    {
            return res.status(500).json({ message: 'Failed to update '})
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to update '})
    }
}

const remove=async (req, res)=> {
    try {
        const { _id }=req.params
        const book_id=mongoose.Types.ObjectId(_id)

        const book=await Book.findByIdAndRemove(book_id)
        if(book)    {
            return res.status(200).json({ message: 'Successfully deleted', book })
        }   else    {
            return res.status(500).json({ message: 'Failed to delete '})
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to delete '})
    }
}

export {
    create,
    fetch,
    fetchAll,
    update,
    remove
}