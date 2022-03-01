import  {getAllCategories} from './main.js'
import {navbar} from '../components/navbar.js'


const initSite=()=>{
    sectionRenderer();
    navbar;
}



// Renders section to landing page
const  sectionRenderer = async ()=>  {

    const catList = await getAllCategories(),
    divCon = document.getElementById('container'),
    footer = document.getElementById('lastFooter')
    



    for (let i = 0; i < catList.length ; i++){
        
            const sectSnap = document.createElement('section')
                divCon.appendChild(sectSnap)
                sectSnap.setAttribute('class','snapper')
                sectSnap.appendChild(document.createElement('div')).setAttribute('class','imgSnap')
                sectSnap.appendChild(document.createElement('h1')).innerText = `Checkout our shoes by ${catList[i].CategoryName}`    

            //    fetching catID and giving href to brands
                document.getElementsByTagName('h1')[catList[i].ID].addEventListener("click",function(){
                            window.location.href = `./product.html?category=${catList[i].ID}`
                            })
    }

        
        // array to attach attributes to newly created image tags
        
        catList.map((data, i) => {
            document.getElementsByClassName('imgSnap')[i].style.backgroundImage = `url('/ASSETS/Backgrounds/${data.CategoryName}`+ `.jpg')` 
        })
        
        // divCon.appendChild(footer)
        const incest = document.createElement('footer')
        incest.appendChild(footer)
        divCon.appendChild(incest)



async function addCategoryLinks() {
    const categoryList = await getAllCategories();

    categoryList.forEach(data => {
        document.getElementsByTagName('h1')[data.ID].addEventListener("click",function(){
            window.location.href = `./product.html?category=${data.ID}`
    })
})


}
}


window.addEventListener("load", initSite);