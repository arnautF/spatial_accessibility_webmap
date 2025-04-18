var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Masklayer_1 = new ol.format.GeoJSON();
var features_Masklayer_1 = format_Masklayer_1.readFeatures(json_Masklayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masklayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masklayer_1.addFeatures(features_Masklayer_1);
var lyr_Masklayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masklayer_1, 
                style: style_Masklayer_1,
                popuplayertitle: 'Mask layer',
                interactive: false,
                title: '<img src="styles/legend/Masklayer_1.png" /> Mask layer'
            });
var lyr_GHSLpopulationdistribution_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GHSL population distribution',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/GHSLpopulationdistribution_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2259075.741143, 5572589.880348, 2293629.880074, 5600737.826421]
                            })
                        });
var format_Noserviceareastoallfacilities_3 = new ol.format.GeoJSON();
var features_Noserviceareastoallfacilities_3 = format_Noserviceareastoallfacilities_3.readFeatures(json_Noserviceareastoallfacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noserviceareastoallfacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noserviceareastoallfacilities_3.addFeatures(features_Noserviceareastoallfacilities_3);
var lyr_Noserviceareastoallfacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noserviceareastoallfacilities_3, 
                style: style_Noserviceareastoallfacilities_3,
                popuplayertitle: 'No service areas to all facilities',
                interactive: false,
                title: '<img src="styles/legend/Noserviceareastoallfacilities_3.png" /> No service areas to all facilities'
            });
var format_Noserviceareastohighschoolsandlibraries_4 = new ol.format.GeoJSON();
var features_Noserviceareastohighschoolsandlibraries_4 = format_Noserviceareastohighschoolsandlibraries_4.readFeatures(json_Noserviceareastohighschoolsandlibraries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noserviceareastohighschoolsandlibraries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noserviceareastohighschoolsandlibraries_4.addFeatures(features_Noserviceareastohighschoolsandlibraries_4);
var lyr_Noserviceareastohighschoolsandlibraries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noserviceareastohighschoolsandlibraries_4, 
                style: style_Noserviceareastohighschoolsandlibraries_4,
                popuplayertitle: 'No service areas to high schools and libraries',
                interactive: false,
                title: '<img src="styles/legend/Noserviceareastohighschoolsandlibraries_4.png" /> No service areas to high schools and libraries'
            });
var format_Noserviceareastopharmaciesandgreenmarkets_5 = new ol.format.GeoJSON();
var features_Noserviceareastopharmaciesandgreenmarkets_5 = format_Noserviceareastopharmaciesandgreenmarkets_5.readFeatures(json_Noserviceareastopharmaciesandgreenmarkets_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noserviceareastopharmaciesandgreenmarkets_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noserviceareastopharmaciesandgreenmarkets_5.addFeatures(features_Noserviceareastopharmaciesandgreenmarkets_5);
var lyr_Noserviceareastopharmaciesandgreenmarkets_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noserviceareastopharmaciesandgreenmarkets_5, 
                style: style_Noserviceareastopharmaciesandgreenmarkets_5,
                popuplayertitle: 'No service areas to pharmacies and green markets',
                interactive: false,
                title: '<img src="styles/legend/Noserviceareastopharmaciesandgreenmarkets_5.png" /> No service areas to pharmacies and green markets'
            });
var format_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6 = new ol.format.GeoJSON();
var features_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6 = format_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.readFeatures(json_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.addFeatures(features_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6);
var lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6, 
                style: style_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6,
                popuplayertitle: 'No service areas to primary healtcare facilities and elementary schools',
                interactive: false,
                title: '<img src="styles/legend/Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.png" /> No service areas to primary healtcare facilities and elementary schools'
            });
var format_Elementaryschools5min_7 = new ol.format.GeoJSON();
var features_Elementaryschools5min_7 = format_Elementaryschools5min_7.readFeatures(json_Elementaryschools5min_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementaryschools5min_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementaryschools5min_7.addFeatures(features_Elementaryschools5min_7);
var lyr_Elementaryschools5min_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementaryschools5min_7, 
                style: style_Elementaryschools5min_7,
                popuplayertitle: 'Elementary schools- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Elementaryschools5min_7.png" /> Elementary schools- 5 min'
            });
var format_Elementaryschools10min_8 = new ol.format.GeoJSON();
var features_Elementaryschools10min_8 = format_Elementaryschools10min_8.readFeatures(json_Elementaryschools10min_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementaryschools10min_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementaryschools10min_8.addFeatures(features_Elementaryschools10min_8);
var lyr_Elementaryschools10min_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementaryschools10min_8, 
                style: style_Elementaryschools10min_8,
                popuplayertitle: 'Elementary schools- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Elementaryschools10min_8.png" /> Elementary schools- 10 min'
            });
var format_Elementaryschools15min_9 = new ol.format.GeoJSON();
var features_Elementaryschools15min_9 = format_Elementaryschools15min_9.readFeatures(json_Elementaryschools15min_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementaryschools15min_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementaryschools15min_9.addFeatures(features_Elementaryschools15min_9);
var lyr_Elementaryschools15min_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementaryschools15min_9, 
                style: style_Elementaryschools15min_9,
                popuplayertitle: 'Elementary schools- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Elementaryschools15min_9.png" /> Elementary schools- 15 min'
            });
var format_Elementaryschools_10 = new ol.format.GeoJSON();
var features_Elementaryschools_10 = format_Elementaryschools_10.readFeatures(json_Elementaryschools_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementaryschools_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementaryschools_10.addFeatures(features_Elementaryschools_10);
var lyr_Elementaryschools_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementaryschools_10, 
                style: style_Elementaryschools_10,
                popuplayertitle: 'Elementary schools',
                interactive: true,
                title: '<img src="styles/legend/Elementaryschools_10.png" /> Elementary schools'
            });
var format_Greenmarkets5min_11 = new ol.format.GeoJSON();
var features_Greenmarkets5min_11 = format_Greenmarkets5min_11.readFeatures(json_Greenmarkets5min_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenmarkets5min_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenmarkets5min_11.addFeatures(features_Greenmarkets5min_11);
var lyr_Greenmarkets5min_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenmarkets5min_11, 
                style: style_Greenmarkets5min_11,
                popuplayertitle: 'Green markets- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Greenmarkets5min_11.png" /> Green markets- 5 min'
            });
var format_Greenmarkets10min_12 = new ol.format.GeoJSON();
var features_Greenmarkets10min_12 = format_Greenmarkets10min_12.readFeatures(json_Greenmarkets10min_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenmarkets10min_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenmarkets10min_12.addFeatures(features_Greenmarkets10min_12);
var lyr_Greenmarkets10min_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenmarkets10min_12, 
                style: style_Greenmarkets10min_12,
                popuplayertitle: 'Green markets- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Greenmarkets10min_12.png" /> Green markets- 10 min'
            });
var format_Greenmarkets15min_13 = new ol.format.GeoJSON();
var features_Greenmarkets15min_13 = format_Greenmarkets15min_13.readFeatures(json_Greenmarkets15min_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenmarkets15min_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenmarkets15min_13.addFeatures(features_Greenmarkets15min_13);
var lyr_Greenmarkets15min_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenmarkets15min_13, 
                style: style_Greenmarkets15min_13,
                popuplayertitle: 'Green markets- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Greenmarkets15min_13.png" /> Green markets- 15 min'
            });
var format_Greenmarkets_14 = new ol.format.GeoJSON();
var features_Greenmarkets_14 = format_Greenmarkets_14.readFeatures(json_Greenmarkets_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenmarkets_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenmarkets_14.addFeatures(features_Greenmarkets_14);
var lyr_Greenmarkets_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenmarkets_14, 
                style: style_Greenmarkets_14,
                popuplayertitle: 'Green markets',
                interactive: true,
                title: '<img src="styles/legend/Greenmarkets_14.png" /> Green markets'
            });
var format_Highschools5min_15 = new ol.format.GeoJSON();
var features_Highschools5min_15 = format_Highschools5min_15.readFeatures(json_Highschools5min_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highschools5min_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highschools5min_15.addFeatures(features_Highschools5min_15);
var lyr_Highschools5min_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highschools5min_15, 
                style: style_Highschools5min_15,
                popuplayertitle: 'High schools- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Highschools5min_15.png" /> High schools- 5 min'
            });
var format_Highschools10min_16 = new ol.format.GeoJSON();
var features_Highschools10min_16 = format_Highschools10min_16.readFeatures(json_Highschools10min_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highschools10min_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highschools10min_16.addFeatures(features_Highschools10min_16);
var lyr_Highschools10min_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highschools10min_16, 
                style: style_Highschools10min_16,
                popuplayertitle: 'High schools- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Highschools10min_16.png" /> High schools- 10 min'
            });
var format_Highschools15min_17 = new ol.format.GeoJSON();
var features_Highschools15min_17 = format_Highschools15min_17.readFeatures(json_Highschools15min_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highschools15min_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highschools15min_17.addFeatures(features_Highschools15min_17);
var lyr_Highschools15min_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highschools15min_17, 
                style: style_Highschools15min_17,
                popuplayertitle: 'High schools- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Highschools15min_17.png" /> High schools- 15 min'
            });
var format_Highschools_18 = new ol.format.GeoJSON();
var features_Highschools_18 = format_Highschools_18.readFeatures(json_Highschools_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highschools_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highschools_18.addFeatures(features_Highschools_18);
var lyr_Highschools_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highschools_18, 
                style: style_Highschools_18,
                popuplayertitle: 'High schools',
                interactive: true,
                title: '<img src="styles/legend/Highschools_18.png" /> High schools'
            });
var format_Libraries5min_19 = new ol.format.GeoJSON();
var features_Libraries5min_19 = format_Libraries5min_19.readFeatures(json_Libraries5min_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries5min_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries5min_19.addFeatures(features_Libraries5min_19);
var lyr_Libraries5min_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libraries5min_19, 
                style: style_Libraries5min_19,
                popuplayertitle: 'Libraries- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Libraries5min_19.png" /> Libraries- 5 min'
            });
var format_Libraries10min_20 = new ol.format.GeoJSON();
var features_Libraries10min_20 = format_Libraries10min_20.readFeatures(json_Libraries10min_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries10min_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries10min_20.addFeatures(features_Libraries10min_20);
var lyr_Libraries10min_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libraries10min_20, 
                style: style_Libraries10min_20,
                popuplayertitle: 'Libraries- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Libraries10min_20.png" /> Libraries- 10 min'
            });
var format_Libraries15min_21 = new ol.format.GeoJSON();
var features_Libraries15min_21 = format_Libraries15min_21.readFeatures(json_Libraries15min_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries15min_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries15min_21.addFeatures(features_Libraries15min_21);
var lyr_Libraries15min_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libraries15min_21, 
                style: style_Libraries15min_21,
                popuplayertitle: 'Libraries- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Libraries15min_21.png" /> Libraries- 15 min'
            });
var format_Libraries_22 = new ol.format.GeoJSON();
var features_Libraries_22 = format_Libraries_22.readFeatures(json_Libraries_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries_22.addFeatures(features_Libraries_22);
var lyr_Libraries_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libraries_22, 
                style: style_Libraries_22,
                popuplayertitle: 'Libraries',
                interactive: true,
                title: '<img src="styles/legend/Libraries_22.png" /> Libraries'
            });
var format_Pharmacy5min_23 = new ol.format.GeoJSON();
var features_Pharmacy5min_23 = format_Pharmacy5min_23.readFeatures(json_Pharmacy5min_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy5min_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy5min_23.addFeatures(features_Pharmacy5min_23);
var lyr_Pharmacy5min_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy5min_23, 
                style: style_Pharmacy5min_23,
                popuplayertitle: 'Pharmacy- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Pharmacy5min_23.png" /> Pharmacy- 5 min'
            });
var format_Pharmacy10min_24 = new ol.format.GeoJSON();
var features_Pharmacy10min_24 = format_Pharmacy10min_24.readFeatures(json_Pharmacy10min_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy10min_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy10min_24.addFeatures(features_Pharmacy10min_24);
var lyr_Pharmacy10min_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy10min_24, 
                style: style_Pharmacy10min_24,
                popuplayertitle: 'Pharmacy- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Pharmacy10min_24.png" /> Pharmacy- 10 min'
            });
var format_Pharmacy15min_25 = new ol.format.GeoJSON();
var features_Pharmacy15min_25 = format_Pharmacy15min_25.readFeatures(json_Pharmacy15min_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy15min_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy15min_25.addFeatures(features_Pharmacy15min_25);
var lyr_Pharmacy15min_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy15min_25, 
                style: style_Pharmacy15min_25,
                popuplayertitle: 'Pharmacy- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Pharmacy15min_25.png" /> Pharmacy- 15 min'
            });
var format_Pharmacies_26 = new ol.format.GeoJSON();
var features_Pharmacies_26 = format_Pharmacies_26.readFeatures(json_Pharmacies_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacies_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacies_26.addFeatures(features_Pharmacies_26);
var lyr_Pharmacies_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacies_26, 
                style: style_Pharmacies_26,
                popuplayertitle: 'Pharmacies',
                interactive: true,
                title: '<img src="styles/legend/Pharmacies_26.png" /> Pharmacies'
            });
var format_Primaryhealtcarefacility5min_27 = new ol.format.GeoJSON();
var features_Primaryhealtcarefacility5min_27 = format_Primaryhealtcarefacility5min_27.readFeatures(json_Primaryhealtcarefacility5min_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primaryhealtcarefacility5min_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryhealtcarefacility5min_27.addFeatures(features_Primaryhealtcarefacility5min_27);
var lyr_Primaryhealtcarefacility5min_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryhealtcarefacility5min_27, 
                style: style_Primaryhealtcarefacility5min_27,
                popuplayertitle: 'Primary healtcare facility- 5 min',
                interactive: false,
                title: '<img src="styles/legend/Primaryhealtcarefacility5min_27.png" /> Primary healtcare facility- 5 min'
            });
var format_Primaryhealtcarefacility10min_28 = new ol.format.GeoJSON();
var features_Primaryhealtcarefacility10min_28 = format_Primaryhealtcarefacility10min_28.readFeatures(json_Primaryhealtcarefacility10min_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primaryhealtcarefacility10min_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryhealtcarefacility10min_28.addFeatures(features_Primaryhealtcarefacility10min_28);
var lyr_Primaryhealtcarefacility10min_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryhealtcarefacility10min_28, 
                style: style_Primaryhealtcarefacility10min_28,
                popuplayertitle: 'Primary healtcare facility- 10 min',
                interactive: false,
                title: '<img src="styles/legend/Primaryhealtcarefacility10min_28.png" /> Primary healtcare facility- 10 min'
            });
var format_Primaryhealtcarefacility15min_29 = new ol.format.GeoJSON();
var features_Primaryhealtcarefacility15min_29 = format_Primaryhealtcarefacility15min_29.readFeatures(json_Primaryhealtcarefacility15min_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primaryhealtcarefacility15min_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryhealtcarefacility15min_29.addFeatures(features_Primaryhealtcarefacility15min_29);
var lyr_Primaryhealtcarefacility15min_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryhealtcarefacility15min_29, 
                style: style_Primaryhealtcarefacility15min_29,
                popuplayertitle: 'Primary healtcare facility- 15 min',
                interactive: false,
                title: '<img src="styles/legend/Primaryhealtcarefacility15min_29.png" /> Primary healtcare facility- 15 min'
            });
var format_Primaryhealtcarefacility_30 = new ol.format.GeoJSON();
var features_Primaryhealtcarefacility_30 = format_Primaryhealtcarefacility_30.readFeatures(json_Primaryhealtcarefacility_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primaryhealtcarefacility_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryhealtcarefacility_30.addFeatures(features_Primaryhealtcarefacility_30);
var lyr_Primaryhealtcarefacility_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryhealtcarefacility_30, 
                style: style_Primaryhealtcarefacility_30,
                popuplayertitle: 'Primary healtcare facility',
                interactive: true,
                title: '<img src="styles/legend/Primaryhealtcarefacility_30.png" /> Primary healtcare facility'
            });
var format_Analysisarea_31 = new ol.format.GeoJSON();
var features_Analysisarea_31 = format_Analysisarea_31.readFeatures(json_Analysisarea_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analysisarea_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analysisarea_31.addFeatures(features_Analysisarea_31);
var lyr_Analysisarea_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Analysisarea_31, 
                style: style_Analysisarea_31,
                popuplayertitle: 'Analysis area',
                interactive: true,
                title: '<img src="styles/legend/Analysisarea_31.png" /> Analysis area'
            });
var group_Spatialaccessibilityareas = new ol.layer.Group({
                                layers: [lyr_Elementaryschools5min_7,lyr_Elementaryschools10min_8,lyr_Elementaryschools15min_9,lyr_Elementaryschools_10,lyr_Greenmarkets5min_11,lyr_Greenmarkets10min_12,lyr_Greenmarkets15min_13,lyr_Greenmarkets_14,lyr_Highschools5min_15,lyr_Highschools10min_16,lyr_Highschools15min_17,lyr_Highschools_18,lyr_Libraries5min_19,lyr_Libraries10min_20,lyr_Libraries15min_21,lyr_Libraries_22,lyr_Pharmacy5min_23,lyr_Pharmacy10min_24,lyr_Pharmacy15min_25,lyr_Pharmacies_26,lyr_Primaryhealtcarefacility5min_27,lyr_Primaryhealtcarefacility10min_28,lyr_Primaryhealtcarefacility15min_29,lyr_Primaryhealtcarefacility_30,],
                                fold: "open",
                                title: 'Spatial accessibility areas'});
var group_Noserviceareas = new ol.layer.Group({
                                layers: [lyr_Noserviceareastoallfacilities_3,lyr_Noserviceareastohighschoolsandlibraries_4,lyr_Noserviceareastopharmaciesandgreenmarkets_5,lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6,],
                                fold: "open",
                                title: 'No service areas'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Masklayer_1,],
                                fold: "open",
                                title: 'Basemap'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Masklayer_1.setVisible(true);lyr_GHSLpopulationdistribution_2.setVisible(true);lyr_Noserviceareastoallfacilities_3.setVisible(true);lyr_Noserviceareastohighschoolsandlibraries_4.setVisible(true);lyr_Noserviceareastopharmaciesandgreenmarkets_5.setVisible(true);lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.setVisible(true);lyr_Elementaryschools5min_7.setVisible(true);lyr_Elementaryschools10min_8.setVisible(true);lyr_Elementaryschools15min_9.setVisible(true);lyr_Elementaryschools_10.setVisible(true);lyr_Greenmarkets5min_11.setVisible(true);lyr_Greenmarkets10min_12.setVisible(true);lyr_Greenmarkets15min_13.setVisible(true);lyr_Greenmarkets_14.setVisible(true);lyr_Highschools5min_15.setVisible(true);lyr_Highschools10min_16.setVisible(true);lyr_Highschools15min_17.setVisible(true);lyr_Highschools_18.setVisible(true);lyr_Libraries5min_19.setVisible(true);lyr_Libraries10min_20.setVisible(true);lyr_Libraries15min_21.setVisible(true);lyr_Libraries_22.setVisible(true);lyr_Pharmacy5min_23.setVisible(true);lyr_Pharmacy10min_24.setVisible(true);lyr_Pharmacy15min_25.setVisible(true);lyr_Pharmacies_26.setVisible(true);lyr_Primaryhealtcarefacility5min_27.setVisible(true);lyr_Primaryhealtcarefacility10min_28.setVisible(true);lyr_Primaryhealtcarefacility15min_29.setVisible(true);lyr_Primaryhealtcarefacility_30.setVisible(true);lyr_Analysisarea_31.setVisible(true);
var layersList = [group_Basemap,lyr_GHSLpopulationdistribution_2,group_Noserviceareas,group_Spatialaccessibilityareas,lyr_Analysisarea_31];
lyr_Masklayer_1.set('fieldAliases', {'id': 'id', });
lyr_Noserviceareastoallfacilities_3.set('fieldAliases', {'Cadaster m': 'Cadaster m', 'Municipali': 'Municipali', });
lyr_Noserviceareastohighschoolsandlibraries_4.set('fieldAliases', {'Cadaster m': 'Cadaster m', 'Municipali': 'Municipali', });
lyr_Noserviceareastopharmaciesandgreenmarkets_5.set('fieldAliases', {'Cadaster m': 'Cadaster m', 'Municipali': 'Municipali', });
lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.set('fieldAliases', {'Cadaster m': 'Cadaster m', 'Municipali': 'Municipali', });
lyr_Elementaryschools5min_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', 'fid_6': 'fid_6', 'ID_6': 'ID_6', 'CENTER_L_9': 'CENTER_L_9', 'CENTER_L10': 'CENTER_L10', 'AA_MINS_6': 'AA_MINS_6', 'AA_MODE_6': 'AA_MODE_6', 'TOTAL_PO_4': 'TOTAL_PO_4', 'fid_7': 'fid_7', 'ID_7': 'ID_7', 'CENTER_L11': 'CENTER_L11', 'CENTER_L12': 'CENTER_L12', 'AA_MINS_7': 'AA_MINS_7', 'AA_MODE_7': 'AA_MODE_7', 'TOTAL_PO_5': 'TOTAL_PO_5', 'fid_8': 'fid_8', 'ID_8': 'ID_8', 'CENTER_L13': 'CENTER_L13', 'CENTER_L14': 'CENTER_L14', 'AA_MINS_8': 'AA_MINS_8', 'AA_MODE_8': 'AA_MODE_8', 'TOTAL_PO_6': 'TOTAL_PO_6', 'fid_9': 'fid_9', 'ID_9': 'ID_9', 'CENTER_L15': 'CENTER_L15', 'CENTER_L16': 'CENTER_L16', 'AA_MINS_9': 'AA_MINS_9', 'AA_MODE_9': 'AA_MODE_9', 'TOTAL_PO_7': 'TOTAL_PO_7', });
lyr_Elementaryschools10min_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', 'fid_6': 'fid_6', 'ID_6': 'ID_6', 'CENTER_L_9': 'CENTER_L_9', 'CENTER_L10': 'CENTER_L10', 'AA_MINS_6': 'AA_MINS_6', 'AA_MODE_6': 'AA_MODE_6', 'TOTAL_PO_4': 'TOTAL_PO_4', 'fid_7': 'fid_7', 'ID_7': 'ID_7', 'CENTER_L11': 'CENTER_L11', 'CENTER_L12': 'CENTER_L12', 'AA_MINS_7': 'AA_MINS_7', 'AA_MODE_7': 'AA_MODE_7', 'TOTAL_PO_5': 'TOTAL_PO_5', 'fid_8': 'fid_8', 'ID_8': 'ID_8', 'CENTER_L13': 'CENTER_L13', 'CENTER_L14': 'CENTER_L14', 'AA_MINS_8': 'AA_MINS_8', 'AA_MODE_8': 'AA_MODE_8', 'TOTAL_PO_6': 'TOTAL_PO_6', 'fid_9': 'fid_9', 'ID_9': 'ID_9', 'CENTER_L15': 'CENTER_L15', 'CENTER_L16': 'CENTER_L16', 'AA_MINS_9': 'AA_MINS_9', 'AA_MODE_9': 'AA_MODE_9', 'TOTAL_PO_7': 'TOTAL_PO_7', });
lyr_Elementaryschools15min_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', 'fid_6': 'fid_6', 'ID_6': 'ID_6', 'CENTER_L_9': 'CENTER_L_9', 'CENTER_L10': 'CENTER_L10', 'AA_MINS_6': 'AA_MINS_6', 'AA_MODE_6': 'AA_MODE_6', 'TOTAL_PO_4': 'TOTAL_PO_4', 'fid_7': 'fid_7', 'ID_7': 'ID_7', 'CENTER_L11': 'CENTER_L11', 'CENTER_L12': 'CENTER_L12', 'AA_MINS_7': 'AA_MINS_7', 'AA_MODE_7': 'AA_MODE_7', 'TOTAL_PO_5': 'TOTAL_PO_5', 'fid_8': 'fid_8', 'ID_8': 'ID_8', 'CENTER_L13': 'CENTER_L13', 'CENTER_L14': 'CENTER_L14', 'AA_MINS_8': 'AA_MINS_8', 'AA_MODE_8': 'AA_MODE_8', 'TOTAL_PO_6': 'TOTAL_PO_6', 'fid_9': 'fid_9', 'ID_9': 'ID_9', 'CENTER_L15': 'CENTER_L15', 'CENTER_L16': 'CENTER_L16', 'AA_MINS_9': 'AA_MINS_9', 'AA_MODE_9': 'AA_MODE_9', 'TOTAL_PO_7': 'TOTAL_PO_7', });
lyr_Elementaryschools_10.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Greenmarkets5min_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', });
lyr_Greenmarkets10min_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', });
lyr_Greenmarkets15min_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', });
lyr_Greenmarkets_14.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Highschools5min_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Highschools10min_16.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Highschools15min_17.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Highschools_18.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Libraries5min_19.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', });
lyr_Libraries10min_20.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', });
lyr_Libraries15min_21.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', });
lyr_Libraries_22.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Pharmacy5min_23.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Pharmacy10min_24.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Pharmacy15min_25.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Pharmacies_26.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Primaryhealtcarefacility5min_27.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Primaryhealtcarefacility10min_28.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Primaryhealtcarefacility15min_29.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'ID_2': 'ID_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', 'fid_3': 'fid_3', 'ID_3': 'ID_3', 'CENTER_L_3': 'CENTER_L_3', 'CENTER_L_4': 'CENTER_L_4', 'AA_MINS_3': 'AA_MINS_3', 'AA_MODE_3': 'AA_MODE_3', 'TOTAL_PO_1': 'TOTAL_PO_1', 'fid_4': 'fid_4', 'ID_4': 'ID_4', 'CENTER_L_5': 'CENTER_L_5', 'CENTER_L_6': 'CENTER_L_6', 'AA_MINS_4': 'AA_MINS_4', 'AA_MODE_4': 'AA_MODE_4', 'TOTAL_PO_2': 'TOTAL_PO_2', 'fid_5': 'fid_5', 'ID_5': 'ID_5', 'CENTER_L_7': 'CENTER_L_7', 'CENTER_L_8': 'CENTER_L_8', 'AA_MINS_5': 'AA_MINS_5', 'AA_MODE_5': 'AA_MODE_5', 'TOTAL_PO_3': 'TOTAL_PO_3', });
lyr_Primaryhealtcarefacility_30.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Analysisarea_31.set('fieldAliases', {'Cadaster m': 'Cadaster m', 'Municipali': 'Municipali', 'Area': 'Area', 'ID': 'ID', 'Score': 'Score', });
lyr_Masklayer_1.set('fieldImages', {'id': '', });
lyr_Noserviceareastoallfacilities_3.set('fieldImages', {'Cadaster m': '', 'Municipali': '', });
lyr_Noserviceareastohighschoolsandlibraries_4.set('fieldImages', {'Cadaster m': '', 'Municipali': '', });
lyr_Noserviceareastopharmaciesandgreenmarkets_5.set('fieldImages', {'Cadaster m': '', 'Municipali': '', });
lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.set('fieldImages', {'Cadaster m': '', 'Municipali': '', });
lyr_Elementaryschools5min_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', 'fid_6': '', 'ID_6': '', 'CENTER_L_9': '', 'CENTER_L10': '', 'AA_MINS_6': '', 'AA_MODE_6': '', 'TOTAL_PO_4': '', 'fid_7': '', 'ID_7': '', 'CENTER_L11': '', 'CENTER_L12': '', 'AA_MINS_7': '', 'AA_MODE_7': '', 'TOTAL_PO_5': '', 'fid_8': '', 'ID_8': '', 'CENTER_L13': '', 'CENTER_L14': '', 'AA_MINS_8': '', 'AA_MODE_8': '', 'TOTAL_PO_6': '', 'fid_9': '', 'ID_9': '', 'CENTER_L15': '', 'CENTER_L16': '', 'AA_MINS_9': '', 'AA_MODE_9': '', 'TOTAL_PO_7': '', });
lyr_Elementaryschools10min_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', 'fid_6': '', 'ID_6': '', 'CENTER_L_9': '', 'CENTER_L10': '', 'AA_MINS_6': '', 'AA_MODE_6': '', 'TOTAL_PO_4': '', 'fid_7': '', 'ID_7': '', 'CENTER_L11': '', 'CENTER_L12': '', 'AA_MINS_7': '', 'AA_MODE_7': '', 'TOTAL_PO_5': '', 'fid_8': '', 'ID_8': '', 'CENTER_L13': '', 'CENTER_L14': '', 'AA_MINS_8': '', 'AA_MODE_8': '', 'TOTAL_PO_6': '', 'fid_9': '', 'ID_9': '', 'CENTER_L15': '', 'CENTER_L16': '', 'AA_MINS_9': '', 'AA_MODE_9': '', 'TOTAL_PO_7': '', });
lyr_Elementaryschools15min_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', 'fid_6': '', 'ID_6': '', 'CENTER_L_9': '', 'CENTER_L10': '', 'AA_MINS_6': '', 'AA_MODE_6': '', 'TOTAL_PO_4': '', 'fid_7': '', 'ID_7': '', 'CENTER_L11': '', 'CENTER_L12': '', 'AA_MINS_7': '', 'AA_MODE_7': '', 'TOTAL_PO_5': '', 'fid_8': '', 'ID_8': '', 'CENTER_L13': '', 'CENTER_L14': '', 'AA_MINS_8': '', 'AA_MODE_8': '', 'TOTAL_PO_6': '', 'fid_9': '', 'ID_9': '', 'CENTER_L15': '', 'CENTER_L16': '', 'AA_MINS_9': '', 'AA_MODE_9': '', 'TOTAL_PO_7': '', });
lyr_Elementaryschools_10.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Greenmarkets5min_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', });
lyr_Greenmarkets10min_12.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', });
lyr_Greenmarkets15min_13.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', });
lyr_Greenmarkets_14.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Highschools5min_15.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Highschools10min_16.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Highschools15min_17.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Highschools_18.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Libraries5min_19.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', });
lyr_Libraries10min_20.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', });
lyr_Libraries15min_21.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', });
lyr_Libraries_22.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Pharmacy5min_23.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Pharmacy10min_24.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Pharmacy15min_25.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Pharmacies_26.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Primaryhealtcarefacility5min_27.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Primaryhealtcarefacility10min_28.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Primaryhealtcarefacility15min_29.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'ID_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', 'fid_3': 'TextEdit', 'ID_3': 'TextEdit', 'CENTER_L_3': 'TextEdit', 'CENTER_L_4': 'TextEdit', 'AA_MINS_3': 'TextEdit', 'AA_MODE_3': 'TextEdit', 'TOTAL_PO_1': 'TextEdit', 'fid_4': 'TextEdit', 'ID_4': 'TextEdit', 'CENTER_L_5': 'TextEdit', 'CENTER_L_6': 'TextEdit', 'AA_MINS_4': 'TextEdit', 'AA_MODE_4': 'TextEdit', 'TOTAL_PO_2': 'TextEdit', 'fid_5': 'TextEdit', 'ID_5': 'TextEdit', 'CENTER_L_7': 'TextEdit', 'CENTER_L_8': 'TextEdit', 'AA_MINS_5': 'TextEdit', 'AA_MODE_5': 'TextEdit', 'TOTAL_PO_3': 'TextEdit', });
lyr_Primaryhealtcarefacility_30.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Analysisarea_31.set('fieldImages', {'Cadaster m': 'TextEdit', 'Municipali': 'TextEdit', 'Area': 'TextEdit', 'ID': 'Range', 'Score': 'TextEdit', });
lyr_Masklayer_1.set('fieldLabels', {'id': 'no label', });
lyr_Noserviceareastoallfacilities_3.set('fieldLabels', {'Cadaster m': 'no label', 'Municipali': 'no label', });
lyr_Noserviceareastohighschoolsandlibraries_4.set('fieldLabels', {'Cadaster m': 'no label', 'Municipali': 'no label', });
lyr_Noserviceareastopharmaciesandgreenmarkets_5.set('fieldLabels', {'Cadaster m': 'no label', 'Municipali': 'no label', });
lyr_Noserviceareastoprimaryhealtcarefacilitiesandelementaryschools_6.set('fieldLabels', {'Cadaster m': 'no label', 'Municipali': 'no label', });
lyr_Elementaryschools5min_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', 'fid_6': 'no label', 'ID_6': 'no label', 'CENTER_L_9': 'no label', 'CENTER_L10': 'no label', 'AA_MINS_6': 'no label', 'AA_MODE_6': 'no label', 'TOTAL_PO_4': 'no label', 'fid_7': 'no label', 'ID_7': 'no label', 'CENTER_L11': 'no label', 'CENTER_L12': 'no label', 'AA_MINS_7': 'no label', 'AA_MODE_7': 'no label', 'TOTAL_PO_5': 'no label', 'fid_8': 'no label', 'ID_8': 'no label', 'CENTER_L13': 'no label', 'CENTER_L14': 'no label', 'AA_MINS_8': 'no label', 'AA_MODE_8': 'no label', 'TOTAL_PO_6': 'no label', 'fid_9': 'no label', 'ID_9': 'no label', 'CENTER_L15': 'no label', 'CENTER_L16': 'no label', 'AA_MINS_9': 'no label', 'AA_MODE_9': 'no label', 'TOTAL_PO_7': 'no label', });
lyr_Elementaryschools10min_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', 'fid_6': 'no label', 'ID_6': 'no label', 'CENTER_L_9': 'no label', 'CENTER_L10': 'no label', 'AA_MINS_6': 'no label', 'AA_MODE_6': 'no label', 'TOTAL_PO_4': 'no label', 'fid_7': 'no label', 'ID_7': 'no label', 'CENTER_L11': 'no label', 'CENTER_L12': 'no label', 'AA_MINS_7': 'no label', 'AA_MODE_7': 'no label', 'TOTAL_PO_5': 'no label', 'fid_8': 'no label', 'ID_8': 'no label', 'CENTER_L13': 'no label', 'CENTER_L14': 'no label', 'AA_MINS_8': 'no label', 'AA_MODE_8': 'no label', 'TOTAL_PO_6': 'no label', 'fid_9': 'no label', 'ID_9': 'no label', 'CENTER_L15': 'no label', 'CENTER_L16': 'no label', 'AA_MINS_9': 'no label', 'AA_MODE_9': 'no label', 'TOTAL_PO_7': 'no label', });
lyr_Elementaryschools15min_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', 'fid_6': 'no label', 'ID_6': 'no label', 'CENTER_L_9': 'no label', 'CENTER_L10': 'no label', 'AA_MINS_6': 'no label', 'AA_MODE_6': 'no label', 'TOTAL_PO_4': 'no label', 'fid_7': 'no label', 'ID_7': 'no label', 'CENTER_L11': 'no label', 'CENTER_L12': 'no label', 'AA_MINS_7': 'no label', 'AA_MODE_7': 'no label', 'TOTAL_PO_5': 'no label', 'fid_8': 'no label', 'ID_8': 'no label', 'CENTER_L13': 'no label', 'CENTER_L14': 'no label', 'AA_MINS_8': 'no label', 'AA_MODE_8': 'no label', 'TOTAL_PO_6': 'no label', 'fid_9': 'no label', 'ID_9': 'no label', 'CENTER_L15': 'no label', 'CENTER_L16': 'no label', 'AA_MINS_9': 'no label', 'AA_MODE_9': 'no label', 'TOTAL_PO_7': 'no label', });
lyr_Elementaryschools_10.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Greenmarkets5min_11.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', });
lyr_Greenmarkets10min_12.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', });
lyr_Greenmarkets15min_13.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', });
lyr_Greenmarkets_14.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Highschools5min_15.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Highschools10min_16.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Highschools15min_17.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Highschools_18.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Libraries5min_19.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', });
lyr_Libraries10min_20.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', });
lyr_Libraries15min_21.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', });
lyr_Libraries_22.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Pharmacy5min_23.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Pharmacy10min_24.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Pharmacy15min_25.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Pharmacies_26.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Primaryhealtcarefacility5min_27.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Primaryhealtcarefacility10min_28.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Primaryhealtcarefacility15min_29.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'ID_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', 'fid_3': 'no label', 'ID_3': 'no label', 'CENTER_L_3': 'no label', 'CENTER_L_4': 'no label', 'AA_MINS_3': 'no label', 'AA_MODE_3': 'no label', 'TOTAL_PO_1': 'no label', 'fid_4': 'no label', 'ID_4': 'no label', 'CENTER_L_5': 'no label', 'CENTER_L_6': 'no label', 'AA_MINS_4': 'no label', 'AA_MODE_4': 'no label', 'TOTAL_PO_2': 'no label', 'fid_5': 'no label', 'ID_5': 'no label', 'CENTER_L_7': 'no label', 'CENTER_L_8': 'no label', 'AA_MINS_5': 'no label', 'AA_MODE_5': 'no label', 'TOTAL_PO_3': 'no label', });
lyr_Primaryhealtcarefacility_30.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Analysisarea_31.set('fieldLabels', {'Cadaster m': 'inline label - always visible', 'Municipali': 'inline label - always visible', 'Area': 'inline label - always visible', 'ID': 'inline label - always visible', 'Score': 'inline label - always visible', });
lyr_Analysisarea_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});