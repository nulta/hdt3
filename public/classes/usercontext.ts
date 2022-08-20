import { createContext } from "preact";
import { User } from "./user";

const UserContext = createContext<User>(null)
export default UserContext
