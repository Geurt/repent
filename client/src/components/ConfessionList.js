import React from 'react';
import { connect } from 'react-redux';
import Confession from './Confession';
import { fetchConfessions } from '../actions/confessions';

export class ConfessionList extends React.Component {
    componentDidMount() {        
        // let's fetch some confessions with an API call
        this.props.dispatch(fetchConfessions());
    }

    render() {
        return (
            <div className="confession--list">
                {this.props.confessions.map((confession, i) => <Confession key={i} title={confession.title} body={confession.confession} />)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // for now just return the state as confessions
        confessions: state
    }
}

export default connect(mapStateToProps)(ConfessionList);
