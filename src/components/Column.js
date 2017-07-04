import React from 'react';
import PropTypes from 'prop-types';

import ColumnList from './ColumnList';
import CreateColumn from './CreateColumn';

import './Columns.css';

class Column extends React.Component {
    render () {
        return (
            <div className="columns">
                    {this.props.lists.map((list) => {
                        return (<div className="column is-3" key={list.id}>
                            <ColumnList editListTitle={this.props.editListTitle} updateCards={this.props.updateCards} list={list}/>
                        </div>);
                    })}

                <div className="column is-3">
                    <CreateColumn addAList={this.props.addAList}/>
                </div>
            </div>
        );
    }
}

Column.propTypes = {
    lists: PropTypes.array.isRequired,
    updateCards: PropTypes.func.isRequired,
    addAList: PropTypes.func.isRequired
};

export default Column;