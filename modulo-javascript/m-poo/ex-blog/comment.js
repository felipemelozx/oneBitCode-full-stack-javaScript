class Comment {
    constructor(username, content){
        this.content = content
        this.username = username
        this.createAt = new Date()
    }
}

module.exports = Comment