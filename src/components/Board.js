import React from 'react';

import BoardTitle from './BoardTitle';
import BoardLists from './BoardLists';

class Board extends React.Component {
    render () {
        return (
            <div>
                <BoardTitle />
                <BoardLists />
            </div>
        );
    }
}

export default Board;