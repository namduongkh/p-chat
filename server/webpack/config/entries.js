const ROOT_PATH = process.cwd();
const glob = require("glob")

const ENTRIES = function (env) {
    let entries = [
        // ...glob.sync(ROOT_PATH + '/templates/js/*.js'),
        // ...glob.sync(ROOT_PATH + '/templates/vue/*.vue'),
        // ...glob.sync(ROOT_PATH + '/templates/scss/*.scss'),
        ...glob.sync(ROOT_PATH + "/templates/+(*)/+(*.js|*.scss)")
    ];
    // if (env == 'dev') {
    //     entries.push(
    //         ...glob.sync(ROOT_PATH + '/app-debug/*.js'),
    //         ...glob.sync(ROOT_PATH + '/app-debug/templates/*.scss'));
    // }
    return entries;
};

module.exports = ENTRIES;