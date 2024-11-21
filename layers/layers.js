var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1 = new ol.format.GeoJSON();
var features_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1 = format_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.readFeatures(json_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.addFeatures(features_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1);
var lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1, 
                style: style_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1,
                popuplayertitle: "Median_Income%2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts",
                interactive: true,
    title: 'Median_Income%2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts<br />\
    <img src="styles/legend/Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1_0.png" /> 0 - 57534<br />\
    <img src="styles/legend/Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1_1.png" /> 57534 - 78858<br />\
    <img src="styles/legend/Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1_2.png" /> 78858 - 100279<br />\
    <img src="styles/legend/Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1_3.png" /> 100279 - 130584<br />\
    <img src="styles/legend/Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1_4.png" /> 130584 - 250000<br />'
        });
var format_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.format.GeoJSON();
var features_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = format_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.readFeatures(json_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.addFeatures(features_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2);
var lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2, 
                style: style_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2,
                popuplayertitle: "School_Point_Locations_of_NJ_7426162841564329730 (1) — School_Point_Locations_of_NJ__Public__Private_and_Charter_",
                interactive: true,
                title: '<img src="styles/legend/School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.png" /> School_Point_Locations_of_NJ_7426162841564329730 (1) — School_Point_Locations_of_NJ__Public__Private_and_Charter_'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.setVisible(true);lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1,lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2];
lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOID20': 'GEOID20', 'Tract_Name': 'Tract_Name', 'County': 'County', 'Municipali': 'Municipali', 'MedianHH_I': 'MedianHH_I', 'Median_Hom': 'Median_Hom', 'Median_RE_': 'Median_RE_', 'Data_Vinta': 'Data_Vinta', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCH_GUID': 'SCH_GUID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTY': 'COUNTY', 'DIST_CODE': 'DIST_CODE', 'DIST_NAME': 'DIST_NAME', 'SCHOOLCODE': 'SCHOOLCODE', 'SCHOOLTYPE': 'SCHOOLTYPE', 'SCHOOL': 'SCHOOL', 'SCHOOLNAME': 'SCHOOLNAME', 'ADDRESS1': 'ADDRESS1', 'ADDRESS2': 'ADDRESS2', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'PHONE': 'PHONE', 'X': 'X', 'Y': 'Y', 'SOURCE': 'SOURCE', 'ZIP_TRUNC': 'ZIP_TRUNC', 'PREF_ID_NUM': 'PREF_ID_NUM', 'GNIS_ID': 'GNIS_ID', 'LOC_QUAL': 'LOC_QUAL', 'OGIS_ID': 'OGIS_ID', 'CATEGORY': 'CATEGORY', 'LAST_UPDATE': 'LAST_UPDATE', });
lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.set('fieldImages', {'OBJECTID': 'Range', 'GEOID20': 'TextEdit', 'Tract_Name': 'TextEdit', 'County': 'TextEdit', 'Municipali': 'TextEdit', 'MedianHH_I': 'Range', 'Median_Hom': 'Range', 'Median_RE_': 'Range', 'Data_Vinta': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SCH_GUID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTY': 'TextEdit', 'DIST_CODE': 'TextEdit', 'DIST_NAME': 'TextEdit', 'SCHOOLCODE': 'TextEdit', 'SCHOOLTYPE': 'TextEdit', 'SCHOOL': 'TextEdit', 'SCHOOLNAME': 'TextEdit', 'ADDRESS1': 'TextEdit', 'ADDRESS2': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'PHONE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'SOURCE': 'TextEdit', 'ZIP_TRUNC': 'TextEdit', 'PREF_ID_NUM': 'TextEdit', 'GNIS_ID': 'TextEdit', 'LOC_QUAL': 'TextEdit', 'OGIS_ID': 'TextEdit', 'CATEGORY': 'Range', 'LAST_UPDATE': 'DateTime', });
lyr_Median_Income2C_Home_Value_and_Residential_Property_Taxes_in_NJ_Census_Tracts_1.set('fieldLabels', {'OBJECTID': 'no label', 'GEOID20': 'no label', 'Tract_Name': 'no label', 'County': 'no label', 'Municipali': 'no label', 'MedianHH_I': 'no label', 'Median_Hom': 'no label', 'Median_RE_': 'no label', 'Data_Vinta': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldLabels', {'OBJECTID': 'no label', 'SCH_GUID': 'no label', 'COUNTYCODE': 'no label', 'COUNTY': 'no label', 'DIST_CODE': 'no label', 'DIST_NAME': 'no label', 'SCHOOLCODE': 'no label', 'SCHOOLTYPE': 'no label', 'SCHOOL': 'no label', 'SCHOOLNAME': 'no label', 'ADDRESS1': 'no label', 'ADDRESS2': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'PHONE': 'no label', 'X': 'no label', 'Y': 'no label', 'SOURCE': 'no label', 'ZIP_TRUNC': 'no label', 'PREF_ID_NUM': 'no label', 'GNIS_ID': 'no label', 'LOC_QUAL': 'no label', 'OGIS_ID': 'no label', 'CATEGORY': 'no label', 'LAST_UPDATE': 'no label', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});