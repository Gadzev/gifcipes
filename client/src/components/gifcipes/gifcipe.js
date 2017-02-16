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
         data.push(
                <div className="col-xs-6 col-md-3" key={i}>
                    <img src={gifcipe.data.children[i].data.thumbnail} className="img-thumbnail" alt="test" />
                </div>,
            );
        }
    }

    return (
    <div>
        <button className="btn btn-danger" onClick={test}>
          Click
        </button>

        {click && (<div key={data.key}>
            {data}
        </div>
        )}
    </div>
);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
