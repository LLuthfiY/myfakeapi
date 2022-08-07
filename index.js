import Express from "express";
import userRouters from "./routes/user.js";


// express settings 
const app = new Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user', userRouters);


const port = process.env.PORT || 4245;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);

