const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_Name = document.getElementById('city_Name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.data_hide');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === '') {
        city_Name.innerText = `Please write the name before you Search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f8f14d9833d1d35901df0b2bdd3f24a5`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp_real_val.innerText = arrData[0].main.temp;
            city_Name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood === 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
            } else if (tempMood === 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
            } else if (tempMood === 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_Name.innerText = `Please enter the City name properly`;
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);