import React from 'react';

import ColumnTitle from './ColumnTitle';
import ColumnCards from './ColumnCards';
import ColumnAdd from './ColumnAdd';

class ColumnList extends React.Component {
    render() {
        return (
            <div>ColumnList
                <ColumnTitle />
                <ColumnCards />
                <ColumnAdd />
            </div>
        );
    }
}

export default ColumnList;