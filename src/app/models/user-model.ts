export enum USER_TYPE{WAITER, MANAGER, KITCHEN};

export class UserModel
{
    userName: string;
    userPassword: string;
    userEmail:string;
    userType: USER_TYPE; 
    
}