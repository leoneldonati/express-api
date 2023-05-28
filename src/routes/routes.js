import { Router } from "express";

export const router = Router()

router.get('/', (req, res) => {res.send('Base route')})
router.get('/products', (req, res) => {res.send('Products route')})
router.get('/products/:id', (req, res) => {res.send('Product route')})
router.get('/profile/:id', (req, res) => {res.send('Profile route')})

router.post('/products', (req, res) => {res.send('Product created')})
router.post('/users', (req, res) => {res.send('User created')})
