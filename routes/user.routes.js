const express = require("express");
const router = express.Router();

const { get_users, get_user, post_user } = require("../controllers/user.controllers");

router.get("/user", get_users)

router.get("/user/:id", get_user)

router.post("/user", post_user)


module.exports = {
    router_user: router
}