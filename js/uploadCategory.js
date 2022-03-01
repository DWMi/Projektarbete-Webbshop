import {makeRequest} from "./main.js";

export async function newCategory(){

let categoryName = document.getElementById("categoryName");
let categoryDescription = document.getElementById("categoryDescription");
let logoImg = document.getElementById("logoImg");
let backgroundImg = document.getElementById("backgroundImg");

if (categoryName.value === "" && categoryDescription.value === "") {
    document.getElementById("categoryNameResponse").innerHTML = "Please insert a category name!"

} else if(logoImg.files[0] === undefined && categoryName && categoryDescription){
    document.getElementById("logoInformationReturn").innerHTML = "Please insert a logo image!"
    document.getElementById("categoryNameResponse").innerHTML = ""
    
} else if(backgroundImg.files[0] === undefined && categoryName && categoryDescription && logoImg){
    document.getElementById("categoryNameResponse").innerHTML = ""
    document.getElementById("logoInformationReturn").innerHTML = ""
    document.getElementById("imageInfoReturn").innerText = "Please insert a background image!"
    
} else{
    document.getElementById("categoryNameResponse").innerHTML = ""
    document.getElementById("logoInformationReturn").innerHTML = ""
    document.getElementById("imageInfoReturn").innerText = ""    
    console.log("ok");


    let list = []

        let images = [];
        let logos = {
            "src" : document.getElementById("logoImg").files[0].name,

        }
        let backgrounds = {
            "src" : backgroundImg = document.getElementById("backgroundImg").files[0].name,

        }

        images.push(logos, backgrounds)

        let imageFiles = []

        let imgLogo = {
            "file" : document.getElementById("logoImg").files[0],
        }
        let imgBackground = {
            "file" : document.getElementById("backgroundImg").files[0]
        }

        imageFiles.push(imgLogo, imgBackground)


            let checkedLogoImage = await checkLogoImages(imageFiles[0].file)
            let checkedBackgroundImage = await checkBackgroundImages(imageFiles[1].file)

            if (checkedLogoImage == "notAnImage" || checkedBackgroundImage ==="notAnimage"){
                document.getElementById("categoryResponse").innerHTML = "One of the files that you have uploaded is not an image.";
                return;
            } else if (checkedLogoImage == "existingFile" || checkedBackgroundImage == "existingFile") {
                document.getElementById("categoryResponse").innerHTML = "One of the images that you want to upload already exists.";
                return;
            } else if (checkedLogoImage == "fileSize" || checkedBackgroundImage == "fileSize") {
                document.getElementById("categoryResponse").innerHTML = "One of the images that you want to upload is to large.";
                return;
            } else if (checkedLogoImage == "format" || checkedBackgroundImage == "format") {
                document.getElementById("categoryResponse").innerHTML = "One of the images that you want to upload is of the wrong format, accepted formats are: .JPG & .PNG & .JPEG & .GIF";
                return;
            }
        

        let category = {};
        category.name = categoryName.value
        category.description = categoryDescription.value

        list.push(images, category);

        let action = "addCategory";
            let body = new FormData();
            body.append("category", JSON.stringify(list));
            
            let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);

            console.log(response);

            if (response > 0){
                for(let i=0; i<imageFiles.length; i++) {
    
                    await uploadLogoImage(imageFiles[0].file);
                    await uploadBackgroundImage(imageFiles[1].file)
    
                }
                
                document.getElementById("categoryResponse").innerHTML = "Category saved!";
            } else {
                document.getElementById("categoryResponse").innerHTML = "Something went wrong saving your new product..";
            }



}



}

async function checkLogoImages(image){
    let action = "checkLogoImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);

    return response;
}

async function checkBackgroundImages(image){
    let action = "checkBackgroundImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);

    return response;
}


async function uploadLogoImage(image) {
    let action = "uploadLogoImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);

    return response;
}

async function uploadBackgroundImage(image) {
    let action = "uploadBackgroundImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);

    return response;
}


document.getElementById("saveCategory").addEventListener("click", function(){
    newCategory()
})



