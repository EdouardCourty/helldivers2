import axios from "axios";

export default class {
    /** @type axios.AxiosInstance */
    static #instance = null;

    static getInstance() {
        if (this.#instance === null) {
            this.#instance = axios.create({
                baseURL: 'https://api.live.prod.thehelldiversgame.com'
            });
        }

        return this.#instance;
    }
}
