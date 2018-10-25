const ROOT_PATH = process.cwd();
const glob = require("glob")

const ENTRIES = function (env) {
    return glob.sync(ROOT_PATH + "/templates/+(*)/+(*.js|*.scss)");
};

module.exports = ENTRIES;