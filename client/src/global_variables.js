const JTOKEN = require ("./abi/JetToken");
const J2TOKEN = require ("./abi/Jet2Token");
const NFT = require ("./abi/nft");
const JTEMS = require ("./abi/JetrisItems");
const MARKET = require ("./abi/market");
const STAKING = require ("./abi/staking");
const LP = require ("./abi/lp");
const LPT = require ("./abi/lpt");
const ROUTER = require ("./abi/router");
const USER = require ("./abi/user");

export const NFT_CONTRACT_ADDR = process.env.REACT_APP_NFT_CONTRACT_ADDR;
export const MARKET_CONTRACT_ADDR = process.env.REACT_APP_MARKET_CONTRACT_ADDR;
export const JTEMS_CONTRACT_ADDR = process.env.REACT_APP_ITEMS_CONTRACT_ADDR;
export const JTOKEN_CONTRACT_ADDR = process.env.REACT_APP_TOKEN_CONTRACT_ADDR;
export const J2TOKEN_CONTRACT_ADDR = process.env.REACT_APP_VJMTOKEN_CONTRACT_ADDR;
export const STAKING_CONTRACT_ADDR = process.env.REACT_APP_STAKING_CONTRACT_ADDR;
export const ROUTER_CONTRACT_ADDR = process.env.REACT_APP_ROUTER_CONTRACT_ADDR;
export const LPT_CONTRACT_ADDR = process.env.REACT_APP_LPT_CONTRACT_ADDR;
export const LP_CONTRACT_ADDR = process.env.REACT_APP_LP_CONTRACT_ADDR;
export const USER_CONTRACT_ADDR = process.env.REACT_APP_USER_CONTRACT_ADDR;

export const version = '367';

export const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

const getJTokenContractABI = () => {
    return JTOKEN["abi"];
}

const getJ2TokenContractABI = () => {
    return J2TOKEN["abi"];
}

const getNFTContractABI = () => {
    return NFT["abi"];
}

const getJtemsContractABI = () => {
    return JTEMS["abi"];
}

const getMarketContractABI = () => {
    return MARKET["abi"];
}

const getUserContractABI = () => {
    return USER["abi"];
}

const getStakingContractABI = () => {
    return STAKING["abi"];
}
const getLPContractABI = () => {
    return LP["abi"];
}
const getLPTContractABI = () => {
    return LPT["abi"];
}
const getRouterContractABI = () => {
    return ROUTER["abi"];
}



export const JTOKEN_CONTRACT_ABI = getJTokenContractABI();
export const J2TOKEN_CONTRACT_ABI = getJ2TokenContractABI();
export const NFT_CONTRACT_ABI = getNFTContractABI();
export const JTEMS_CONTRACT_ABI = getJtemsContractABI();
export const MARKET_CONTRACT_ABI = getMarketContractABI();
export const STAKING_CONTRACT_ABI = getStakingContractABI();
export const LP_CONTRACT_ABI = getLPContractABI();
export const LPT_CONTRACT_ABI = getLPTContractABI();
export const ROUTER_CONTRACT_ABI = getRouterContractABI();
export const USER_CONTRACT_ABI = getUserContractABI();
