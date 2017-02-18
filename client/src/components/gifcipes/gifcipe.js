import React from 'react';
import {connect} from 'react-redux';

import {getGifcipe} from '../../store/actions';

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
         console.log(src);
         if (gifcipe.data.children[i].data.domain === 'gfycat.com') {
            data.push(
                    <div className="col-xs-6 col-md-3" key={i}>
                        <video width="210" preload="none" poster={`https://thumbs.${src}-poster.jpg`}>
                            <source src={`https://giant.${src}.mp4`} type="video/mp4" />
                        </video>
                    </div>,
                );
            } else if (gifcipe.data.children[i].data.domain === 'i.imgur.com') {
                data.push(
                    <div className="col-xs-6 col-md-3" key={i}>
                        <video width="210" preload="none" poster={`${src}h.jpg`}>
                            <source src={`${src}.mp4`} type="video/mp4" />
                        </video>
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
