import React from 'react';
import {connect} from 'react-redux';

import {Gifcipe} from '../../components/gifcipes';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export const Recipe = () => {
    return (
        <Gifcipe />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
