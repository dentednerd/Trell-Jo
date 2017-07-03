import React from 'react';

import ColumnList from './ColumnList';


class Column extends React.Component {
    render() {
        return (
            <div>Column
                <ColumnList />
            </div>
        );
    }
}

export default Column;