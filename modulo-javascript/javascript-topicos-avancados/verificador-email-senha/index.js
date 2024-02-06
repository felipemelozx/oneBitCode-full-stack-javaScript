document.querySelector('#sing-up').addEventListener('click', (event)=>{
    
    event.preventDefault()
    const email = document.querySelector('#email')
    const fullname = document.querySelector('#fullname')
    const password = document.querySelector('#password')
try{
    verificarEmail(email)
    verificarPassword(password)
    clearInputs(email,fullname,password)
    alert(`Usuario cadastrado com sucesso`)
console.log(user)
}catch{
    alert('email ou seha invalido. tente novamente')
}
})
const user = []

function verificarPassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if(passwordRegex.test(password.value)){
        const newUser = {email:email.value,  password: password.value}
        user.push(newUser)
    }else{
        throw new Error('Sua senha não coresponde ao requesitos minimos.')
    }
}


function verificarEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.test(email.value)){
        return 
    }else{
        throw new Error('Sua senha não coresponde ao requesitos minimos.')
    }
}

function clearInputs(email, fullname, password){
    email.value = ''
    fullname.value = ''
    password.value = ''
}