// login elementos


    const login = document.querySelector(".login")
    const loginForm = login.querySelector(".login__form")
    const loginInput = login.querySelector(".login__input")


    // chat elementos

document.addEventListener("DOMContentLoaded", () => {
    const chat = document.querySelector(".chat")
    const chatForm = chat.querySelector(".chat__form")
    const chatInput = chat.querySelector(".chat__input")

    const colors =[
        "CadetBlue",
        "Chocolate",
        "CornflowerBlue",
        "DarkBlue",
        "DarkCyan",
        "DarkGreen",
        "DarkMagenta",
        "DarkOrange",    
    ]
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }
    
    
    const user = {id: "", name: "", color: "" }

    const handleSubmit = (event) => {
        event.preventDefault()
        user.id = crypto.randomUUID()
        user.name = loginInput.value
        user.color = getRandomColor()
        
        
        login.style.display = "none"
        chat.style.display = "flex"
        
        
        console.log(user)
    }

    loginForm.addEventListener("submit", handleSubmit) 
})
