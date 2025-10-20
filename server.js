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
            eamil: email
        })
        console.log(userDB)s
        res.status(200).send.json({message: "User signed up successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log("This app is listening to port 3000")
})