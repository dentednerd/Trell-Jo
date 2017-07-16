import React from 'react';

import Column from './Column';
import './BoardLists.css';

import { v4 } from 'uuid';

class BoardLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                    id: v4(),
                    title: 'House Stark',
                    cards: [
                        {
                            id: v4(),
                            text: 'Jon: unite the North'
                        },
                        {
                            id: v4(),
                            text: 'Sansa: ditch Littlefinger'
                        },
                        {
                            id: v4(),
                            text: 'Brienne: smooch Tormund'
                        },
                        {
                            id: v4(),
                            text: 'Davos: stay mad at Melisandre'
                        }
                    ]
                },
                {
                    id: v4(),
                    title: 'House Targaryen',
                    cards: [
                        {
                            id: v4(),
                            text: 'Daenerys: invade Westeros'
                        },
                        {
                            id: v4(),
                            text: 'Tyrion: go to some AA meetings, dude'
                        },
                        {
                            id: v4(),
                            text: 'Varys: build alliances'
                        },
                        {
                            id: v4(),
                            text: 'Missandei: smooch Grey Worm'
                        }
                    ]
                }
            ]
        };
        this.updateCards = this.updateCards.bind(this);
        this.addAList = this.addAList.bind(this);
        this.editListTitle = this.editListTitle.bind(this);
        this.editCard = this.editCard.bind(this);
    }
    render() {
        return (
            <div>
                <Column
                    editListTitle={this.editListTitle}
                    addAList={this.addAList}
                    updateCards={this.updateCards}
                    editCard={this.editCard}
                    lists={this.state.lists} />
            </div>
        );
    }
    updateCards(newCard, id) {
        const newCardFormatted = {
            id: v4(),
            text: newCard
        };
        const index = findIndex(this.state.lists, id);
        const a = this.state.lists;
        a[index].cards.push(newCardFormatted);
        this.setState({
            lists: a
        });
    }
    addAList(listTitle) {
        const formattedList = {
            id: v4(),
            title: listTitle,
            cards: []
        };
        this.setState({
            lists: this.state.lists.concat(formattedList)
        });
    }
    editListTitle(newTitle, id) {
        const index = findIndex(this.state.lists, id);
        const listToEdit = this.state.lists;
        listToEdit[index].title = newTitle;
        this.setState({
            lists: listToEdit
        });
    }
    editCard(text, listId, cardId) {
        const listIndex = findIndex(this.state.lists, listId);
        const cardIndex = findIndex(this.state.lists[listIndex].cards, cardId);
        const listToEdit = this.state.lists;
        const formattedComment = {
            id: cardIndex,
            text: text
        };
        listToEdit[listIndex].cards[cardIndex] = formattedComment;
        this.setState({
            lists: listToEdit
        });
    }
}

function findIndex(lists, id) {
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].id === id) {
            return i;
        }
    }
}

export default BoardLists;