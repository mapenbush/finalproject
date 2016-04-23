	
	
//create maps
var map1 = L.map('map1', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})
var map2 = L.map('map2', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})

// define addLayer function
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map1);
}
function addLayer2(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map2);
}
//add basemaps

var y2016L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.33bcmday',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    });



y2016L.addTo(map1);
	
var y2016R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.1nrctxwm',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    });
   
   y2016R.addTo(map2);

// building layers
var layers =  [y1750L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.0qwbxryp',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1800L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.a1fesp64',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),		
		y1850L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.dsclxfd6',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),
		y1900L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.b413yxh6',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1950L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.4cqldu7m',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y2000L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.0no6j845',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'}),
		y2016L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.33bcmday',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    })
   ];
   
//extent layers
var exLayers =  [
    y1750R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.po8ckkhk',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1800R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.po8ckkhk',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1850R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.60u22nxn',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1900R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.ac5dm0f6',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1950R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.4jj22crd',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	}), 
		y2000R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.1n8ejeqt',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	})

   ];

var yearsLeft = {
	    "1750" : y1750L,
	    "1800" : y1800L,
	    "1850": y1850L,
	    "1900" : y1900L,
	    "1950" : y1950L,
	    "2000": y2000L,
	    "Present" : y2016L
	};
	
var yearsRight = {
	    "1750" : y1750R,
	    "1800" : y1800R,
	    "1850": y1850R,
	    "1900" : y1900R,
	    "1950" : y1950R,
	    "2000" : y2000R,
	    "Present": y2016R
	};
   
   
   
//toggle layers
L.control.layers(yearsLeft).addTo(map1);
L.control.layers(yearsRight).addTo(map2);




var arrayLength = layers.length;
var arrayLength2 = exLayers.length;

// set the counter for the timer
var i = 0;                     

// set the timer delay function to add building layers to map, calling function name in HTML button
function gogogo () {           
   setTimeout(function () {    
      addLayer(layers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength) {            
         gogogo();             
      }                        
   }, 7000); // delay between layer adds in milliseconds
};

//function for extent layers
function gogogo2 () {           
   setTimeout(function () {    
      addLayer2(exLayers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength2) {            
         gogogo2();             
      }                        
   }, 7000); // delay between layer adds in milliseconds
};
//sync maps
map1.sync(map2);
map2.sync(map1);

//splash screen

	$("#splasher").click(function(){
		$("#splasher").fadeOut('slow');
		gogogo ();
		gogogo2 ();
	});

