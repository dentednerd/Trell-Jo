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
        this.updateCards = this.updateCards.bind(this);
    }
    render () {
        return (
            <div>
                    <div>
                        <Column updateCards={this.updateCards} lists={this.state.lists}/>
                    </div>
                </div>
        );
    }
    updateCards () {
        console.log('Im working')
    }
}

export default Columns;