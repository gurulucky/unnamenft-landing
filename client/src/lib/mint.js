import Web3 from 'web3'
import { NFT_ABI } from './abi.js'
import { getProof } from 'src/actions/manager.js'

const rinkebynet = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const mainnet = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const NFT_ADDRESS = '0x19fC73307B84477717a4B48Fb03b2b467C548345'
const PRICE = 0.001

export const mint = async (account, amount) => {
    let proof = await getProof(account)
    console.log(proof)
    let abc_contract = new window.web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let res = await abc_contract.methods.mintNFTs(proof, amount).send({ from: account, value: window.web3.utils.toWei((PRICE * amount).toString(), "ether") })
    return res.status
}

export const getTotalMinted = async () => {
    let web3 = new Web3(rinkebynet)
    let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenCounter = Number(await abc_contract.methods.totalSupply().call());
    console.log('totalminted', tokenCounter)
    return tokenCounter;
}

export const hasEnoughEth = async (account, amount) => {
    try {
        let balance = await window.web3.eth.getBalance(account);
        // console.log(balance, window.web3.utils.toWei((PRICE * amount).toString, "ether"));
        if (isBigger(String(balance), String(window.web3.utils.toWei((PRICE * amount).toString(), "ether"))) >= 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err.message);
        return false;
    }
}

export const isBigger = (x, y) => {
    x = x || "0";
    y = y || "0";
    if (x.length > y.length) y = "0".repeat(x.length - y.length) + y;
    else if (y.length > x.length) x = "0".repeat(y.length - x.length) + x;

    for (let i = 0; i < x.length; i++) {
        if (x[i] < y[i]) return -1;
        if (x[i] > y[i]) return 1;
    }
    return 0;
}