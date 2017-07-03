import React from 'react';

import Title from './Title';
import Columns from './Columns';

class PageBody extends React.Component {
    render () {
        return (
            <div>
                 <Title />
                <Columns />
            </div>
        );
    }
}

export default PageBody;