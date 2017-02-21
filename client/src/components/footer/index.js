import React from 'react';

import {Notifications} from '../notifications';

const style = {
    footer: {
        position: 'absolute',
        bottom: '0',
        width: 'auto',
        right: '0',
    },
};

export default () => (
    <footer style={style.footer} className="pull-right">
        <div className="row">
            <div className="col-xs-11 col-sm-9 col-md-7">
                <Notifications />
            </div>
        </div>
    </footer>
);
