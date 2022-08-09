const Express = require("express");
const userRouters = require("./routes/user.js");
const loginRouters = require("./routes/login.js");
const articleRouters = require("./routes/article.js");
const commentRouters = require("./routes/comment.js");

const dotenv = require("dotenv");
dotenv.config();



// express settings 
const app = new Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user', userRouters);
app.use('/login', loginRouters);
app.use('/article', articleRouters);
app.use('/comment', commentRouters);


app.get("/", (req, res) => {
    res.send("Hello World");
}
);
const port = process.env.PORT || 4245;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);

