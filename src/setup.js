import restaurantPic from './restaurantPic.jpg';

function createBase(){
    let heading = document.createElement('h1');
    heading.textContent = "Welcome to my restaurant page";

    const restaurantImage = new Image(350, 350);
    restaurantImage.src = restaurantPic;


    let restaurantText = document.createElement('p');
    restaurantText.innerHTML = "This restuarant is amazing. It makes me smile; it makes me happy. I love this restaurant with all my heart."

    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(heading);
    contentDiv.appendChild(restaurantImage);
    contentDiv.appendChild(restaurantText);
}




console.log('nice')

export default createBase;