import { Objects } from ".";
import Api from "./api";

export default class MockApi implements Api {

    #users: Map<string, Objects.User>;
    constructor () {
        this.#users = new Map([[
            "marco", {
                userName: "marco",
                password: "cheems",
                userKind: "alumno"
            }
        ],
        [
            "melissa", {
                userName: "melissa",
                password: "perritos",
                userKind: "profesor"
            }
        ],
        [
            "federico", {
                userKind: "directivo",
                password: "lobos",
                userName: "federico"
            }
        ]
    ])
    }

    authenticate = async (user_name:string, password:string): Promise<Objects.User> => {
        let user = this.#users.get(user_name);
        if(user === undefined ) {
            return Promise.reject("No existe el usuario")
        } else {
            if(user.userName == user_name  && user.password == password){
                return Promise.resolve(user)
            } else{
                return Promise.reject("Datos incorrectos")
            }
        }
    };

    
}