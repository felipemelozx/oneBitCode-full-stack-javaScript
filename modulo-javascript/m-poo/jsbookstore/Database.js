module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [],
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(posterName) {
        return this.#storage.books.find(b => b.name === posterName)
    }
    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }
    addBooksToStock(posterName, quantity) {
        const book = this.findBookByName(posterName)
        book?.addToStock(quantity)
    }
    removeBooksFromStock(posterName, quantity) {
        const book = this.findBookByName(posterName)
        book?.removeFromStock(quantity)
    }
    getBooks(){
        return this.#storage.books
    }
    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
    }
    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }
    addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }
    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }
    saveOrder(order) {
        this.#storage.orders.push(order)
    }
    showStorage() { 
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}