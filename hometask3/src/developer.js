class Developer {
    constructor(name, lang){
        this.name = name;
        this.lang = lang;
    }

    displayInfo() {
        return `Имя: ${this.name}, Язык программирвоания: ${this.lang}`
    }
}

module.exports = Developer