import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item" href="#">Item</a> 
                    </div>
                    <div className="nav-center">
                        <a className="nav-item" href="#">Item</a> 
                    </div>
                    <div className="nav-right">
                        <a className="nav-item" href="#">Item</a> 
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;