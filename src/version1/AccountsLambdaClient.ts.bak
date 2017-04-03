let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { Converter } from 'pip-services-runtime-node';
import { LambdaClient } from 'pip-services-runtime-node';

import { IUsersClient } from './IUsersClient';

export class UsersLambdaClient extends LambdaClient implements IUsersClient {       
	/**
	 * Unique descriptor for the UsersLambdaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-users", "lambda", "1.0"
	);
    
    constructor(config?: any) {
        super(UsersLambdaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getUsers(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);
        this.call(
            'get_users',
            {
                correlation_id: correlationId,
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public findUser(correlationId: string, userId: string, email: string, callback) {
        callback = this.instrument(correlationId, 'users.find_user', callback);
        this.call(
            'find_user',
            {
                correlation_id: correlationId,
                user_id: userId,
                email: email
            }, 
            callback
        );        
    }

    public getUserById(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'users.get_user_by_id', callback);
        this.call(
            'get_user_by_id',
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );        
    }

    public createUser(correlationId: string, user: any, callback) {
        callback = this.instrument(correlationId, 'users.create_user', callback);
        this.call(
            'create_user', 
            {
                correlation_id: correlationId,
                user: user
            }, 
            callback
        );
    }

    public updateUser(correlationId: string, userId: string, user: any, callback) {
        callback = this.instrument(correlationId, 'users.update_user', callback);
        this.call(
            'update_user',
            {
                correlation_id: correlationId,
                user_id: userId,
                user: user
            }, 
            callback
        );
    }

    public deleteUser(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'users.delete_user', callback);
        this.call(
            'delete_user',
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );
    }
    
}
