
<!-- Styles -->
<style>
#chartdiv {
  width: 100%;
  height: 100%;
//  height: 500px;

}
</style>

<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/maps.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/worldHigh.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

<!-- Chart code -->
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function() {
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);

// Center on the groups by default
chart.homeZoomLevel = 3.5;
chart.homeGeoPoint = { longitude: 10, latitude: 52 };
//longitude перемещение по горизонтали, latitude перемещение по вертикали 

var groupData = [
  {
    "name": "Ukraine",
    "color": chart.colors.getIndex(20),
    "data": [
       {
        "title": "Ukraine",
        "id": "UA",
//        "customData": "1993-2019",
      }
    ]
  },
  {
    "name": "Visited",
    "color": chart.colors.getIndex(15),
    "data": [
      {
        "title": "Austria",
        "id": "AT", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
        "customData": "visited in 2013"
      }, {
        "title": "Belgium",
        "id": "BE",
        "customData": "visited in 2019"
      }, {
        "title": "Cyprus",
        "id": "CY",
        "customData": "visited in 2022"
      }, {
        "title": "Czech Republic",
        "id": "CZ",
        "customData": "visited in 2013, 2020"
//        "color": chart.colors.getIndex(1),
//        "groupId": "2004"
      }, {
        "title": "Denmark",
        "id": "DK",
        "customData": "visited in 2025"
      }, {
        "title": "Germany",
        "id": "DE",
        "customData": "visited in 2013"
      }, {
        "title": "España",
        "id": "ES",
        "customData": "visited in 2026"
      }, {
        "title": "Hungary",
        "id": "HU",
        "customData": "visited in 2013"
//        "color": chart.colors.getIndex(1),
//        "groupId": "2004"
      }, {
        "title": "Iceland",
        "id": "IS",
        "customData": "visited in 2022"
      }, {
        "title": "Poland",
        "id": "PL",        
        "customData": "visited in 2013, 2016, 2019"
//        "color": chart.colors.getIndex(1),
//        "groupId": "2004"
      }, {
        "title": "Portugal",
        "id": "PT",
        "customData": "visited in 2026"
      },  {
        "title": "Kyrgyzstan  \r\n ",
        "id": "KG",
        "customData": "visited in 2003"
//        "color": chart.colors.getIndex(1),
      }, {
        "title": "Romania",
        "id": "RO",
        "customData": "visited in Jan 2023"
      }, {
        "title": "Хуйня из под коня",
        "id": "RU",
        "customData": "visited many times"
//        "color": chart.colors.getIndex(1),
      }, {
        "title": "Slovakia",
        "id": "SK",
        "customData": "visited in 2020"
      }
    ]
  },
  {
    "name": "Plan to visit nearest time",
    "color": chart.colors.getIndex(1),
    "data": [   
      {
        "title": "Albania",
        "id": "AL",
        "customData": "want to visit first"
      }, {
        "title": "Bosnia & Herzegovina",
        "id": "BA",
        "customData": "want to visit first"
      }, {
        "title": "Croatia",
        "id": "HR",
        "customData": "want to visit first"
      }, {
        "title": "Estonia",
        "id": "EE",
        "customData": "want to visit first"
      }, {
        "title": "Kosovo",
        "id": "XK",
        "customData": "want to visit first"
      }, {
        "title": "Latvia",
        "id": "LV",
        "customData": "want to visit first"
      }, {  
        "title": "Lithuania",
        "id": "LT",
        "customData": "want to visit first"
      }, {
        "title": "Macedonia",
        "id": "MK",
        "customData": "want to visit first"
      }, {
        "title": "Montenegro",
        "id": "ME",
        "customData": "want to visit first"
      }, {
        "title": "Serbia",
        "id": "RS",
        "customData": "want to visit first"
      }, {
        "title": "Slovenia",
        "id": "SI",
        "customData": "want to visit first"
      }
    ]
  }, {
    "name": "List to visit",
    "color": chart.colors.getIndex(70),
    "data": [
         {
        "title": "Andorra",
        "id": "AD"
      }, {
        "title": "Belarus",
        "id": "BY"
      }, {
        "title": "Bulgaria",
        "id": "BG"
      }, {
        "title": "Faroe Islands",
        "id": "FO"
      }, {
        "title": "Finland",
        "id": "FI",
        "customData": "planned to be visited in summer"
      }, {
        "title": "France",
        "id": "FR"
      }, {
        "title": "Georgia",
        "id": "GE"
      }, {
        "title": "Great Britain",
        "id": "GB"
      }, {
        "title": "Greece",
        "id": "GR",
        "customData": "planned to be visited in winter"
      }, {
        "title": "Ireland",
        "id": "IE",
        "customData": "planned to be visited in summer"
      }, {
        "title": "Israel",
        "id": "IL"
      }, {
        "title": "Italy",
        "id": "IT",
        "customData": "planned to be visited in winter"
      }, {
        "title": "Kazakhstan",
        "id": "KZ"
      }, {
        "title": "Liechtenstein",
        "id": "LI"
      }, {
        "title": "Luxembourg",
        "id": "LU"
      }, {
        "title": "Malta",
        "id": "MT"
      }, {
        "title": "Moldova",
        "id": "MD"
      }, {
        "title": "Monaco",
        "id": "MC"
      }, {
        "title": "Netherlands",
        "id": "NL",
     //   "customData": "will be visited in 2023"
      }, {
        "title": "Norway",
        "id": "NO",
        "customData": "planned to be visited in summer"
      },{
        "title": "Сан-Марино",
        "id": "SM"
      }, {
        "title": "Sweden",
        "id": "SE",
        "customData": "planned to be visited in summer"
      }, {
        "title": "Switzerland",
        "id": "CH"
      }, {
        "title": "Turkey",
        "id": "TR",
//        "customData": "will be visited in 2020"
      }, {
        "title": "Vatican",
        "id": "VA"
      }
 ]
},  {
    "name": "Other",
//   "color": am4core.color("#dcdcdc"), 
   "color": am4core.color("#B4B4B7"), 
    "data": [
       {
        "title": "Algeria",
        "id": "DZ"
       },{
        "title": "Afghanistan",
        "id": "AF"
       },{
        "title": "Angola",
        "id": "AO"
       },{
        "title": "Argentina",
        "id": "AR"
       },{
        "title": "Armenia",
        "id": "AM"
       }, {
        "title": "Australia",
        "id": "AU"
       }, {
        "title": "Azerbaijan",
        "id": "AZ"
       }, {
        "title": "Bahrain",
        "id": "BH"
       }, {
        "title": "Bangladesh",
        "id": "BD"
       }, {
        "title": "Belize",
        "id": "BZ"
       }, {
        "title": "Benin",
        "id": "BJ"
       }, {
        "title": "Bhutan",
        "id": "BT"
       }, {
        "title": "Bolivia",
        "id": "BO"
       }, {
        "title": "Botswana",
        "id": "BW"
       }, {
        "title": "Brasil",
        "id": "BR"
       }, {
        "title": "Burkina Faso",
        "id": "BF"
       }, {
        "title": "Burundi",
        "id": "BI"
       }, {
        "title": "Cambodia",
        "id": "KH"
       }, {
        "title": "Cameroon",
        "id": "CM"
       }, {
        "title": "Central African Republic",
        "id": "CF"
       }, {
        "title": "Canada",
        "id": "CA"
       }, {
        "title": "Chad",
        "id": "TD"
       }, {
        "title": "Chile",
        "id": "CL"
       }, {
        "title": "China",
        "id": "CN"
       }, {
        "title": "Colombia",
        "id": "CO"
       }, {
        "title": "Congo",
        "id": "CG"
       }, {
        "title": "DR Congo",
        "id": "CD"
       }, {
        "title": "Costa Rica",
        "id": "CR"
       }, {
        "title": "Cuba",
        "id": "CU"
       }, {
        "title": "Côte d'Ivoire",
        "id": "CI"
       }, {
        "title": "Djibouti",
        "id": "DJ"
       }, {
        "title": "Dominican Republic",
        "id": "DO"
       }, {
        "title": "Ecuador",
        "id": "EC"
       }, {
        "title": "Egypt",
        "id": "EG"
       }, {
        "title": "Equatorial Guinea",
        "id": "GQ"
       }, {
        "title": "Eritrea",
        "id": "ER"
       }, {
        "title": "Eswatini",
        "id": "SZ"
       }, {
        "title": "Ethiopia",
        "id": "ET"
       }, {
        "title": "Falkland Islands",
        "id": "FK"
       }, {
        "title": "French Guiana",
        "id": "GF"
       }, {
        "title": "Gabon",
        "id": "GA"
      }, {
        "title": "Gambia",
        "id": "GM"
      }, {
        "title": "Ghana",
        "id": "GH"
      }, {
        "title": "Guinea",
        "id": "GN"
      }, {
        "title": "Guinea-Bissau",
        "id": "GW"
      }, {
        "title": "Greenland",
        "id": "GL"
      },  {
        "title": "Guatemala",
        "id": "GT"
       }, {
        "title": "Guyana",
        "id": "GY"
       }, {
        "title": "Haiti",
        "id": "HT"
       }, {
        "title": "Honduras",
        "id": "HN"
       }, {
        "title": "India",
        "id": "IN"
       }, {
        "title": "Indonesia",
        "id": "ID"
       }, {
        "title": "Iran",
        "id": "IR"
       }, {
        "title": "Iraq",
        "id": "IQ"
       }, {
        "title": "Jamaica",
        "id": "JM"
       }, {
        "title": "Japan",
        "id": "JP"
       }, {
        "title": "Jordan",
        "id": "JO"
       }, {
        "title": "Kenya",
        "id": "KE"
       }, {
        "title": "North Korea",
        "id": "KP"
       }, {
        "title": "South Korea",
        "id": "KR"
       }, {
        "title": "Kuwait",
        "id": "KW"
       }, {
        "title": "Lao People's Democratic Republic",
        "id": "LA"
       }, {
        "title": "Lebanon",
        "id": "LB"
       }, {
        "title": "Lesotho",
        "id": "LS"
       }, {
        "title": "Liberia",
        "id": "LR"
       }, {
        "title": "Libya",
        "id": "LY"
       }, {
        "title": "New Zealand",
        "id": "NZ"
       }, {
        "title": "Madagascar",
        "id": "MG"
       }, {
        "title": "Malawi",
        "id": "MW"
       }, {
        "title": "Malaysia",
        "id": "MY"
       }, {
        "title": "Mali",
        "id": "ML"
       }, {
        "title": "Mauritania",
        "id": "MR"
       }, {
        "title": "Mexico",
        "id": "MX"
       }, {
        "title": "Mongolia",
        "id": "MN"
       }, {
        "title": "Morocco",
        "id": "MA"
       }, {
        "title": "Mozambique",
        "id": "MZ"
       }, {
        "title": "Myanmar",
        "id": "MM"
       }, {
        "title": "Namibia",
        "id": "NA"
       }, {
        "title": "Nepal",
        "id": "NP"
       }, {
        "title": "Nicaragua",
        "id": "NI"
       }, {
        "title": "Niger",
        "id": "NE"
       },  {
        "title": "Nigeria",
        "id": "NG"
       }, {
        "title": "Oman",
        "id": "OM"
       }, {
        "title": "Pakistan",
        "id": "PK"
       }, {
        "title": "Palestinian Territories",
        "id": "PS"
       }, {
        "title": "Panama",
        "id": "PA"
       }, {
        "title": "Papua New Guinea",
        "id": "PG"
       }, {
        "title": "Paraguay",
        "id": "PY"
       }, {
        "title": "Peru",
        "id": "PE"
       }, {
        "title": "Philippines",
        "id": "PH"
       }, {
        "title": "Puerto Rico",
        "id": "PR"
       }, {
        "title": "Qatar",
        "id": "QA"
       }, {
        "title": "Rwanda",
        "id": "RW"
       }, {
        "title": "El Salvador",
        "id": "SV"
       }, {
        "title": "Saudi Arabia",
        "id": "SA"
       }, {
        "title": "Senegal",
        "id": "SN"
       }, {
        "title": "Sierra Leone",
        "id": "SL"
       }, {
        "title": "Singapore",
        "id": "SG"
       }, {
        "title": "Somalia",
        "id": "SO"
       }, {
        "title": "South Africa",
        "id": "ZA"
       }, {
        "title": "Sri Lanka",
        "id": "LK"
       }, {
        "title": "Suriname",
        "id": "SR"
       }, {
        "title": "Sudan",
        "id": "SD"
       }, {
        "title": "South Sudan",
        "id": "SS"
       }, {
        "title": "Syria",
        "id": "SY"
       }, {
        "title": "Taiwan",
        "id": "TW"
       }, {
        "title": "Tajikistan",
        "id": "TJ"
       }, {
        "title": "Tanzania ",
        "id": "TZ"
       }, {
        "title": "Thailand",
        "id": "TH"
       }, {
        "title": "Togo",
        "id": "TG"
       }, {
        "title": "Tunisia",
        "id": "TN"
       }, {
        "title": "Turkmenistan",
        "id": "TM"
       }, {
        "title": "Uganda",
        "id": "UG"
       }, {
        "title": "United Arab Emirates",
        "id": "AE"
       }, {
        "title": "Uruguay",
        "id": "UY"
       }, {
        "title": "USA",
        "id": "US"
       }, {
        "title": "Uzbekistan",
        "id": "UZ"
       }, {
        "title": "Venezuela",
        "id": "VE"
       }, {
        "title": "Vietnam",
        "id": "VN"
       }, {
        "title": "Western Sahara",
        "id": "EH"
       }, {
        "title": "Yemen",
        "id": "YE"
       }, {
        "title": "Zambia",
        "id": "ZM"
       }, {
        "title": "Zimbabwe",
        "id": "ZW"
       }
    ]
  }


];

groupData[1].name = "Visited - " + groupData[1].data.length;
groupData[2].name = "Plan to visit nearest time - " + groupData[2].data.length;
groupData[3].name = "List to visit - " + groupData[3].data.length;

// This array will be populated with country IDs to exclude from the world series
var excludedCountries = ["AQ"];

// Create a series for each group, and populate the above array
groupData.forEach(function(group) {
  var series = chart.series.push(new am4maps.MapPolygonSeries());
  series.name = group.name;
  series.useGeodata = true;
  var includedCountries = [];
  group.data.forEach(function(country) {
    includedCountries.push(country.id);
    excludedCountries.push(country.id);
  });
  series.include = includedCountries;

  series.fill = am4core.color(group.color);

  // By creating a hover state and setting setStateOnChildren to true, when we
  // hover over the series itself, it will trigger the hover SpriteState of all
  // its countries (provided those countries have a hover SpriteState, too!).
  series.setStateOnChildren = true;
  series.calculateVisualCenter = true;

  // Country shape properties & behaviors
  var mapPolygonTemplate = series.mapPolygons.template;
  // Instead of our custom title, we could also use {name} which comes from geodata  
  mapPolygonTemplate.fill = am4core.color(group.color);
  mapPolygonTemplate.fillOpacity = 0.8;
  mapPolygonTemplate.nonScalingStroke = true;
  mapPolygonTemplate.tooltipPosition = "fixed"

  mapPolygonTemplate.events.on("over", function(event) {
    series.mapPolygons.each(function(mapPolygon) {
     // mapPolygon.isHover = true; 
     //закомментированным подсвечивает только выбранную страну, видимым - всю группу
    })
    event.target.isHover = false;
    event.target.isHover = true;
  })

  mapPolygonTemplate.events.on("out", function(event) {
    series.mapPolygons.each(function(mapPolygon) {
      mapPolygon.isHover = false;
    })
  })

  // States  
  var hoverState = mapPolygonTemplate.states.create("hover");
  hoverState.properties.fill = am4core.color("#CC0000");

  // Tooltip
     mapPolygonTemplate.tooltipText = "{title} \r\n {customData}"; // enables tooltip
  // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
  // series.tooltip.background.fill = am4core.color(group.color);

  // MapPolygonSeries will mutate the data assigned to it, 
  // we make and provide a copy of the original data array to leave it untouched.
  // (This method of copying works only for simple objects, e.g. it will not work
  //  as predictably for deep copying custom Classes.)
  series.data = JSON.parse(JSON.stringify(group.data));
});

// The rest of the world.
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
var worldSeriesName = "world";
worldSeries.name = worldSeriesName;
worldSeries.useGeodata = true;
worldSeries.exclude = excludedCountries;
worldSeries.fillOpacity = 0.8;
worldSeries.hiddenInLegend = true;
worldSeries.mapPolygons.template.nonScalingStroke = true;

// This auto-generates a legend according to each series' name and fill
chart.legend = new am4maps.Legend();

// Legend styles
chart.legend.paddingLeft = 27;
chart.legend.paddingRight = 27;
chart.legend.marginBottom = 15;
chart.legend.width = am4core.percent(90);
chart.legend.valign = "bottom";
chart.legend.contentAlign = "left";

// Legend items
chart.legend.itemContainers.template.interactionsEnabled = false;

}); // end am4core.ready()
</script>

<!-- HTML -->
<div id="chartdiv"></div>
