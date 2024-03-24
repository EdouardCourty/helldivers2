import axios from "axios";

export default class {
    /** @type axios.AxiosInstance */
    static #instance = null;

    static getInstance() {
        if (this.#instance === null) {
            this.#instance = axios.create({
                baseURL: 'https://api.live.prod.thehelldiversgame.com',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                    'Accept-Language': 'fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6'
                }
            });
        }

        return this.#instance;
    }
}
