const Comment = require("./comment")

class Post {
    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comment = []
        this.creastaAd = new Date()
    }
    addComment(username, content){
        this.comment.push(new Comment)
    }
}

module.exports = Post