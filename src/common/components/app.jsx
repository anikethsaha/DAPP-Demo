import React from 'react';
import PropTypes from 'prop-types';
import Header from "./header.jsx";
import RegisterContainer from "./register.jsx";
import PaymentContainer from "./paymentcontainer.jsx";
import Web3 from 'web3';
import { Provider } from 'react-redux'
import { store } from '../../client/redux'
import {
    addContractInstance,
    addEthInstance,
    addWeb3DefaultAccount
} from '../../client/redux/actions'



class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        const web3 = new Web3(Web3.givenProvider || new Web3(new Web3.providers.HttpProvider('http://localhost:7545')));
        var walletContract = {};
        $.getJSON('../../contracts/Wallet.json',async function(walletContractJSONabi) {
            walletContract = new web3.eth.Contract(
            walletContractJSONabi.abi,
            '0xc74c8d941494495a4f65c42bebc556398e1f028d' // contract address
            );

            // store walletContract in redux store
             const reduxStateAfterContractDispact = await store.dispatch(addContractInstance(walletContract));
            console.log('reduxStateAfterContractDispact :', reduxStateAfterContractDispact);
             web3.eth.getAccounts().then(async res => {
                web3.eth.defaultAccount = res[0];
                // default account,
                const reduxStateAfterDefaultAccountDispatch = await store.dispatch(addWeb3DefaultAccount(res[0]));
                walletContract.options.from = res[0];
            });
            // adding web3.eth to store
            const reduxStoreAfterWeb3EthDispatch = await store.dispatch(addEthInstance(web3.eth));
            console.log('reduxStoreAfterWeb3EthDispatch :', reduxStoreAfterWeb3EthDispatch);
        })
        store.getState().then(res=>console.log('get state res :', res))
    }


    render() {
        store.getState().then(res => {
            console.log("getstate fomr lvlvllv",res);
        })
        return (
            <div className=" ">
                <Provider store = {store} >
                   <div className=" mx-auto">
                        <Header/>
                        <div className="container mx-auto">
                            <RegisterContainer />
                            <PaymentContainer />
                        </div>
                    </div>
                </Provider>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
