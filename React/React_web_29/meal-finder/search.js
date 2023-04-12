import { searchMeals } from "./meal.service";
import { createMealCard } from "./ui";

export const setupSearchForm = (el) => {
    const form = document.querySelector(el);
    const mealList = document.querySelector(".meal-list");

    const onSubmit = (e) => {
        e.preventDefault();

        const keyword = e.target.elements.keyword.value.trim();

        if (keyword.length > 0)
            searchMeals(e.target.elements.keyword.value).then((meals) => {
                mealList.innerHTML = (meals || []).map(createMealCard).join("");
            });
    };

    form.addEventListener("submit", onSubmit);
};
