import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Chicken sandwhich',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chicken_sandwich.jpg/1024px-Chicken_sandwich.jpg',
      ingredients: ['chicken breast', 'bread', 'butter', 'lettuce']
    },
    {
      id: 'r2',
      title: 'Salmon steak',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/11/05/22/19/salmon-518497_960_720.jpg',
      ingredients: ['salmon', 'salt', 'pepper', 'lemon']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipeId !== recipe.id
    });
  }
}
