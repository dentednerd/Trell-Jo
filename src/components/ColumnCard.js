import React from 'react';

import './ColumnCard.css';

class ColumnCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textEditorVisible: false
        };
        this.makeTextEditorVisible = this.makeTextEditorVisible.bind(this);
        this.updateCard = this.updateCard.bind(this);
    }
    render() {
        return (
            <a href='#'>
                <div>
                    {
                        this.state.textEditorVisible
                            ? <div className="modal is-active">
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                        <form onSubmit={this.updateCard}>
                                    <section className='modal-card-body'>
                                            <textarea>
                                                {this.props.card.text}
                                                </textarea>
                                    </section>
                                    <footer className='modal-card-foot'>
                                            <button className='button is-success'>Save</button>
                                        <button onClick={this.makeTextEditorVisible} className="modal-close is-large"></button>
                                    </footer>
                                        </form>
                                </div>
                            </div>
                            : <div className='box'>
                                {this.props.card.text}
                                < button onClick={this.makeTextEditorVisible} className='changeColorButton button is-white'>
                                    <span className="icon is-small">
                                        <i className="fa fa-pencil"></i>
                                    </span>
                                </button>
                            </div>

                    }
                </div>
            </a >
        );
    }
    makeTextEditorVisible() {
        this.setState({
            textEditorVisible: !this.state.textEditorVisible
        });
    }
    updateCard (event) {
        event.preventDefault();
        const newText = event.target[0].value;
        this.props.editCard(newText, this.props.id, this.props.card.id);
    }
}

export default ColumnCard;