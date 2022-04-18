const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('#ison');




const updateUi = (data) => {
    // const cityData = data.city_data; 
    // const whether = data.weather_data; 

    // Destructuring of property
    const { city_data, weather_data } = data
    details.innerHTML = `
    <h5 class="my-3">${city_data.EnglishName}</h5>
    <div class="my-3">${weather_data.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather_data.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;

    /////////////////////////////////////
    // Setting Image
    let timesrc = null;
    if (weather_data.IsDayTime) {
        timesrc = 'img/day.svg';
    }
    else {
        timesrc = 'img/night.svg';
    }
    time.setAttribute('src', timesrc);
    ////////////////////////////////////////
   

    ////////////////////////////////////
    // Adding Icon to UI
    const iconsrc = `img/icons/${weather_data. WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);




    ///////////////////////////////////



    // Removing the d-none of the bootstrap css style 
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};



const updateCity = async (city) => {
    const cityData = await getCity(city);
    const whether = await getWhether(cityData.Key);
    return {
        city_data: cityData,
        weather_data: whether
    }

}




cityForm.addEventListener('submit', e => {
    const citty = cityForm.city.value.trim();

    updateCity(citty)
        .then(data => {
            console.log(data);
            updateUi(data);

        }).catch(error => {
            console.log(error);
        });

    cityForm.reset();


    e.preventDefault();
})