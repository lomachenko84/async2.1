import { json } from "./basic";
import { read } from "./basic";

export class GameSavingLoader {
    static async load() {
        const data = await read()
        const response = await json(data)
        return response

    }
}
GameSavingLoader.load().then((saving) => {
    console.log(saving)
})