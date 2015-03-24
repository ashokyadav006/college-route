var app = app || {};

(function () {

	app.mapView = Backbone.View.extend({

		initialize: function () {

		},

		render: function () {
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
							}
						})	
					}),
				],
				view: new ol.View({
					center: [29.029200, 41.104924],
					zoom: 18,
					minZoom: 17,
					maxZoom: 20,
					projection: new ol.proj.Projection({
						code: 'EPSG:4326',
						units: 'degrees'
					})

				})
			})
		}

	});

})();