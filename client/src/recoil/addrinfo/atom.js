import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const addrinfoAtom = atom({
  key: 'addrinfo',
  default: {
    address: "",
    charId: "",
    jtemId: "",
  },
  effects_UNSTABLE: [persistAtom]
});