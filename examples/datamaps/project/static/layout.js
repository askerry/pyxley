
    var Component = require("./static/bower_components/pyxley/build/pyxley.js").FilterChart;
    var filter_style = "''";
var dynamic = "true";
var charts = [{"type": "Datamaps", "options": {"url": "/data_map/", "chartid": "mapid", "params": {"month": "1"}}}];
var filters = [{"type": "SliderInput", "options": {"min": 1, "default": "1", "max": 13, "label": "Month", "alias": "month", "step": 1}}];
    React.render(
        React.createElement(Component, {
        filter_style: filter_style, 
dynamic: dynamic, 
charts: charts, 
filters: filters}),
        document.getElementById("component_id")
    );
    