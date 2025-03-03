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