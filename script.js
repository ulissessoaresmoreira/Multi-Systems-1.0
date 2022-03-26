const iconDraggs = document.querySelectorAll("[draggable=true]")
const garbageBasket = document.querySelector('.receive')


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


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }



  window.onload = function () {
    Dragable(document.getElementById("foo"));
    Dragable(document.getElementById("baz"));
    Dragable(document.getElementById("bar"));
};

//Adiciona eventos pra navegadores modernos e antigos
function addEvent(el, type, callback)
{
    if (el.addEventListener) {
       el.addEventListener(type, callback);
    } else if (el.attachEvent) {
       el.attachEvent("on" + type, callback);
    }
}













////////// 


function dragstart_handler(ev) {
    console.log("dragStart");
    // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
    ev.dataTransfer.setData("text/plain", ev.target.id);
   }