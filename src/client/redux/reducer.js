import { initialState } from './initialState'
import { resolve } from 'path';
import _ from 'lodash';



const reducer = async (state = initialState,Action) => {
    switch (Action.type) {
        case "ADD_CONTRACT_DETAILS":

            console.log('Action :', Action);
            return await Object.assign({},state,{
                contract : Action.contract
            });

        case "ADD_WEB3_DEFAULT_ACCOUNT":
            console.log("ADD_WEB3_DEFAULT_ACCOUNT");

            return await Object.assign({},state,{
                web3DefaultAccount : Action.web3DefaultAccount
            });
        case "ADD_ETH_INSTANCE":
            console.log("ADD_ETH_INSTANCE");

           return await Object.assign({},state,{
            web3Eth : Action.ethInstance
    })



        default:
            return state;
    }
}








module.exports = {
    reducer
}