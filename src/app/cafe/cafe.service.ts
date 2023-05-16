import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {


constructor(private http: HttpClient) { }

getcafes(): Observable<any>
{
  return this.http.get("https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json");
}


}
