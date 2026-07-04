import {meals} from './data.js';



const burgerToggle= document.getElementById('burger-toggle');
const listContainer= document.getElementById('list-container');
const heroSection= document.getElementById('home')

burgerToggle.addEventListener('click',(event)=>{
    burgerToggle.classList.toggle('active');
    listContainer.classList.toggle('active');

    
})

listContainer.addEventListener('click', (event)=> {
    if (event.target.tagName==='A') {
        burgerToggle.classList.remove('active');
        listContainer.classList.remove('active');
    }
        
})

// Generate meals section dynamically

const mealsSection= document.createElement('section');
mealsSection.className= 'meals-section';
mealsSection.id= 'meals-section';

const sectionTitle= document.createElement('h2');
sectionTitle.className= 'section-title';
sectionTitle.textContent= "أشهر الوجبات";

const mealCardsContainer= document.createElement('div');
mealCardsContainer.className= 'meal-cards-container';

meals.forEach(meal=>{
    const mealCard= document.createElement('div');
mealCard.className= 'meal-card';

const mealImgContainer= document.createElement('div');
mealImgContainer.className= 'meal-img-container';

const mealImage= document.createElement('img');
mealImage.className= 'meal-image';
mealImage.src= meal.image;
mealImage.alt= meal.name;

const mealDetails= document.createElement('div');
mealDetails.className= 'meal-details';

const mealName= document.createElement('h3');
mealName.className= 'meal-name';
mealName.textContent= meal.name;

const mealCode= document.createElement('p');
mealCode.className= 'meal-code';
mealCode.textContent= meal.id;

const mealDescription= document.createElement('p');
mealDescription.className= 'meal-description';
mealDescription.textContent= meal.description;

const orderButton= document.createElement('a');
orderButton.className= 'button';
orderButton.textContent= "اطلب الان"
orderButton.href =
`https://wa.me/967771646919?text=${encodeURIComponent(meal.whatsappMessage)}`;

mealImgContainer.appendChild(mealImage);
mealDetails.appendChild(mealName);
mealDetails.appendChild(mealCode);
mealDetails.appendChild(mealDescription);
mealDetails.appendChild(orderButton);
 
mealCard.appendChild(mealImgContainer);
 mealCard.appendChild(mealDetails);


 mealCardsContainer.appendChild(mealCard);
})
mealsSection.appendChild(sectionTitle);
mealsSection.appendChild(mealCardsContainer);
heroSection.after(mealsSection);             
