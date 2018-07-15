import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux'
// import {
//     getContractInstance
// } from '../../client/redux/actions'
class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('this.props :', this.props);
    }
    componentDidMount(){
        const { contract }= this.props;
        console.log('contract :', contract);

    }
    render() {
        return (
            <div className="flex m-4 my-8">
                <div className="flex-1">
                    <h5 className="container" id="reg-status"></h5>
                    <form className="w-full">
                        <div className="flex items-center border-b border-b-2 border-teal py-2">
                            <input required className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight" type="text" placeholder="Enter the network address" id="user_addr" aria-label="Full name" />
                            <input required className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight" type="text" placeholder="Enter the Name" id="user_name" aria-label="Full name" />
                            <button id="reg-btn" className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2  rounded-full" type="button">
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        contract : state.contract,
        web3DefaultAccount : state.web3DefaultAccount,
        web3Eth : state.web3Eth
    }
}
const mapDepatchToProps =(dispatch) => {
    return {
        // getContract : ()=> dispatch(getContractInstance())
    }
}







RegisterContainer.propTypes = {};
RegisterContainer = connect(
  mapStateToProps,
  mapDepatchToProps
)(RegisterContainer)

export default RegisterContainer;
