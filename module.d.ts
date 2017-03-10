declare module 'pip-clients-users-node' {
	import { IClient } from 'pip-services-runtime-node';
	import { RestClient } from 'pip-services-runtime-node';
	import { LambdaClient } from 'pip-services-runtime-node';
	import { SenecaClient } from 'pip-services-runtime-node';
	import { ComponentDescriptor } from 'pip-services-runtime-node';
	import { ComponentFactory } from 'pip-services-runtime-node';

    export class UsersFactory extends ComponentFactory {
        public static Instance: UsersFactory;	
        constructor();	
    }

    module Version1 {
        export interface IUsersClient extends IClient {
            getUsers(correlationId: string, filter: any, paging: any, callback: any): void;
            findUser(correlationId: string, userId: string, email: string, callback: any): void;
            getUserById(correlationId: string, userId: string, callback: any): void;
            createUser(correlationId: string, user: any, callback: any): void;
            updateUser(correlationId: string, userId: string, user: any, callback: any): void;
            deleteUser(correlationId: string, userId: string, callback: any): void;
        }

        export class UsersRestClient extends RestClient implements IUsersClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getUsers(correlationId: string, filter: any, paging: any, callback: any): void;
            findUser(correlationId: string, userId: string, email: string, callback: any): void;
            getUserById(correlationId: string, userId: string, callback: any): void;
            createUser(correlationId: string, user: any, callback: any): void;
            updateUser(correlationId: string, userId: string, user: any, callback: any): void;
            deleteUser(correlationId: string, userId: string, callback: any): void;
        }

        export class UsersLambdaClient extends LambdaClient implements IUsersClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getUsers(correlationId: string, filter: any, paging: any, callback: any): void;
            findUser(correlationId: string, userId: string, email: string, callback: any): void;
            getUserById(correlationId: string, userId: string, callback: any): void;
            createUser(correlationId: string, user: any, callback: any): void;
            updateUser(correlationId: string, userId: string, user: any, callback: any): void;
            deleteUser(correlationId: string, userId: string, callback: any): void;
        }

        export class UsersSenecaClient extends SenecaClient implements IUsersClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getUsers(correlationId: string, filter: any, paging: any, callback: any): void;
            findUser(correlationId: string, userId: string, email: string, callback: any): void;
            getUserById(correlationId: string, userId: string, callback: any): void;
            createUser(correlationId: string, user: any, callback: any): void;
            updateUser(correlationId: string, userId: string, user: any, callback: any): void;
            deleteUser(correlationId: string, userId: string, callback: any): void;
        }
    }
}
