import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  recipe: string = '';
  isLoading = true;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.recipe = params['search'];
        this.search();
      }
    });
  }

  search() {
    this.isLoading = true;
    if (this.recipe) {
      this.recipeService.searchRecipes(this.recipe).subscribe(
        (data) => {
          this.recipes = data.results;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching recipes:', error);
          this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  }

  get() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data.recipes;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching recipes:', error);
        this.isLoading = false;
      }
    );
  }

}