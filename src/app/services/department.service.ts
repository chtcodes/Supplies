import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel, IDepartment } from '../model/model';
import { Observable } from 'rxjs';
import { constant } from '../constants/constant';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<IDepartment[]>{
      return this.http.get<IDepartment[]>(
        environment.API_URL + constant.API_METHOD.DEPARTMENTS);
    }


  createDepartment(department: IDepartment): Observable<IDepartment> {
    return this.http.post<IDepartment>(environment.API_URL + constant.API_METHOD.DEPARTMENTS, department);
  }


  updateDepartment(id: number, department: IDepartment): Observable<IDepartment> {
    return this.http.put<IDepartment>(environment.API_URL + constant.API_METHOD.DEPARTMENTS + '/${id}', department);
  }


  deleteDepartment(id : number) : Observable<string> {
      return this.http.delete<string>(environment.API_URL + constant.API_METHOD.DEPARTMENTS+ '/' +id);
  }


}
