import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getGifcipe} from '../../store/actions';
import './gifcipe.scss';
import fav from '../../img/fav.png';

const mapStateToProps = state => ({
    gifcipe: state.gifcipes.gifcipe,
    click: state.gifcipes.click,
});

const mapDispatchToProps = dispatch => ({
    test: () => dispatch(getGifcipe()),
});

const Gifcipes = ({gifcipe, test, click}) => {
    const data = [];

    if (gifcipe) {
     for (let i = 2; i < gifcipe.data.children.length; i++) {
         let src = gifcipe.data.children[i].data.url.toString().replace('.gifv', '').replace('https://', '');
         src = src.replace('.gif', '');
         if (gifcipe.data.children[i].data.domain === 'gfycat.com') {
            data.push(
                    <div className="col-md-3 thumb-parent" key={i}>
                        <Link to={`/gifcipe/${gifcipe.data.children[i].data.name}`}>
                        <img src={`https://thumbs.${src}-poster.jpg`} className="img-thumbnail" />
                        <img src={fav} className="fav-icon" />
                            <div className="card-title">{gifcipe.data.children[i].data.title}</div>
                    </Link></div>,
                );
            } else if (gifcipe.data.children[i].data.domain === 'i.imgur.com') {
                data.push(
                        <div className="col-md-3 thumb-parent" key={i}>
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
            <button className="btn btn-danger" onClick={test}>
                Click
            </button>
        <div className="container-mobile">
            {click && (<div className="row" key={data.key}>
                {data}
            </div>
            )}
        </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipes);
