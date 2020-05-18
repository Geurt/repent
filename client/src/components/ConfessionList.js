import React from 'react';
import { connect } from 'react-redux';
import Confession from './Confession';

const ConfessionList = (props) => {
    return (
        <div className="confession--list">
            { props.confessions.map((confession, i) => <Confession key={i} title={confession.title} body={confession.body} />) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // for now just return the state as confessions
        confessions: state
    }
}

export default connect(mapStateToProps)(ConfessionList);
