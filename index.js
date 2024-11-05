const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "0nF4we/w4WcftBaYizshxA==KxBsaVzUMxSd0Uvj";

const options = {
    method : "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke(){

    try {
        jokeEl.classList.add("loading"); // Animasyonu başlat
        jokeEl.innerText = "Updating....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        jokeEl.classList.remove("loading"); // Animasyonu durdur
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE ";
    
       jokeEl.innerText = data[0].joke;
        
        
    } catch (error) {
        
        jokeEl.classList.remove("loading"); // Animasyonu durdur
        jokeEl.innerText = "An error happened, try again later ";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE ";
        console.log(error);
        
        
    }

}


btnEl.addEventListener("click",getJoke);