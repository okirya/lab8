function initMap() {
	L.mapquest.key = "LneGflJzwlB3xoCaidEGsQStvnH8wBr0"

	var map = L.mapquest.map('map', {
	 	center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.88, -117.236]).addTo(map);
}


