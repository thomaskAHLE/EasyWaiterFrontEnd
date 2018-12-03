export enum USER_TYPE{WAITER, MANAGER, KITCHEN};

export class UserModel
{
    displayName: string;
    email:string;
    uid: string;
    password: string;
    userType: USER_TYPE; 
    /* constuctor: constuctor for user model
     */
    constructor(userName: string, userEmail:string, userPassword:string, userType:USER_TYPE, userId:string = null)
    {
        this.displayName = userName;
        this.email = userEmail;
        this.password = userPassword;
        this.userType = userType;
        this.uid = userId;
    }    
}