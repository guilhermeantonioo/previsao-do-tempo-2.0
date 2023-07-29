const key = 'bf6532c519f065e103704c5a91ddf161';
const btn = document.querySelector('#btn').addEventListener('click', clickOnButton());

const token = "e5b07b138c5057";

async function getLocation (){ 
    const name = await fetch(`https://ipinfo.io/json?token=e5b07b138c5057`)
    .then((Response) => Response.json())
    .catch((error) => console.log("Erro ao obter a localização:", error));
    console.log(name.city);
    searchCity(name.city)
    
}

getLocation();



function clickOnButton(){
    const city = document.querySelector('#input').value;
    console.log(city)
    searchCity(city)
}
async function searchCity(city){
    
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${key}&lang=pt_br&units=metric`).then((Response) => Response.json());
    console.log(data)
    showData(data);
}

function showData(data){
    document.querySelector('#name-city').innerHTML = ` A temperatura em ${data.name} é de ${Math.floor(data.main.temp)} °C `;
    document.querySelector('#descricao').innerHTML = data.weather[0].description;
    document.querySelector('#umidade').innerHTML = "Umidade: " + data.main.humidity + '%'
    document.querySelector('#img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

addEventListener('keyup' , (e) => {
    if(e.key === "Enter"){
        clickOnButton()
    }
})