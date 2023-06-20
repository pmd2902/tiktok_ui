const {
    override,
    useBabelRc,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
    // enable legacy decorators babel plugin


    // disable eslint in webpack


    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled

    // add an alias for "ag-grid-react" imports


    // adjust the underlying workbox

);