class db {

    constructor(name) {
        this.name=name
        // Check if localstorage has been set before, else create an empty one.
    }

    get() {
        let item = localStorage.getItem(this.name);
        if(!item) {
            return [];
        } else {
            return JSON.parse(item);
        }
    }

    // How to get if there is an console error from a command or function in vuejs
    create(data) {
        let item = JSON.stringify(data)
        localStorage.setItem(this.name, item);
        return localStorage.getItem(this.name);
    }

    delete() {
        delete localStorage.getItem(this.name);
    }
}

export default db;