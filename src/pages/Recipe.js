import React, { useState, useEffect } from "react";
import { recipes } from "../data/recipes_data.js";
import ListRecipe from "../components/items/ListRecipe.js";
import "./Recipe.css";

function Recipe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempList, setTempList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  // var isSearch = false;

  useEffect(() => {
    setTempList(
      recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length == 0) setTempList(recipes);
  }, [searchTerm]);

return (
  <div className = "page">
    <h1 className="heading" data-aos="fade-up">
      What <span>recipe</span> you want to <span>explore</span>?
    </h1>
    <div className="search_wrap search_wrap_5">
      <div className="search_box">
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value = {searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {(searchTerm.length>0)?
              <div
                onClick={() => {
                  setSearchTerm("");
                }}
                className="button"
              >
                <p>Clear</p>
              </div>: null
            }
      </div>
    </div>
    <ListRecipe recipes={tempList} />
  </div>
);
}
export default Recipe;
