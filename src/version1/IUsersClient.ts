import { IClient } from 'pip-services-runtime-node';

export interface IUsersClient extends IClient {
    getUsers(correlationId: string, filter: any, paging: any, callback: any): void;
    findUser(correlationId: string, userId: string, email: string, callback: any): void;
    getUserById(correlationId: string, userId: string, callback: any): void;
    createUser(correlationId: string, user: any, callback: any): void;
    updateUser(correlationId: string, userId: string, user: any, callback: any): void;
    deleteUser(correlationId: string, userId: string, callback: any): void;
}
