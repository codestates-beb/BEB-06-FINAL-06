// injectedConnector 인스턴스를 생성한다. 
//connector 들만 모아두고 관리하기 위해 connectors.js 내부에 connector들 선언)
import {InjectedConnector} from '@web3-react/injected-connector';

export const injected = new InjectedConnector();