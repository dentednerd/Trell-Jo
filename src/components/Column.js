import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import CreateList from './CreateList';

import './Column.css';

class Column extends React.Component {
    render () {
        return (
            <div className="columns">
                    {this.props.lists.map((list) => {
                        return (<div className="column is-3" key={list.id}>
                            <List 
                            editListTitle={this.props.editListTitle}
                            editCard={this.props.editCard}
                            updateCards={this.props.updateCards} 
                            list={list}/>
                        </div>);
                    })}

                <div className="column is-3">
                    <CreateList addAList={this.props.addAList}/>
                </div>
            </div>
        );
    }
}

Column.propTypes = {
    lists: PropTypes.array.isRequired,
    updateCards: PropTypes.func.isRequired,
    addAList: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    editListTitle: PropTypes.func.isRequired
};

export default Column;