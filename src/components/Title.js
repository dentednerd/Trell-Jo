import React from 'react';

import Menu from './Menu';

import './Title.css';

class Title extends React.Component {
    render () {
        return (
            <div className="title-bar">
                <button className="button">Title</button>
                <Menu />
            </div>
        );
    }
}

export default Title;