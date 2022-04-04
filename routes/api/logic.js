
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
// const { WHITE_LIST } = require('./whitelist')

const WhiteList = [
    "0xc5Da0445c213CF71E04ad5af2E14d7E9bF114f7E",
    "0x73eA2Fdc2315f5ac9AdDA2f815F4aF8e52D9Bf4d",
    "0x3E8A9DA88aEAb7EcE3cD8f90227Dab855BFDc716",
    "0xaB2a8CF4e61D83c7185214179FbA1191b895B177"
]

const leafNodes = WhiteList.map(addr => keccak256(addr))
// console.log(leafNodes)
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
const rootHash = merkleTree.getRoot()
console.log('merkle root', rootHash)


const getProof = async (req, res) => {
    try {
        let address = req.query.address
        const proof = merkleTree.getHexProof(keccak256(address))
        console.log(proof)
        res.json(proof)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Sever Error')
    }
}

const getProofOf = async (address) => {
    try {
        const proof = merkleTree.getHexProof(keccak256(address))
        console.log(address, proof)
    } catch (err) {
        console.log(err.message)
    }
}

getProofOf(WhiteList[3])

module.exports = { getProof }