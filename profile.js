document.getElementById('color')
document.getElementById('place')
document.getElementById('ritual')

function color(event){
    event.preventDefault()

    alert('Red')
}

function place(event){
    event.preventDefault()
    
    alert('Anywhere in the [Utah] mountains')
}

function ritual(event){
    event.preventDefault()

    alert('Locking my car door 100 times, just to be sure')
}

document.getElementById('color').addEventListener('click', color)
document.getElementById('place').addEventListener('click', place)
document.getElementById('ritual').addEventListener('click', ritual)