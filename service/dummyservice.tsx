import axios from "axios";
import { store } from "../app/GlobalRedux/store"
import { increment, } from '../app/GlobalRedux/Features/counter/counterSlice';

const postReq = (url: any, params: any) => {
    store.dispatch(increment())
    return null
}

export default { postReq }