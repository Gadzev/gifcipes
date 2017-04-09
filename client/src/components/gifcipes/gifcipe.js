import React from 'react';
import {connect} from 'react-redux';

import {getGifcipeById} from '../../store/actions';

const mapStateToProps = state => ({
    gifcipeById: state.recipe.gifcipeById,
    isLoading: state.recipe.loading,
});

const mapDispatchToProps = dispatch => ({
    getGifcipeById: payload => dispatch(getGifcipeById(payload)),
});


class Gifcipe extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentWillMount() {
        this.props.getGifcipeById(this.props.id);
    }

    render() {
        const {gifcipeById, isLoading} = this.props;
        return (
            <div>
                {isLoading ? (
                    <h1> Loading... </h1>
                ) : (
                   <h1> {gifcipeById.data.children[0].data.title} </h1>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
