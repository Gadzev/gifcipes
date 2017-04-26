import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getGifcipe, testData} from '../../store/actions';
import './gifcipe.scss';
import fav from '../../img/fav.png';
import Spinner from '../spinner';

const mapStateToProps = state => ({
    gifcipe: state.gifcipes.gifcipe,
    isLoading: state.gifcipes.loading,
    renderData: state.testReducer.data,
});

const mapDispatchToProps = dispatch => ({
    test: payload => dispatch(getGifcipe(payload)),
    testData: payload => dispatch(testData(payload)),
});

class Gifcipes extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentWillMount() {
        this.props.test('');
    }

    render() {
        const data = [];
        const {gifcipe, isLoading} = this.props;

        if (gifcipe) {
        for (let i = 0; i < gifcipe.data.children.length; i++) {
            let src = gifcipe.data.children[i].data.url.toString()
                .replace('.gifv', '').replace('https://', '');
            src = src.replace('.gif', '');
            if (gifcipe.data.children[i].data.domain === 'gfycat.com') {
                data.push(
                        <div className="col-md-3 thumb-parent">
                            <Link to={`/gifcipe/${gifcipe.data.children[i].data.name}`}>
                            <img src={`https://thumbs.${src}-poster.jpg`} className="img-thumbnail" />
                            <img src={fav} className="fav-icon" />
                                <div className="card-title">{gifcipe.data.children[i].data.title}</div>
                        </Link></div>,
                    );
                } else if (gifcipe.data.children[i].data.domain === 'i.imgur.com') {
                    data.push(
                            <div className="col-md-3 thumb-parent">
                                <Link to={`/gifcipe/${gifcipe.data.children[i].data.name}`}>
                                <img src={`${src}h.jpg`} className="img-thumbnail" />
                                <img src={fav} className="fav-icon" />
                                    <div className="card-title">{gifcipe.data.children[i].data.title}</div>
                            </Link></div>,
                    );
                }
            }
        }

        return (
            <div className="container">
                <div className="container-mobile">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <div className="row" key={1}>
                            <button className="btn btn-default"
                                onClick={this.props.testData.bind(this, data)} >
                                testDATA CLICKENZI </button>
                                <button className="btn btn-danger"
                                onClick={this.props.test.bind(this, gifcipe.data.after)}>
                                gifcipe CLICKENZI
                                </button>
                            {this.props.renderData}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipes);
