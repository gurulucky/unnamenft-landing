const Web3 = require('web3')
const WHITE_LIST = require('./whitelist')

const contractAddress = process.env.CONTRACT_ADDRESS
const contractOwner = process.env.CONTRACT_OWNER


const getSign = async (req, res) => {
    try {
        let userAddress = req.query.userAddress
        // Message to sign : contract address + address to give access
        const web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
        var message = web3.utils.sha3(contractAddress.substring(2) + userAddress.substring(2), { encoding: 'hex' })
        console.log('message',message)
        // Signing message (with "\x19Ethereum Signed Message:\n32" as prefix by default)
        // console.log(web3.eth.personal)
        let sign = await web3.eth.personal.sign(message, contractOwner)
        res.json(sign)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Sever Error')
    }
}

module.exports = { getSign }