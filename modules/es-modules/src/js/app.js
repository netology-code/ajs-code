// import './logs.js';

// v.1
// import { Client, timeout } from './stats.js';
// import client from './stats.js';

// v.2
// import client, { Client, timeout } from './stats.js';

// errors demo
// import { unexpored } from './stats.js';
// import { external } from './stats.js';
// import './raw';

// conflict
// import client, { Client, timeout } from './logs.js';
// import client, { Client, timeout } from './stats.js';

// conflict
// import logsClient, { Client, timeout } from './logs.js';
// import statsClient, { Client, timeout } from './stats.js';

// renaming
// import logsClient, { Client as LogsClient, timeout as logsTimeout } from './logs.js';
// import statsClient, { Client as StatsClient, timeout as statsTimeout } from './stats.js';

// import * as logs from './logs.js';
// import * as stats from './stats.js';

import * as logs from './logs.js';
import statsClient, * as stats from './stats.js';

console.log(stats);

import('./dynamic.js').then(mod => console.log(mod));


