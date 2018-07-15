import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="bg-white p-2 py-4">
            <div className="container mx-auto ">
                <div className="flex">
                    <div className="flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
                            <h3 className="text-2xl font-mono">Wallet</h3 >
                    </div>
                    <div className="flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 "></div>
                    <div className="flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
                        <ul className="list-reset flex">
                            <li className="mr-6">
                              <a className="text-grey-darker hover:text-grey-darker font-semibold no-underline" href="#">Active</a>
                            </li>
                            <li className="mr-6">
                              <a className="text-grey-darker hover:text-grey-darker font-semibold no-underline" href="#">Link</a>
                            </li>
                            <li className="mr-6">
                              <a className="text-grey-darker hover:text-grey-darker font-semibold no-underline" href="#">Link</a>
                            </li>
                            <li className="mr-6">
                              <a className="text-grey-darker  font-semibold no-underline" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
    </nav>
        );
    }
}

Header.propTypes = {};

export default Header;
