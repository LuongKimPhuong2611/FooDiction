import { recipes } from "../data/recipes_data.js";
import React, { useState, useEffect } from "react";
import ListRecipe from "../components/items/ListRecipe.js";
import "./DetailRecipe.css";

function DetailRecipe(props) {
  console.log(props.match.params.id);
  let recipe = recipes[props.match.params.id - 1];

  // const recipe = recipes.find(x => x._id === props.match.params.id);
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <li className="recipes__item2">
              <div className="recipes__item__link2">
                <figure className="recipes__item__pic-wrap2">
                  <img
                    className="recipes__item__img2"
                    alt="Recipe Image"
                    src={recipe.urlImage}
                  />
                </figure>
                <h1 className="recipes__item__info2">{recipe.name}</h1>
              </div>
            </li>
          </div>

          <div className="col-8">
            <h1 className="section-heading">Ingredients</h1>
            <div className="row-8">
              <div className="col-8a">
                <ul className="ingre-beni">
                  {recipe.recipes.map((beni) => (
                    <div>
                      <li className="beni2">{`${beni.name}: `}</li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="col-8b">
                <ul className="count-beni">
                  {recipe.countIngre.map((beni) => (
                    <div>
                      <li className="beni3">{beni}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-2 p-25">
            <h1 className="section-heading">Instruction</h1>
            <ul className="health-beni">
              {recipe.instructions.map((beni) => (
                <div>
                  <li className="beni">{beni}</li>
                  {/* <p className="discription">
                    The amount of lycopene is higher in processed tomato foods
                    because processing involves removing water
                  </p> */}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <h1 className="section-heading2">Relate Recipes</h1> */}
    </div>
  );
}

export default DetailRecipe;
