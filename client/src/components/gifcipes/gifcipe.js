import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export const Gifcipe = () => {
    return (
        <div> 
            <h1> Gifcipe component </h1>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
