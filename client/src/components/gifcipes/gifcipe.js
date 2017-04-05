import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export const Gifcipe = ({title}) => {
    return (
        <div> 
            <h1> {title} </h1>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
