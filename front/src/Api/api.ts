import { Objects } from ".";

export default interface Api {
    authenticate: (user_name: string, password: string) => Promise<Objects.User>
}