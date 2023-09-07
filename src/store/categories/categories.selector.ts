import { createSelector } from "reselect";

import { CategoriesState } from "./categories.reducer";

import { CategoriesMap } from "./categories.type";

const selectCategoryReducer = (state): CategoriesState=> state.categories; //only this one fires when the root reducer changes properties that are not this one!

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoriesMap =>
    categories.reduce((acc, category)=>{
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap)
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>categoriesSlice.isLoading
)

