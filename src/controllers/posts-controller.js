const posts = require("../data/posts");



// create functions for return posts and post by id

getAllPosts = () => {
    return posts;
}


getPostById = (postId) => {
    return posts.filter(x => x.id == postId)
}


module.exports = {
    getAllPosts,
    getPostById
};