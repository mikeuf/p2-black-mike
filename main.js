

window.addEventListener('load', (event) => {

headerTag = document.getElementsByTagName('header');
headerTag[0].innerHTML = '<a class="logo" href="index.html"> <i class="fal fa-landmark"></i> <h1>Debary Public <br />Library Association</h1> </a> <nav> <ul> <li><a href="about.html"><i class="fal fa-book-user"></i><p>About</p></a></li><li><a href="contact.html"><i class="fal fa-phone-rotary"></i><p>Contact</p></a></li></ul> </nav>';

footerTag = document.getElementsByTagName('footer');
footerTag[0].innerHTML = '<p> &copy; 2019 Debary Public Library Association, Inc. All rights reserved. </p>';


if (tabButtonAddress = document.getElementById('tab-button-weather')) {
tabButtonAddress.addEventListener('click', getWeather);
}

function getWeather() {

    // clear any previous weather information to avoid duplication
    if (listWeather = document.getElementById('list-weather')) {
        listWeather.parentNode.removeChild(listWeather);
    }



const COORDINATES = '28.899260,-81.306357';
const AUTH_KEY = '3cf8a2ee703494aed518da56dcaab94a/';
const DARK_SKY_URL = 'https://api.darksky.net/forecast/';
const PROXY_URL ='https://cors-anywhere.herokuapp.com/';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        listWeather = document.createElement('ul');   
        listWeather.setAttribute('id','list-weather');     

        itemTemperature = document.createElement('li');
        itemTemperature.appendChild(document.createTextNode('Temperature: ' + apiResult.currently.temperature.toPrecision(2) + '\u2109'));

        itemHumidity = document.createElement('li');
        itemHumidity.appendChild(document.createTextNode('Humidity ' + apiResult.currently.humidity * 100 + '%'));

        itemWind = document.createElement('li');
        itemWind.appendChild(document.createTextNode('Wind Speed: ' + apiResult.currently.windSpeed.toPrecision(2) + ' mph'));

        itemSummary = document.createElement('li');
        itemSummary.appendChild(document.createTextNode('Conditions: ' + apiResult.currently.summary));

        fragment = document.createDocumentFragment();

        fragment.appendChild(listWeather);
        listWeather.appendChild(itemTemperature);
        listWeather.appendChild(itemHumidity);
        listWeather.appendChild(itemWind);
        listWeather.appendChild(itemSummary);

        let loadingMessage = document.querySelector('#tab-weather h3');
        loadingMessage.classList.add('hidden');

        document.querySelector('#tab-weather').appendChild(fragment);

    }
};
xmlhttp.open('GET', PROXY_URL + DARK_SKY_URL + AUTH_KEY + COORDINATES, true);
xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xmlhttp.send();

}








let tabButton = document.querySelectorAll('.tab-button');

console.log(tabButton);
for (var i = 0, len = tabButton.length; i < len; ++i) {
    
    console.log(tabButton[i]);
    tabButton[i].addEventListener('click', {
        handleEvent: function (event) {
            console.log('yo');
            console.log(event.target);
           // console.log(document.getElementsByClassName('active').item(0));
            let activeSection = document.getElementsByClassName('active').item(0);
            if (activeSection) {
                console.log(activeSection);
                activeSection.classList.toggle('active');
            }
            console.log(event.target.id);

            switch (event.target.id) {
                
                case 'tab-button-address':
                    document.getElementById('tab-address').classList.toggle('active');

                    break;
                case 'tab-button-hours':
                    
                    document.getElementById('tab-hours').classList.toggle('active');
                    break;
                    case 'tab-button-map':
                     
                        document.getElementById('tab-map').classList.toggle('active');
                        break;
                        case 'tab-button-weather':
                     
                            document.getElementById('tab-weather').classList.toggle('active');
                            break;
                  default:
                    alert('Unable to determine the intended tab. Please refresh your browser and try again.');
            }
            }
           

    });

   
}

});




    /*
    addEventListener('click', (event) => {
        console.log(document.getElementsByClassName('.active'));
        document.querySelector('.active').classList.toggle('active');
        console.log(this);
        this.classList.toggle('active');
    })
    */




/*

var accordionHeaders = document.querySelectorAll('#accordion .accordion-header');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

function expandAccordionDescription() {


  // I commented this out so I could each panel could open and close individually

  /
  for (var i = 0, len = accordionHeaders.length; i < len; ++i) {
    // close any open panels
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptions[i].classList.remove('accordion-open');
  }
  /


  // if the current panel was open, and was clicked again, just let it close without opening anything else
  if (!this.nextElementSibling.classList.contains('accordion-open')) {

  // if the current panel is closed, open it and set a '-'
  this.nextElementSibling.classList.add('accordion-open');
  this.childNodes[3].innerHTML = '-';
  } else {
  this.nextElementSibling.classList.remove('accordion-open');
  this.childNodes[3].innerHTML = '+';
  }
}

// apply the event listener to all of the headers
for (var i = 0, len = accordionHeaders.length; i < len; ++i) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
*/
