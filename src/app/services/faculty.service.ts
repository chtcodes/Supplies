import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { constant } from '../constants/constant';
import { APIResponseModel, IFaculty } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

   getAllFaculties(): Observable<APIResponseModel<IFaculty[]>>{
      return this.http.get<APIResponseModel<IFaculty[]>>(
       environment.API_URL + constant.API_METHOD.FACULTIES);
    }
  
  
    createFaculty(faculty: IFaculty): Observable<APIResponseModel<IFaculty>> {
      return this.http.post<APIResponseModel<IFaculty>>(environment.API_URL + constant.API_METHOD.FACULTIES, faculty);
    }
  
  
    updateFaculty(faculty: IFaculty): Observable<APIResponseModel<IFaculty>> {
      return this.http.put<APIResponseModel<IFaculty>>(environment.API_URL + constant.API_METHOD.FACULTIES, faculty);
    }
  
  
    deleteFaculty(id : number) : Observable<APIResponseModel<string>> {
        return this.http.delete<APIResponseModel<string>>(environment.API_URL + constant.API_METHOD.FACULTIES+ '/' +id);
    }
  





}
