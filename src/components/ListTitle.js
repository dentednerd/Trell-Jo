import React from 'react';

import './ListTitle.css';
import PropTypes from 'prop-types';

class ListTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.editTitle = this.editTitle.bind(this);
    }
    render() {
        return (
            <div className="ListTitle">
                {
                    this.state.editable
                        ? <form onBlur={this.toggleEdit}>
                            <input onChange={this.editTitle} type="text" className='editTitle' placeholder={`${this.props.title}`} />
                        </form>
                        : <a href='#' onClick={this.toggleEdit}>
                            <h1>{this.props.title}</h1>
                        </a>
                }

            </div>

        );
    }
    toggleEdit() {
        this.setState({
            editable: !this.state.editable
        });
    }
    editTitle (event) {
        event.preventDefault();
        this.props.editListTitle(event.target.value, this.props.id);
    }
}


ListTitle.propTypes = {
    title: PropTypes.string.isRequired,
    editListTitle: PropTypes.func.isRequired,
    // id: PropTypes.string.isRequred
};

export default ListTitle;