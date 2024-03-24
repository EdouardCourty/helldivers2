import axios from "axios";

export default class HttpErrorException extends Error {
    #code;
    #response

    constructor(message, code, response) {
        super(message);

        this.#code = code;
        this.#response = response;
    }

    /**
     * @returns number
     */
    getCode() {
        return this.#code;
    }

    /**
     * @returns axios.AxiosResponse
     */
    getResponse() {
        return this.#response;
    }
}
