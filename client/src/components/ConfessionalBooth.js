import React from 'react';
import { connect } from 'react-redux';
import { postConfession } from '../actions/confessions';

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
        const title = this.state.confession
                            .split(' ')                 // split in words
                            .slice(0,4)                 // take the first few words
                            .join(' ')                  // make a string again
                            .concat('...');             // add ellipses

        // api call
        this.props.postConfession({
            title,
            confession: this.state.confession
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
    postConfession: (confession) => dispatch(postConfession(confession))
})

export default connect(undefined, mapDispatchToProps)(ConfessionalBooth);
