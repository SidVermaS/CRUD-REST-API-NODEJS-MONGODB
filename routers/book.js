import express from 'express'
import { create, fetchAll, fetch, update, remove } from '../controllers/book.js'

const router=express.Router()

router.post('/', create)
router.get('/',fetchAll)
router.get('/:_id',fetch)
router.patch('/',update)
router.delete('/:_id', remove)

export default router