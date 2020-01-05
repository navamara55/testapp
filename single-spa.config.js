import * as singleSpa from "single-spa";
const { registerApplication, start } = singleSpa;

registerApplication('test', () => import('./src/main.app'),
    () => true);
start();