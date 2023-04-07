// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//Function to grab sites from external js file https://stackoverflow.com/a/10864797
function getScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    document.getElementsByTagName('head')[0].appendChild(script);
}

//grab the full URLs of all the sites in the ring from the index list
var localSites = [

];
getScript('https://garfring.neocities.org/onionring-variables.js', function () {
    for (var i = 0; i < sites.length; i++) {
        localSites.push(sites[i]);
    };
});
/*
Backup list in case things break

var sites = [
    'https://halls.neocities.org/',
    'https://joxi.neocities.org/',
    'https://r-temisia.neocities.org/',
    'https://liassica.neocities.org/',
    'https://anti-kythera.neocities.org/',
    'https://alephs.neocities.org/',
    'https://geckro.github.io/',
    'https://garfs.neocities.org/'
    ];
*/

//the name of the ring
var ringName = 'Garfield Ring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'GarfRing';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://garfring.neocities.org/';

//should the widget include a random button?
var useRandom = true;