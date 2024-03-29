

window.addEventListener('load', (event) => {

    // Dynamically add header to each page to avoid duplicate code
    headerTag = document.getElementsByTagName('header');
    headerTag[0].innerHTML = '<a class="logo" href="index.html"> <i class="fal fa-landmark"></i> <h1>Debary Public <br />Library Association</h1> </a> <div class="hamburger-menu"><i class="fal fa-bars"></i></div> <nav> <ul> <li><a href="about.html"><i class="fal fa-book-user"></i><p>About</p></a></li><li><a href="contact.html"><i class="fal fa-phone-rotary"></i><p>Contact</p></a></li></ul> </nav>';

    footerTag = document.getElementsByTagName('footer');
    footerTag[0].innerHTML = '<p> &copy; 2019 Debary Public Library Association, Inc. All rights reserved. </p>';


    // Get weather from Dark Sky API
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
        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var apiResult = JSON.parse(this.responseText);



                listWeather = document.createElement('ul');
                listWeather.setAttribute('id', 'list-weather');

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


    // event listener for Contact menu buttons and tab view
    let tabButton = document.querySelectorAll('.tab-button');

    for (var i = 0, len = tabButton.length; i < len; ++i) {
        tabButton[i].addEventListener('click', {
            handleEvent: function (event) {

                let activeSection = document.getElementsByClassName('active').item(0);
                if (activeSection) {
                    activeSection.classList.toggle('active');
                }

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



    // event listener for accordion menu in About page

    let buttonsAccordion = document.querySelectorAll('.accordion-header');
    //let articlesAccordion = document.querySelectorAll('#accordion-about article');



    // apply the event listener to all of the headers
    for (var i = 0, len = buttonsAccordion.length; i < len; ++i) {

        buttonsAccordion[i].addEventListener('click', expandAccordion);
    }

    function expandAccordion() {



        if (!this.nextElementSibling.classList.contains('expanded')) {

            this.nextElementSibling.classList.add('expanded');
        } else {
            this.nextElementSibling.classList.remove('expanded');
        }
    }


    // Toggle mobile menu
    function showMobileMenu() {

        let menuMobile = document.querySelector('header nav');
        menuMobile.classList.toggle('visible-mobile');

    }

    // apply the event listener to all of the headers
    for (var i = 0, len = buttonsAccordion.length; i < len; ++i) {

        buttonsAccordion[i].addEventListener('click', expandAccordion);
    }

    let hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', showMobileMenu);



});

