import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { getLocaleDateFormat } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LocationFinderService {
  static reduce(arg0: (prev: any, now: any) => any, arg1: {}) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {}

  getData():Observable<any>{
      const url = "assets/data/ghla-info.json";
      return this.http.get<any>(url).pipe(retry(1),catchError(this.handleError));
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }

  
}
