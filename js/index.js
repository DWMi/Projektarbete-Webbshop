import  {getAllCategories} from './main.js'
import {navbar} from '../components/navbar.js'


function initSite(){

    sectionRenderer();
    navbar;
}








// Renders section to landing page

async function sectionRenderer() {
    //Hard coded classes, text links
    const snapper = ["snapper1", "snapper2", "snapper3", "snapper4", "snapper5"],
        snapIMG = ["imgSnap1", "imgSnap2", "imgSnap3", "imgSnap4", "imgSnap5"],
        divContainer = document.getElementById("container"),
        sectionTagName = document.getElementsByTagName("section"),
        textLinksList = [
            "Check out our shoes by adidas",
            "Check out our shoes by Converse",
            "Check out our shoes by New Balance",
            "Check out our shoes by Nike",
            "Check out our shoes by Saucony"
        ]

        

        // Loops to create elements
        
    for (let i = 0; i < snapper.length; i++) {
        divContainer.appendChild(document.createElement("section")).setAttribute("class", snapper[i])
        sectionTagName[i].appendChild(document.createElement("img")).setAttribute("class", snapIMG[i])
        sectionTagName[i].appendChild(document.createElement("h1")).innerText = `${textLinksList[i]}`
    }
        
        
// array to attach attributes to newly created image tags
    const categoryList = await getAllCategories();
    categoryList.map((data, index) => {
        document.getElementsByClassName(snapIMG[index])[0].setAttribute("src", `/ASSETS/1.LOGOS/${data.CategoryImg}`)
    })

    addCategoryLinks()

}
 


async function addCategoryLinks() {
    const categoryList = await getAllCategories();

    categoryList.forEach(data => {
        document.getElementsByTagName('h1')[data.CategoryId].addEventListener("click",function(){
            window.location.href = `./product.html?category=${data.CategoryId}`
    })
})


}

 
window.addEventListener("load", initSite);