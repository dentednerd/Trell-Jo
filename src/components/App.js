import React from 'react';

import NavBar from './NavBar';
import PageBody from './PageBody';

class App extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <PageBody />
            </div>
        );
    }
}

export default App;