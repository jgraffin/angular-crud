import { Injectable } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/IAnimals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<IAnimals>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<IAnimals[]> {
    return this.http.get<IAnimals[]>(this.apiUrl)
  }

  getItem(id: number): Observable<IAnimals> {
    return this.http.get<IAnimals>(`${this.apiUrl}/${id}`);
  }
}
