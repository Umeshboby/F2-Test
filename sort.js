let allRecipeBtn = document.getElementById("all-recipes");
allRecipeBtn.addEventListener("click", displayAllRecipe);

let vegRecipe = document.getElementById("veg-recipes");
vegRecipe.addEventListener("click", displayVegRecipe);

let nonVegRecipe = document.getElementById("nonveg-recipies");
nonVegRecipe.addEventListener("click", displayNonVegRecipe);

const cardsArr = container.children;


let ratingCheck = {
    below: true,
    above: true,
} 

let form = document.querySelector("form");
form.addEventListener("change", onFormChange);


let recipeSection = document.querySelector(".recipies-section");
let recipeBtn = recipeSection.children;
recipeBtn[0].classList.add("add-border");

let displayedCards = [];

function displayAllRecipe(){
    displayedCards = [];

    for ( let i = 0; i < recipeBtn.length; i++ ){
        if(recipeBtn[i].classList.contains("add-border")){
            recipeBtn[i].classList.remove("add-border");
        }
    }
    recipeBtn[0].classList.add("add-border")


    for ( let i = 0; i < cardsArr.length; i++ ){
        if(cardsArr[i].classList.contains("hide")){
            cardsArr[i].classList.remove("hide");
        }
        displayedCards.push(cardsArr[i]);
    }
    
}

function displayVegRecipe(){
    displayedCards = [];

    for ( let i = 0; i < recipeBtn.length; i++ ){
        if(recipeBtn[i].classList.contains("add-border")){
            recipeBtn[i].classList.remove("add-border");
        }
    }
    recipeBtn[1].classList.add("add-border")


    for ( let i = 0; i < cardsArr.length; i++ ){
        if(cardsArr[i].classList.contains("hide")){
            cardsArr[i].classList.remove("hide");
        }

        if(cardsArr[i].classList.contains("non-veg")){
            cardsArr[i].classList.add("hide");
        }
        else{
            displayedCards.push(cardsArr[i]);
        }
    }
    
}

function displayNonVegRecipe(){
    displayedCards = [];


    for ( let i = 0; i < recipeBtn.length; i++ ){
        if(recipeBtn[i].classList.contains("add-border")){
            recipeBtn[i].classList.remove("add-border");
        }
    }
    recipeBtn[2].classList.add("add-border")


    for ( let i = 0; i < cardsArr.length; i++ ){
        if(cardsArr[i].classList.contains("hide")){
            cardsArr[i].classList.remove("hide");
        }

        if(cardsArr[i].classList.contains("veg")){
            cardsArr[i].classList.add("hide");
        }
        else{
            displayedCards.push(cardsArr[i]);
        }
    }
   
}


function onFormChange(event){
    if(event.target.checked){
        ratingCheck[event.target.id] = true;
    }
    else{
        ratingCheck[event.target.id] = false;
    }

    if (ratingCheck[below] == true && ratingCheck[above] == false){

    }
    else if(ratingCheck[below] == false && ratingCheck[above] == true){

    }
    else if(ratingCheck[below] == false && ratingCheck[above] == false){

    }
    else{
        
    }
}