import React from 'react';
import {connect} from 'react-redux';

import {getGifcipe} from '../../store/actions';
import './gifcipe.scss';

const mapStateToProps = state => ({
    gifcipe: state.gifcipes.gifcipe,
    click: state.gifcipes.click,
});

const mapDispatchToProps = dispatch => ({
    test: () => dispatch(getGifcipe()),
});

const Gifcipe = ({gifcipe, test, click}) => {
    const data = [];

    if (gifcipe) {
     for (let i = 2; i < gifcipe.data.children.length; i++) {
         let src = gifcipe.data.children[i].data.url.toString().replace('.gifv', '').replace('https://', '');
         src = src.replace('.gif', '');
         if (gifcipe.data.children[i].data.domain === 'gfycat.com') {
            data.push(
                    <div className="col-xs-6 col-md-3" key={i}>
                        <img src={`https://thumbs.${src}-poster.jpg`} className="img-thumbnail" />
                    </div>,
                );
            } else if (gifcipe.data.children[i].data.domain === 'i.imgur.com') {
                data.push(
                    <div className="col-xs-6 col-md-3" key={i}>
                         <img src={`${src}h.jpg`} className="img-thumbnail" />
                    </div>,
                );
            }
        }
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-danger" onClick={test}>
                Click
            </button>

            {click && (<div className="row" key={data.key}>
                {data}
            </div>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
