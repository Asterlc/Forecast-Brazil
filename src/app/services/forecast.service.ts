import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private httpClient: HttpClient) { };
  protected baseURL = `https://forecast-br.herokuapp.com/forecast`;
  // protected baseURL = `http://localhost:8095/forecast`; //dev cors liberado

  getCountyByName(countyName: string): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    const county = this.httpClient.get<any>(`${this.baseURL}/${encodeURI(countyName)}`, httpHeader);
    return county;
  }
}