import React from 'react';

import ColumnList from './ColumnList';
import CreateColumn from './CreateColumn';

import './Columns.css';

class Column extends React.Component {
    render() {
        return (
            <div className="columns">
                    {this.props.lists.map((list) => {
                        return (<div className="column is-3">
                            <ColumnList updateCards={this.props.updateCards} list={list}/>
                        </div>);
                    })}

                <div className="column is-3">
                    <CreateColumn />
                </div>

                {/*<div className="column">
                    <ColumnList />
                </div>
                <div className="column">
                    <ColumnList />
                </div>*/}
            </div>
        );
    }
}

export default Column;