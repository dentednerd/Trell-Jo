import React from 'react';

import './CreateColumn.css';

class CreateColumn extends React.Component {
    render() {
        return (
            <div className='CreateColumnList'>
            <form>
                <input className='CreateColumnInput' type='text' placeholder='Add a list'/>
                <button className='button is-success'>Save</button>
            </form>
            </div>
        );
    }
}

export default CreateColumn;