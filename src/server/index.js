import { devServer } from "./dev.js";
import { prodServer } from "./production.js";


export const server = (options) => {
    const { mode } = options;
    console.log(options)
    if(mode === 'development') {
        devServer();
    } else {
        prodServer();
    }
}