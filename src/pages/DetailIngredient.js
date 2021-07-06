import { ingredients } from "../data/ingredients_data.js";
import "./DetailIngredient.css";
import React, { useState, useEffect } from "react";
import { recipes } from "../data/recipes_data.js";
import ListRecipe from "../components/items/ListRecipe.js";
import "./Recipe.css";

function DetailIngredient(props) {
  console.log(props.match.params.id);
  let ingredient = ingredients[props.match.params.id - 1];

  var tempList = []

  for (var i = 0; i < recipes.length; i++) {
    var flat = 0;
      for (var k = 0; k < recipes[i].recipes.length; k++) {
        if (ingredient.name == recipes[i].recipes[k].name) {
              flat = 1;
            }
          }
          if (flat == 1) {
            tempList.push(recipes[i]);
          }
    }

  // const ingredient = ingredients.find(x => x._id === props.match.params.id);
  return (
    <div className="page">
      <div className="container">
        <div className= "part-1">
        <div className="row">
          <div className="col-6 p-25">
            <h1 className="section-heading">Health Benifit</h1>
            <ul className="health-beni">
              {ingredient.healthBenifit.map((beni) => (
                <div>
                  <li className="beni">{beni}</li>
                  <p className="discription">
                    The amount of lycopene is higher in processed tomato foods
                    because processing involves removing water
                  </p>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h1 className="section-heading">{ingredient.name}</h1>
            <figure className="ingredient__pic-wrap">
              <img
                className="ingredient__img"
                alt="Ingredient Image"
                src={ingredient.urlImage}
              />
            </figure>
          </div>
        </div>
      </div>
        </div>
        
        <div className= "part-3">
        <h1 className="section-heading2">Relate Recipes</h1>
      <ListRecipe recipes={tempList} />
        </div>
    </div>
  );
}

export default DetailIngredient;
