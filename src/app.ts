import express, { Application, Request, Response, NextFunction } from "express"

const app: Application = express()

const add = (a: number, b: number): number => a + b

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Your answer: ' + add(5, 5))
})

app.listen(5000, () => {
    console.log("Server running")
})