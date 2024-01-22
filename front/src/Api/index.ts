export type {default as Api} from './api';
import type Api from './api';
import RealApi from './real';
import MockApi from './mock';
export * as Objects from "./objects";



let instance: Api | undefined = undefined;

const DEV_MODE = false;

export default function api(): Api {
    if(instance === undefined) {
        if(DEV_MODE) {
            instance = new MockApi();
        } else {
            instance = new RealApi();
        }
    }

    return instance;
}