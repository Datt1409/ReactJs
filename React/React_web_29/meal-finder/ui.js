export const createMealCard = (meal) => {
    console.log(meal);
    return `<div class="meal">
              <a href="receipt.html?id=${meal.idMeal}">
                <div class="meal-thumbnail">
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="meal-info">
                  <div class="meal-title">${meal.strMeal}</div>
                </div>
              </a>
            </div>`;
};
