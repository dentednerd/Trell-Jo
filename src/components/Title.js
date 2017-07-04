import React from 'react';

import Menu from './Menu';

import './Title.css';

class Title extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            editable: false,
            pageTitle: 'title'
        };
        this.toggleEditable = this.toggleEditable.bind(this);
        this.editTitle = this.editTitle.bind(this);
    }
    render () {
        return (
            <div className="title-bar">
                {
                this.state.editable
                ? <form onBlur={this.toggleEditable}>
                    <input type="text" onChange={this.editTitle} className="titleInput" placeholder={this.state.pageTitle}></input>
                </form>
                : <button className="button" onClick={this.toggleEditable}>{this.state.pageTitle}</button>
                
                }
            <Menu />
            </div>
        );
    }

    toggleEditable () {
        this.setState ({
            editable: !this.state.editable
        });
    }
    editTitle (event) {
        event.preventDefault();
        this.setState({
            pageTitle: event.target.value
        });
    }
}

export default Title;