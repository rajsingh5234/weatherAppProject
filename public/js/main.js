const sumbitBtn = document.getElementById('sumbitBtn');
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = 'Plz enter city name before searching';
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=66f9bf68309321c4c38f6e19a6f017d3`;
            const response = await fetch(url);
            const data = await response.json();

            city_name.innerText = `${data.name}, ${data.sys.country}`;
            temp_real_val.innerText = data.main.temp;

            const tempMood =  data.weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Plz enter the city name properly';
            datahide.classList.add('data_hide');
        }

    }

}

sumbitBtn.addEventListener('click', getInfo);