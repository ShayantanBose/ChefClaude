import { useState } from "react";
import IngredientList from "./IngredientList.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredient, setIngeredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  function HandleSubmit(formData) {
    const ingredientInput = formData.get("ingredients");
    if (ingredientInput.trim().length > 0) {
      setIngeredients((prevIngredients) => [
        ...prevIngredients,
        ingredientInput,
      ]);
    } else {
      alert("Input is invalid");
    }
  }

  async function getRecipeButton() {
    setLoading(true);
    const generateRecipe = await getRecipeFromMistral(ingredient);
    setRecipe(generateRecipe);
    setLoading(false);
  }

  return (
    <main>
      <form action={HandleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add Ingredients"
          placeholder="e.g. Oregano"
          name="ingredients"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredient.length ? (
        <IngredientList recipeBtn={getRecipeButton} ingredient={ingredient} />
      ) : null}
      {loading && <p>Fetching recipe....</p>}
      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}
