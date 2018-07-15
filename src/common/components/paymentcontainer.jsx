import React from 'react';
import PropTypes from 'prop-types';

class PaymentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="flex m-4">
                    <div className="w-full ">
                         <div className=" bg-white w-full my-4 p-6">
                            <label className="block text-left py-4 text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Address
                            </label>
                            <input className=" border-grey-lighter border appearance-none w-full py-2 px-3 text-grey-darker leading-tight" id="reciever_user_addr" type="text" placeholder="address" />
                            <label className="block text-left py-4 text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Amount
                            </label>
                            <input className=" border-grey-lighter border appearance-none w-full py-2 px-3 text-grey-darker leading-tight" id="reciever_user_amount" type="number" placeholder="amount" />
                            <button  id="pay-btn" className="bg-grey hover:bg-blue-dark text-white font-bold py-1 px-2 m-2 rounded-full">
                                pay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex m-4 min-w-0">
                    <div className="w-full max-w-full" >
                        <div className="w-full  my-4 bg-white ">
                            <ul id="payment-reciept"></ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PaymentContainer.propTypes = {};

export default PaymentContainer;
