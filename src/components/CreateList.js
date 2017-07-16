import React from 'react';
import PropTypes from 'prop-types';

import './CreateList.css';

class CreateList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showForm: false
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    render () {
        return (
            <div >
                {
                    this.state.showForm
                        ? <form onSubmit={this.submitHandler} className='CreateList'>
                            <input className='CreateListInput' type='text' placeholder='Add a list' />
                            <button className='button is-success'>Save</button>
                             <a onClick={this.toggleForm} className='delete is-medium'></a>
                        </form>
                        : <a href='#' className='AddList' onClick={this.toggleForm}>
                            <div className='listAdd'>
                                Add a list...
                                </div>
                        </a>

                }
            </div>
        );
    }
    submitHandler (event) {
        event.preventDefault();
        const newTitle = event.target.children[0].value;
        this.props.addAList (newTitle);
    }
    toggleForm () {
        this.setState({
            showForm: !this.state.showForm
        });
    }
}


CreateList.propTypes = {
    addAList: PropTypes.func.isRequired,
};

export default CreateList;