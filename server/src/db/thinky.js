// npm packages
import initThinky from 'thinky';

// our packages
import {db as dbConfig} from '../../config';

const thinky = initThinky(dbConfig);

const {r} = thinky;


// export
export {thinky, r};
