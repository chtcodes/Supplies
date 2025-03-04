export interface APIResponseModel<T>{
    status : string;
    message: string;
    data : T;
    error?: any;
}

export interface IDesignation{
    id: number;
    designationName : string;
    grade : string;
}
export interface IDesignation{
    id: number;
    designationName : string;
    grade : string;
    code : string;
}
export interface IFaculty{
    id: number;
    facultyName : string;
    code : string;
}

export interface IDepartment{
    id: number;
    departmentName : string;
    code: string;
    faculty : IFaculty;
}