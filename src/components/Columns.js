import React from 'react';

import Column from './Column';
// import CreateColumn from './CreateColumn';

import {v4} from 'uuid';

class Columns extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
           lists: [
                {
                    id: v4(),
                    title: 'title',
                    cards: [
                        {
                            id: v4(),
                            text: 'card1'
                        },
                        {
                            id: v4(),
                            text: 'card2'
                        },
                        {
                            id: v4(),
                            text: 'card3'
                        },
                        {
                            id: v4(),
                            text: 'card4'
                        }
                    ]
                },
                {
                    id: v4(),
                    title: 'title',
                    cards: [
                        {
                            id: v4(),
                            text: 'card1'
                        },
                        {
                            id: v4(),
                            text: 'card2'
                        },
                        {
                            id: v4(),
                            text: 'card3'
                        },
                        {
                            id: v4(),
                            text: 'card4'
                        }
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