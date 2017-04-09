import React from 'react';
import {connect} from 'react-redux';

import {Gifcipe} from '../../components/gifcipes';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


class Recipe extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const {params} = this.props;
            return (
                <Gifcipe id={this.props.params.id} />
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
