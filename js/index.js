import {getAllCategories} from './main.js'
import {navbar} from '../components/navbar.js'

const initSite=()=>{
    sectionRenderer();
    navbar;
}



// Renders section to landing page
 async function sectionRenderer()  {

    let catList = await getAllCategories()
    let divCon = document.getElementById('container')
    let footer = document.getElementById('lastFooter')
    console.log(catList)

    catList.forEach(element => {
        console.log(element, " element")
        console.log(element.ID, " element")
        let sectSnap = document.createElement('section')
        sectSnap.classList.add("snapper")

        let imgCon = document.createElement('div')
        imgCon.classList.add("imageContainer")

        let imgSnap = document.createElement('img')
        imgSnap.classList.add("imgSnap")

        let categoryText = document.createElement('h1')
        categoryText.innerText = `Checkout our shoes by ${element.CategoryName}`

        //append 
        divCon.append(sectSnap)
        sectSnap.append(categoryText,imgCon)
        imgCon.append(imgSnap)
        categoryText.addEventListener("click",function(){
            window.location.href = `./product.html?category=${element.ID}`
        })
    });
    catList.map((data, i) => {
        document.getElementsByClassName('imgSnap')[i].setAttribute('src',`/ASSETS/Backgrounds/${data.CategoryBackGround}`) 
    })
    let incest = document.createElement('footer')
    incest.append(footer)
    divCon.append(incest)
 }
   


window.addEventListener("load", initSite);