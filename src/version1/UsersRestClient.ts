let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { Converter } from 'pip-services-runtime-node';
import { RestClient } from 'pip-services-runtime-node';

import { IUsersClient } from './IUsersClient';

export class UsersRestClient extends RestClient implements IUsersClient {       
	/**
	 * Unique descriptor for the UsersRestClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-users", "rest", "1.0"
	);
    
    constructor(config?: any) {
        super(UsersRestClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getUsers(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);

        let params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        this.addPagingParams(params, paging);
        
        this.call('get', 
            '/users', 
            params, 
            callback
        );
    }

    public findUser(correlationId: string, userId: string, email: string, callback) {
        callback = this.instrument(correlationId, 'users.find_user', callback);
                
        this.call('get', 
            '/users/find',
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
                 
        this.call('get', 
            '/users/' + userId,
            {
                correlation_id: correlationId
            }, 
            callback
        );        
    }

    public createUser(correlationId: string, user: any, callback) {
        callback = this.instrument(correlationId, 'users.create_user', callback);
        
        this.call('post', 
            '/users',
            {
                correlation_id: correlationId
            }, 
            user, 
            callback
        );
    }

    public updateUser(correlationId: string, userId: string, user: any, callback) {
        callback = this.instrument(correlationId, 'users.update_user', callback);
        
        this.call('put', 
            '/users/' + userId, 
            {
                correlation_id: correlationId
            }, 
            user, 
            callback
        );
    }

    public deleteUser(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'users.delete_user', callback);

        this.call('delete', 
            '/users/' + userId, 
            {
                correlation_id: correlationId
            }, 
            callback
        );
    }
            
}
