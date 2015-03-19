var app = app || {};

(function () {

	app.mapView = Backbone.View.extend({

		initialize: function () {

		},

		render: function () {
			var resolutions = [
                        0.703125, 0.3515625, 0.17578125,
                        0.087890625, 0.0439453125, 0.02197265625,
                        0.010986328125, 0.0054931640625, 0.00274658203125,
                        0.001373291015625, 0.0006866455078125, 0.0003433227539062,
                        0.0001716613769531, 0.0000858306884766, 0.0000429153442383,
                        0.0000214576721191, 0.0000107288360596, 0.0000053644180298,
                        0.0000026822090149, 0.0000013411045074, 0.0000006705522537,
                        0.0000003352761269
                    ]
			this.map = new ol.Map ({
				target: 'map',
				renderer: 'canvas',
				interaction: [],
				controls: [],
				layers: [
					new ol.layer.Tile({
						source: new ol.source.TileWMS({
							url: 'http://maps.itu.edu.tr:8082/geoserver/gwc/service/wms',
							params: {
								'LAYERS': 'localhost:campus_maslak',
								'FORMAT': 'image/jpeg',
								'VERSION': '1.1.1'
							},
							serverType: 'geoserver'
						})	
					}),
				],
				view: new ol.View({
					center: [29.029200, 41.104924],
					zoom: 17,
					minZoom: 17,
					maxZoom: 21,
					extent: [29.010995635,41.097090849999994,29.041494355,41.111602049999995],
					projection: new ol.proj.Projection({
						code: 'EPSG:4326',
						units: 'degrees'
					})

				})
			})
		}

	});

})();