import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaginatedToughts, IToughtProps } from '../../components/toughts/tought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToughtService {

  private readonly API = "http://localhost:3000/toughts"

  constructor(private http: HttpClient) { }

  index(page:number): Observable<IPaginatedToughts> 
  {   
     const itensRendered = 6;


    let params = new HttpParams()
    .set("_page", page)
    .set("_per_page",itensRendered )

    return this.http.get<IPaginatedToughts>(this.API, {params})
  }

  create (tought: IToughtProps) : Observable<IToughtProps> 
  {
    return this.http.post<IToughtProps>(this.API, tought);
  }

  edit (tought: IToughtProps)  : Observable<IToughtProps>
  {
    const URL = `${this.API}/${tought.id}`
    return this.http.put<IToughtProps>(URL, tought)
  }

  delete (id: string) : Observable<IToughtProps>
  {
    const URL = `${this.API}/${id}`
    return this.http.delete<IToughtProps>(URL)
  }

  favourite (tought: IToughtProps) : Observable<IToughtProps>
  {
    const URL = `${this.API}/${tought.id}`
    return this.http.put<IToughtProps>(URL, tought)
  }


  getTought( id : string) : Observable<IToughtProps>
  { 
    const URL = `${this.API}/${id}`
    return this.http.get<IToughtProps>(URL);
  } 



}
