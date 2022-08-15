const userRouters = require("../routes/user.js");
const loginRouters = require("../routes/login.js");
const articleRouters = require("../routes/article.js");
const commentRouters = require("../routes/comment.js");
const replyRouters = require("../routes/reply.js");

const pagesdatas = {
    user: {
        title: 'user',
        logo: "bi-person",
        models: {
            user: {
                path: "/user",
                routes: userRouters.stack
            },
            login: {
                path: "/login",
                routes: loginRouters.stack
            }
        }
    },
    article: {
        title: 'article',
        logo: "bi-journal-bookmark-fill",
        models: {
            article: {
                path: "/article",
                routes: articleRouters.stack
            },
            comment: {
                path: "/comment",
                routes: commentRouters.stack
            },
            reply: {
                path: "/reply",
                routes: replyRouters.stack
            }
        }
    }
}

module.exports = pagesdatas;