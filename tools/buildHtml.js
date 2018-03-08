// B''H //




// --------------------------------------------------------------------------------
// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
// --------------------------------------------------------------------------------

/*
One could also do other production-specific features here if desired like referencing a bug tracking library.
I do that in the React Slingshot starter kit on GitHub. So you can give that a look for other ideas.
*/


// --------------------------------------------------------------------------------

// fs, which comes with Node, is useful for interacting with the file system.
import fs from 'fs';

// Cheerio gives us a handy way to interact with an in-memory DOM using jQuery selectors.
import cheerio from 'cheerio';

import colors from 'colors';

/*eslint-disable no-console */
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
fs.readFile('src/index.html', 'utf8', (err, markup) => {

    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
    $('head').prepend('<link rel="stylesheet" href="styles.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });

});
// --------------------------------------------------------------------------------

