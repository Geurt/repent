import React from 'react';
import { connect } from 'react-redux';
import { setWorstFilter, setLatestFilter } from '../actions/filters';

export class ConfessionsFilter extends React.Component {
    onSetLatestFilter = () => {
        this.props.setLatestFilter();
    }

    onSetWorstFilter = () => {
        this.props.setWorstFilter();
    }

    render() {
        return (
            <div className="confessions-filter">
                <button onClick={this.onSetLatestFilter} className={`confessions-filter__button confessions-filter__button--latest ${this.props.filter === 'latest' && "active"}`}>latest</button>
                <button onClick={this.onSetWorstFilter} className={`confessions-filter__button confessions-filter__button--worst ${this.props.filter === 'worst' && "active"}`}>worst</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    setWorstFilter: () => dispatch(setWorstFilter()),
    setLatestFilter: () => dispatch(setLatestFilter())
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfessionsFilter);
