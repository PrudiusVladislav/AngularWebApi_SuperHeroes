import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  url = "superhero"

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>
  {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]>
  {
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }

  public createHero(hero: SuperHero) : Observable<SuperHero[]>
  {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`, 
    {
      Name: hero.name,
      FirstName: hero.firstName,
      LastName: hero.lastName,
      Place: hero.place,
    });
  }

  public deleteHero(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}
