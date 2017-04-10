import React from 'react';
import {connect} from 'react-redux';

import {getGifcipeById} from '../../store/actions';
import Spinner from '../spinner';

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
        let source;

        if (!isLoading) {
            if (gifcipeById.data.children[0].data.domain === 'gfycat.com') {
                source = gifcipeById.data.children[0].data.url.toString()
                    .replace('.gifv', '').replace('https://', '')
                    .replace('.gif', '')
                    .replace('http://', '');
                source = `https://giant.${source}.mp4`;
            } else if (gifcipeById.data.children[0].data.domain === 'i.imgur.com') {
                source = gifcipeById.data.children[0].data.url.toString()
                    .replace('.gifv', '').replace('https://', '')
                    .replace('.gif', '')
                    .replace('http://', '');
                source = `https://${source}.mp4`;
            }
        }

        return (
            <div>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div>
                    <h1> {gifcipeById.data.children[0].data.title} </h1>
                        <video loop autoPlay controls>
                            <source src={source} type="video/mp4" />
                        </video>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
