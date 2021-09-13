export interface ITask {
    task_id:string,
    task: string,
    created_by:User
    tags:Array<string>
    status: string,
    created_on: string
}

export interface User{
    user_id:string,
    user_name:string,
    joined_on:number,
    occupation:string
}
