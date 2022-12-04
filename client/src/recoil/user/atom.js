import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const userState = atom({
    key : 'userState',
    default : {
        id: "",
        user_address: "",
        user_nickname: "",
        user_token1amount: "",
        user_token2amount: "",
        user_score: "",
        user_img: "",
        item_img: "",
        rating:"",
        jttsteaking:"",
    },
    effects_UNSTABLE : [persistAtom]
});

export const Login = atom({
    key : 'isLogin',
    default : false,
    effects_UNSTABLE : [persistAtom]
});