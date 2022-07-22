function getData(){

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    if(!name){
        return alert('You must fill all the documents!!!')
    } else if(!email){
        return alert('You must fill all the documents!!!')
    } else if(!phone){
        return alert('You must fill all the documents!!!')
    } else if(!subject){
        return alert('You must fill all the documents!!!')
    } else if(!message){
        return alert('You must fill all the documents!!!')
    } 

    let mail = 'robtopgames@gmail.com'

    let a = document.createElement('a')

    a.href = `mailto:${mail}?subject=${subject}&body=Halo my name is ${name}, ${message}, this is my phone number ${phone}.`
    a.click()

}