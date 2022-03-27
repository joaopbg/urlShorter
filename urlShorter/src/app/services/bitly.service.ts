import { Injectable } from '@angular/core';

  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  private longLink : any

  private token = '0077062cbffbc8362ee9ed3ba3f1cf0596493d7d'

  constructor(private http : HttpClient) { }

  public getLink(longLink : String):Observable<any>{
    return this.http.get(`https://api-ssl.bitly.com/shorten?access_token=${this.token}&longUrl=${longLink}`)

  }
}
