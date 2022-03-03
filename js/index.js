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
        
            const sectSnap = document.createElement('section'),
                imgCon = document.createElement('div'),
                imgSnap = document.createElement('img')
                divCon.appendChild(sectSnap)
                sectSnap.appendChild(imgCon)
                imgCon.appendChild(imgSnap)
                sectSnap.setAttribute('class','snapper')
                imgCon.setAttribute('class','imageContainer')
                imgSnap.setAttribute('class','imgSnap')
                // sectSnap.appendChild(document.createElement('div')).setAttribute('class','imgSnap')
                sectSnap.appendChild(document.createElement('h1')).innerText = `Checkout our shoes by ${catList[i].CategoryName}`    
               
            //    fetching catID and giving href to brands
                document.getElementsByTagName('h1')[catList[i].ID].addEventListener("click",function(){
                            window.location.href = `./product.html?category=${catList[i].Id}`
                            })
    }

        
        // array to attach attributes to newly created image tags
        
        catList.map((data, i) => {
            document.getElementsByClassName('imgSnap')[i].setAttribute('src',`/ASSETS/Backgrounds/${data.CategoryName}`+ `.jpg`) 
        })
        
        // divCon.appendChild(footer)
        const incest = document.createElement('footer')
        incest.appendChild(footer)
        divCon.appendChild(incest)
 
  
}


window.addEventListener("load", initSite);