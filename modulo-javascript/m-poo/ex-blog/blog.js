const Author = require("./author");


const felipe = new Author('felipe')

const post = felipe.write('titulo do poste', 'Lorem ipsum...')

post.addComment('esta funcionando.')
post.addComment('esta funcionando2..')

    console.log(felipe)
    console.log(post)