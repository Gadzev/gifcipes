import React from 'react';

import {Notifications} from '../notifications';
import './footer.scss';


export default () => (
    <footer className="pull-right footer">
        <div>
            <div className="col-xs-11 col-sm-9 col-md-7">
                <Notifications />
            </div>
        </div>
    </footer>
);
