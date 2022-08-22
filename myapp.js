
    const searchMeal=() =>{
     let searchInputTxt=document.getElementById("search").value;
     
 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(res=>res.json())
    .then(data=>displayFood(data.meals));
    
    const displayFood= meals=>{
        const mealsDiv=document.getElementById("meals");
        mealsDiv.innerHTML='';
        if(searchInputTxt=='' || meals==null){
          const notFound=document.getElementById('notFound');
          notFound.innerText='Not Found, Please try again letter!!';
        }
        else{
            notFound.innerText='';
        for(let i=0; i<meals.length; i++)
        {
    
         const meal=meals[i];
            const mealDiv=document.createElement('div');
           
            // const h3=document.createElement('h3');
            // h3.innerText=meal.strMeal;
            // mealDiv.appendChild(h3);
            // mealsDiv.appendChild(mealDiv);
        //    console.log(meals[0].strMeal);
       
        
    mealDiv.className="meal";

        const displayMeal= `
      <div onclick= "displayFoodDetail('${meal.idMeal}')" class="card">
        <img src="${meal.strMealThumb}">
        
        <h4 >${meal.strMeal}</h4>
       </div>
       
        `
        // <button onclick="displayFoodDetail('${meal.idMeal}')"> Details</button>
      
        mealDiv.innerHTML=displayMeal;
       
        mealsDiv.appendChild(mealDiv);
        // <button onclick=displayFoodDetails("Lasagne")>Details</button>
        }
    }
    }
    document.getElementById('search').value='';
}
    

const displayFoodDetail = foodDetails => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodDetails}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayFood(data.meals[0]);
    });
}
const displayFood= food=>{
  const foodDisplay=document.getElementById('foodDetails');
  foodDisplay.className="food";
  
  const display=`
  <img src="${food.strMealThumb}">
  <h3>strIngredient</h3>
   <p>${food.strIngredient1}</p>
   <p>${food.strIngredient2}</p>
   <p>${food.strIngredient3}</p>
   <p>${food.strIngredient4}</p>
  `
  foodDisplay.innerHTML='';
  foodDisplay.innerHTML=display;
}