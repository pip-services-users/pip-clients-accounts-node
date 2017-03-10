let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { SenecaClient } from 'pip-services-runtime-node';

import { IUsersClient } from './IUsersClient';

export class UsersSenecaClient extends SenecaClient implements IUsersClient {       
	/**
	 * Unique descriptor for the UsersSenecaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-users", "seneca", "1.0"
	);
    
    constructor(config?: any) {
        super(UsersSenecaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
                        
    public getUsers(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);
        this.call(
            'users', 'get_users',
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
            'users', 'find_user',
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
            'users', 'get_user_by_id',
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
            'users', 'create_user', 
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
            'users', 'update_user',
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
            'users', 'delete_user',
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );
    }
                
}
