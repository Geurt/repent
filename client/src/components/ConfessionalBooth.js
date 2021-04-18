import React from 'react';
import { connect } from 'react-redux';
import { postConfession } from '../actions/confessions';

export class ConfessionalBooth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confession: "",
            hasWarning: false
        }
    }

    onConfessionChange = (e) => {
        const confession = e.target.value;
        this.setState(() => ({ 
            confession,
            hasWarning: false
        }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        // check for bots:
        const captcha = this.state.confession.slice(-11)
        if (captcha !== 'Forgive me.') {
            this.setState((prevState) => ({
                confession: prevState.confession,
                hasWarning: true
            }))
        } else {
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
            // clear form
            this.setState(() => ({
                confession: '',
                hasWarning: false
            }))
        }

    }

    render() {
        return (
            <form className="confessional-booth" onSubmit={this.onSubmit}>
                <textarea
                    onChange = {this.onConfessionChange}
                    className={this.state.confession.length > 0 ? "confessional-booth__text active" : "confessional-booth__text"}
                    placeholder="confess"
                    value={this.state.confession}
                />
                {this.state.hasWarning && <p className="confessional-booth__capthca-warning">Confessions must end with the phrase: Forgive me. Because bots will never be forgiven.</p>}
                <button className="confessional-booth__button">repent</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    postConfession: (confession) => dispatch(postConfession(confession))
})

export default connect(undefined, mapDispatchToProps)(ConfessionalBooth);
