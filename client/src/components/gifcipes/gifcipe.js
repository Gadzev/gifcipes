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

const Gifcipe = ({gifcipe, test, click}) => (
    <div>
        <button className="btn btn-danger" onClick={test}>
          Click
        </button>

        {click && (<div>
            <img src={gifcipe.data.children[2].data.thumbnail} alt="test" />
        </div>
        )}
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Gifcipe);
