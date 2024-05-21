const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // alert("HIIII!!!!")
        window.location.href = "https://github.com/anugrahn1" //redirects to this link when a button is pressed
    })
})