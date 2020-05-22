import React from 'react';
import { connect } from 'react-redux';
import { postForgiveConfession, postUnforgiveConfession } from '../actions/confessions';

export class Confession extends React.Component {
    onForgive = () => {
        this.props.forgiveConfession(this.props.confession);
    }

    onUnforgive = () => {
        this.props.unforgiveConfession(this.props.confession);
    }

    render() {
        return (
            <div className="confession">
                <h2 className="confession--title">{this.props.confession.title}</h2>
                <p className="confession--text">{this.props.confession.confession}</p>
                <div className="confession--forgiveness-container">            
                    <div className="confession--forgiveness-counter">
                        <span className={this.props.confession.forgivenCount > this.props.confession.unforgivenCount ? 'confession--forgiveness_counter-active' : 'confession--forgiveness_counter-inactive'}>
                            forgiven </span>
                        by {this.props.confession.forgivenCount}
                        <span className="confession--forgiveness_counter_separator">/</span> 
                        <span className={this.props.confession.forgivenCount < this.props.confession.unforgivenCount ? 'confession--forgiveness_counter-active' : 'confession--forgiveness_counter-inactive'}>
                            unforgiven </span> 
                        by {this.props.confession.unforgivenCount}</div>
                    <div className="confession--button-container">
                        <button className="confession--button confession--button__forgive" onClick={this.onForgive}>forgive</button>
                        <button className="confession--button confession--button__not" onClick={this.onUnforgive}>not</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    forgiveConfession: (confession) => dispatch(postForgiveConfession(confession)),
    unforgiveConfession: (confession) => dispatch(postUnforgiveConfession(confession))
})

export default connect(undefined, mapDispatchToProps)(Confession);
