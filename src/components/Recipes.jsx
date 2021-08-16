import { useState } from "react";


const stewRecipe = {
    blackbeans: '1 cup',
    lentils: '1 cup',
    potatoes: '5 medium sized'
}

const stewRecipeAdd = {
    ...stewRecipe,
    mushrooms: "8oz",
    lentils: "1/2 Cup"
}

console.log(stewRecipe);
console.log(stewRecipeAdd);
console.log("hey");
console.log('Hello')

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick = {()=>setRecipe(stewRecipe)}>Stew Recipe</button>
            <button onClick = {()=>setRecipe(stewRecipeAdd)}>Bigger Stew Recipe</button>
            <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key = {material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;

