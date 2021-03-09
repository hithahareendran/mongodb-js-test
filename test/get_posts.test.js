const posts = require("../get_posts.js");

describe("integration test", function () {
    it(' get all posts add with bookmarked ', function () {
        /* inputs */
        var req = {};
        var res = {};
        /* mocks */
        res.send = function (json) {
            console.log("Result of the query", json);
        };

        /* calling the method */
        posts.getPosts(req, res);

    });
});