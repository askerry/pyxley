
    var Component = require("./static/bower_components/pyxley/build/pyxley.js").Table;
    var type = "Table";
var options = {"url": "/mytable/", "className": "display", "params": {}, "id": "mytable", "table_options": {"sDom": "<\"top\">rt<\"bottom\"lp><\"clear\">", "pageLength": 9, "drawCallback": "\nconfidence_interval(this.api().column(3, {\"page\":\"current\"}).data(), \"mytable\");\n", "searching": false, "scrollX": true, "deferRender": true, "paging": true, "bSort": false, "columnDefs": [{"orderable": false, "targets": 3, "render": "<svg width=\"156\" height=\"20\"><g></g></svg>"}], "initComplete": "\n\nnew $.fn.dataTable.FixedColumns(this, {\n    leftColumns: 1,\n    rightColumns: 0\n});\nconfidence_interval(this.api().column(3, {\"page\":\"current\"}).data(), \"mytable\");\n"}};
    React.render(
        React.createElement(Component, {
        type: type, 
options: options}),
        document.getElementById("component_id")
    );
    