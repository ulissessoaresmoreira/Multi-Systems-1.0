const iconDraggs = document.querySelectorAll("[draggable=true]")
const garbageBasket = document.querySelector("trash")


iconDraggs.forEach((iconDragg) => {
    iconDragg.addEventListener("dragstart", startLug)
})

function startLug () {
    console.log('Ok')

    this.classListAdd("moving")
}


garbageBasket.addEventListener("dragover", dropped)


function dropped (){
    this.classListAdd("hover")

    const luggedIcon = document.querySelector('moving')

    this.appendChild(luggedIcon)
}