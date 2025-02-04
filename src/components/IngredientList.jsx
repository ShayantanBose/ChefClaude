export default function IngredientList(props) {
  const ingredientItems = props.ingredient.map((ingredients, index) => (
    <li key={index}>{ingredients}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientItems}
      </ul>
      {props.ingredient.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.recipeBtn}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
