function submit() {
    const name = document.getElementById("name").value
    const fruit = document.getElementById("fruit").value
    
    const message = document.getElementById("message")
    message.innerHTML = `Hello ${name}, you like ${fruit}`
}

function showPrize() {
    window.location.href = "https://www.youtube.com/watch?v=7q0m9zZoMgA"
}