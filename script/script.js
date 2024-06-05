
function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

function calculateSeconds() {
 
    let minutes = document.getElementById("mins").value;


    let seconds = convertMinutesToSeconds(minutes);


    document.getElementById("result").innerHTML = "Seconds: " + seconds + "s";
}


document.getElementById("calculate_button").addEventListener("click", calculateSeconds);
