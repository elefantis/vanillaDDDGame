class UID{
    static #uid
    constructor() {       
    }

    static getNewUID() {
        if(typeof this.#uid !== 'number')
        {                      
            this.#uid = 0;
        }

        return this.#uid++;
    }
}