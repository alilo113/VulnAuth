import express from "express"

const app = express()

app.get("/", (req,res) => {
	res.json({message: "Hello world"})
})

app.listen(() => {
	console.log("This app listen to port 3000") 
})
