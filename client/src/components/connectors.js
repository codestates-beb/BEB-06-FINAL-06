// 지갑을 dapp에 연결하기 위해서는 해당 지갑과 맞는 connector를 activate함수에 인자로 전달해야 함
import {InjectedConnector} from '@web3-react/injected-connector';

export const injected = new InjectedConnector();