import React from 'react';

import Column from './Column';
import AddColumn from './AddColumn';

class Columns extends React.Component {
    render() {
        return (
            <div>
                    <div>
                        <Column />
                        <AddColumn />
                    </div>
                </div>
        );
    }
}

export default Columns;