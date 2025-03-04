import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel, IDesignation } from '../model/model';
import { environment } from '../../environments/environment.development';
import { constant } from '../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationsService {

  constructor(private http: HttpClient) { }
  

  getAllDesignations(): Observable<APIResponseModel<IDesignation[]>>{
    return this.http.get<APIResponseModel<IDesignation[]>>(
      environment.API_URL + constant.API_METHOD.DESIGNATIONS);
  }


  createDesignation(designation: IDesignation): Observable<APIResponseModel<IDesignation>> {
    return this.http.post<APIResponseModel<IDesignation>>(environment.API_URL + constant.API_METHOD.DESIGNATIONS, designation);
  }


  updateDesignation(id: number, designation: IDesignation): Observable<APIResponseModel<IDesignation>> {
    return this.http.put<APIResponseModel<IDesignation>>(environment.API_URL + constant.API_METHOD.DESIGNATIONS+ "/" + id, designation);
  }


  deleteDesignation(id : number) : Observable<APIResponseModel<string>> {
      return this.http.delete<APIResponseModel<string>>(environment.API_URL + constant.API_METHOD.DESIGNATIONS+ '/' +id);
  }



}
