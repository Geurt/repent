import React from 'react';
import { connect } from 'react-redux';
import { addConfession } from '../actions/confessions';

export class ConfessionalBooth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confession: ""
        }
    }

    onConfessionChange = (e) => {
        const confession = e.target.value;
        this.setState(() => ({ confession }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        // for now I just take the first few words as a title:
        console.log('confession: ',this.state.confession);
        const firstWords = this.state.confession
                            .split(' ')                 // split in words
                            .slice(0,4)                 // take the first few words
                            .map((word) => word + ' '); // add spaces
        // let's remove last space and add elipses
        firstWords[firstWords.length - 1] = firstWords[firstWords.length - 1].replace(' ', '...');
        // ...and jsx will render the array as text anyhow.

        this.props.addConfession({
            title: firstWords,
            body: this.state.confession
        });
    }

    render() {
        return (
            <form className="confessional-booth" onSubmit={this.onSubmit}>
                <textarea
                    onChange = {this.onConfessionChange}
                    className="confessional-booth__text" 
                    placeholder="confess"
                    value={this.state.confession}
                />
                <button className="confessional-booth__button">repent</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addConfession: (confession) => dispatch(addConfession(confession))
})

export default connect(undefined, mapDispatchToProps)(ConfessionalBooth);
