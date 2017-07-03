import React from 'react';

import Column from './Column';
// import CreateColumn from './CreateColumn';

class Columns extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
           lists: [
                {
                    title: 'title',
                    cards: [
                        'text',
                        'text',
                        'text'
                    ]
                },
                {
                    title: 'title',
                    cards: [
                        'text',
                        'text',
                        'text'
                    ]
                }
            ]
        };
    }
    render () {
        return (
            <div>
                    <div>
                        <Column lists={this.state.lists}/>
                    </div>
                </div>
        );
    }
}

export default Columns;