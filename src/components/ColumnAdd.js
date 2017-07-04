import React from 'react';

import './ColumnAdd.css';

class ColumnAdd extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showForm: false
        };
        this.toggleForm = this.toggleForm.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    render () {
        return (
            <div className='FormBox'>
                {
                    this.state.showForm
                    ? <form onSubmit={this.handleSubmit} >
                        <input className='ColumnAddForm' type="text"/>
                        <button className='button is-success' type="submit">Add</button>
                        <a onClick={this.toggleForm} className='delete is-medium'></a>
                    </form>
                    : <a href="#" className="AddLink" onClick={this.toggleForm}>
                        <div className="ColumnAdd">
                            Add a card...
                        </div>
                    </a>
                }
            </div>
        );
    }
    toggleForm () {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    handleSubmit (event) {
        event.preventDefault();
        const newCard = event.target.children[0].value;
        this.props.updateCards(newCard, this.props.id);
    }
}

export default ColumnAdd;