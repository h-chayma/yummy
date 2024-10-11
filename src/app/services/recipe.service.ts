import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = '445f58d332e54e229a5002800ec5264d';
  private apiUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) { }

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}/complexSearch?query=${query}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipeDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipes(): Observable<any> {
    const url = `${this.apiUrl}/random?number=12&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

}