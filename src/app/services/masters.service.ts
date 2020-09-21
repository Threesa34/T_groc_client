import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCountriesList():Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getCountryList').pipe(map(data => {
      return data;
    }));
  }

  getStatesOnCountry(countryid):Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getStateListOnCountry/'+countryid).pipe(map(data => {
      return data;
    }));
  }

  getCityListOnState(stateid):Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getCityListOnState/'+stateid).pipe(map(data => {
      return data;
    }));
  }

  getCompanyDetails(companyid):Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getCompanyDetails/'+companyid).pipe(map(data => {
      return data;
    }));
  }

  getCompaniesList():Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getCompaniesList/').pipe(map(data => {
      return data;
    }));
  }

  saveCompanydetails(companyDetails): Observable<any>
  {
    return this.httpClient.post(environment.endpoint_url+'/api/saveCompanyDetails/',companyDetails).pipe(map(data => {
							return data;
					}));
  }

  deleteCompanies(companyIds): Observable<any>
  {
    return this.httpClient.post(environment.endpoint_url+'/api/deleteCompanies/',companyIds).pipe(map(data => {
							return data;
					}));
  }


  getUserDetails(userid):Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getUserDetails/'+userid).pipe(map(data => {
      return data;
    }));
  }

  getUsersList():Observable<any>
  {
    return this.httpClient.get<any>(environment.endpoint_url+'/api/getUsersList/').pipe(map(data => {
      return data;
    }));
  }

  saveUserDetails(userDetails): Observable<any>
  {
    return this.httpClient.post(environment.endpoint_url+'/api/saveUserDetails/',userDetails).pipe(map(data => {
							return data;
					}));
  }

  deleteUsers(userIds): Observable<any>
  {
    return this.httpClient.post(environment.endpoint_url+'/api/deleteUsers/',userIds).pipe(map(data => {
							return data;
					}));
  }
}
