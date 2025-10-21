import express from "express"

const app = express()

app.use(express.json())

let userDB = []
app.post("/signup", async (req, res) => {
    try {
        const {username, password, email} = req.body
        userDB.push({
            username: username,
            password: password,
            email: email
        })
        res.status(201).json({message: "User signed up successfullyu"})
        console.log(userDB)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log("This app is listening to port 3000")
})