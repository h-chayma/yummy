import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  recipe: string = '';

  @Output() recipeSearched: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { } 

  onSubmit(): void {
    if (this.recipe) {
      this.recipeSearched.emit(this.recipe);
      this.router.navigate([''], { queryParams: { search: this.recipe } }); 
    }
  }
}
