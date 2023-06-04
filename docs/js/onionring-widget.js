// This file is licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = "https://liassica.neocities.org/"; //Spoof the URL
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSite() {
  otherSites = sites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

//find the 'next' and 'previous' sites in the ring. this code looks complex
previousIndex = (thisIndex - 1 < 0) ? sites.length - 1 : thisIndex - 1;
nextIndex = (thisIndex + 1 >= sites.length) ? 0 : thisIndex + 1;

indexText = ""
//if you've chosen to include an index, this builds the link to that
if (useIndex) {
  indexText = `<a href='${indexPage}'>index</a>`;
}

randomText = ""
//if you've chosen to include a random button, this builds the link that does that
if (useRandom) {
  randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a>`;
}

//this is the code that displays the widget - EDIT THIS if you want to change the structure
tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td class='webring-prev'>
      <a href='${sites[previousIndex]}'>&lt;--</a>
    </td>
    <td class='webring-info'>This site is part of the ${ringName}
      <br />
      <span class='webring-links'>
        ${randomText}
        ${indexText}
      </span>
    </td>
    <td class='webring-next'>
      <a href='${sites[nextIndex]}'>--&gt;</a>
    </td>
  </tr>
</table>
`);
