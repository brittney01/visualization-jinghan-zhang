var vis1 = "visualization.vl(1).json"; 
vegaEmbed("#map", vis1). then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vis2 = "visualizaton.vl-map1.json";
vegaEmbed("#map", vis2). then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vis3 = "visualizaton.vl-rank.json";
vegaEmbed("#bar_chart", vis3). then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vis4 = "visualizaton.vl-GDP.json";
vegaEmbed("#table-based-plot", vis4). then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);