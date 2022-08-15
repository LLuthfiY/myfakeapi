// express
const Express = require("express");
const userRouters = require("./routes/user.js");
const loginRouters = require("./routes/login.js");
const articleRouters = require("./routes/article.js");
const commentRouters = require("./routes/comment.js");
const replyRouters = require("./routes/reply.js");

const dotenv = require("dotenv");
dotenv.config();

// express settings 
const app = new Express();
app.use(Express.static("public"));
app.use(Express.static("./node_modules/bootstrap-icons"))
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user', userRouters);
app.use('/login', loginRouters);
app.use('/article', articleRouters);
app.use('/comment', commentRouters);
app.use('/reply', replyRouters);

// ejs settings
app.set("view engine", "ejs");
app.set("views", "./views");

// page settings
const pagesdatas = require("./config/routes.js");

// home page
app.get("/", (req, res) => {
    res.render("home.ejs", {
        data: pagesdatas
    });
});

// listen to port
const port = process.env.PORT || 4245;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});