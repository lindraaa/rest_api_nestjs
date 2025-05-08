export interface customInterface<T> {
    message: string;
    status: number;
    success: boolean;
    data?: T;
  }
export function customResponse<T>(message: string,data?: T,status: number=200,success: boolean=true): customInterface<T> {
    return { 
        message, 
        status, 
        success, 
        data 
    };
  }
   