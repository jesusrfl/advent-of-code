import { readFileSync } from 'fs';

const day = process.argv[2];

if (!day) {
  throw 'Day param required';
}

const path = `./2023/day/${day}/`;

import(`${path}/index.js`).then(module => {
  console.log(module.execute(readFileSync(`${path}/input.txt`, 'utf-8').split(/\r?\n/)));
});
