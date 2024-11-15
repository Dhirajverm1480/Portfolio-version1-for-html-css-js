let Hambugger = document.querySelector(".hambugger")
let SideBar = document.querySelector(".sideBar")
let Close = document.querySelector(".close")
let Nav = document.querySelector(".nav")

let ListContainer = document.querySelector(".list-container")

console.log(Hambugger, SideBar, ListContainer, Nav);

Hambugger.addEventListener('click', () => {
    console.log("ok")

    ListContainer.style.display = 'block'
    Nav.style.display = 'none'
})

Close.addEventListener('click', () =>{
    ListContainer.style.display = 'none'
    Nav.style.display = 'block'
})
