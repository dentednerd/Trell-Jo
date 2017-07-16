import React from 'react';

import NavBar from './NavBar';
import Board from './Board';

class App extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <Board />
            </div>
        );
    }
}

export default App;