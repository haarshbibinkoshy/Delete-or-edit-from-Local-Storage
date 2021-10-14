

let form = document.querySelector(`#my-form`)
let users = document.querySelector(`#users`)
form.addEventListener(`submit`, addToStorage)

function addToStorage() {
    
    let name = document.querySelector(`#name`).value
    let email = document.querySelector(`#email`).value
    let obj1 = {
        name: name,
        email: email
    }
    let jsonFile = JSON.stringify(obj1)
    localStorage.setItem(`${email}`, jsonFile)
    addToList(obj1)
}

Object.keys(localStorage).forEach((key) => {
    let userDetailsString = localStorage.getItem(key)
    let userObj = JSON.parse(userDetailsString)
    addToList(userObj)
})

function addToList(userObj) {
    
        let li = document.createElement('li')
        li.id=userObj.email
        console.log(li);
        li.className=userObj.email
        let text = document.createTextNode(`${userObj.name}:${userObj.email}`)
        li.appendChild(text)
        let editBtn=document.createElement('input')
        editBtn.type="button"
        editBtn.value="edit"
        
        editBtn.addEventListener(`click`,()=>{
            document.querySelector(`#name`).value=userObj.name
            document.querySelector(`#email`).value=userObj.email
            li.remove()
        })
        let deleteBtn=document.createElement(`input`)
        deleteBtn.type=`button`
        deleteBtn.value=`delete`
        
        deleteBtn.addEventListener(`click`,()=>{
            localStorage.removeItem(userObj.email)
            li.remove()
        })
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        users.appendChild(li)
    

   
}


