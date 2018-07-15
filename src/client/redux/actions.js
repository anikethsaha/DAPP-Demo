module.exports = {
    addContractInstance : (contract) => {
        return ({
            type : "ADD_CONTRACT_DETAILS",
            contract
        })
    },
    addWeb3DefaultAccount : (web3DefaultAccount) => {
        return ({
            type : "ADD_WEB3_DEFAULT_ACCOUNT",
            web3DefaultAccount
        })
    },
    addEthInstance : (ethInstance) => {
        return ({
            type : "ADD_ETH_INSTANCE",
            ethInstance
        })
    },
    getContractInstance : () => {
        return ({
                type : "GET_CONTRACT_INSTANCE"
            })
    }

}