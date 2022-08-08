const Express = require("express");
const userRouters = require("./routes/user.js");
const loginRouters = require("./routes/login.js");


// express settings 
const app = new Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user', userRouters);
app.use('/login', loginRouters);


const port = process.env.PORT || 4245;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);

