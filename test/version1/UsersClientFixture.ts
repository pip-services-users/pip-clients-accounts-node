let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IUsersClient } from '../../src/version1/IUsersClient';

let USER1 = {
    id: '1',
    name: 'Test User 1',
    email: 'user1@digitallivingsoftware.com'
};
let USER2 = {
    id: '2',
    name: 'Test User 2',
    email: 'user2@digitallivingsoftware.com'
};

export class UsersClientFixture {
    private _client: IUsersClient;
    
    constructor(client: IUsersClient) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let user1, user2;

        async.series([
        // Create one user
            (callback) => {
                this._client.createUser(
                    null,
                    USER1,
                    (err, user) => {
                        assert.isNull(err);
                        
                        assert.isObject(user);
                        assert.equal(user.name, USER1.name);
                        assert.equal(user.email, USER1.email);

                        user1 = user;

                        callback();
                    }
                );
            },
        // Create another user
            (callback) => {
                this._client.createUser(
                    null,
                    USER2,
                    (err, user) => {
                        assert.isNull(err);
                        
                        assert.isObject(user);
                        assert.equal(user.name, USER2.name);
                        assert.equal(user.email, USER2.email);

                        user2 = user;

                        callback();
                    }
                );
            },
        // Get all users
            (callback) => {
                this._client.getUsers(
                    null,
                    {},
                    {},
                    (err, users) => {
                        assert.isNull(err);
                        
                        assert.isObject(users);
                        assert.lengthOf(users.data, 2);

                        callback();
                    }
                );
            },
        // Get random user
            (callback) => {
                this._client.findUser(
                    null,
                    null,
                    'user2@digitallivingsoftware.com',
                    (err, user) => {
                        assert.isNull(err);
                        
                        assert.isObject(user);

                        callback();
                    }
                );
            },
        // Update the user
            (callback) => {
                this._client.updateUser(
                    null,
                    user1.id,
                    { name: 'Updated User 1' },
                    (err, user) => {
                        assert.isNull(err);
                        
                        assert.isObject(user);
                        assert.equal(user.name, 'Updated User 1');
                        assert.equal(user.email, USER1.email);

                        user1 = user;

                        callback();
                    }
                );
            },
        // Delete user
            (callback) => {
                this._client.deleteUser(
                    null,
                    user1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get deleted user
            (callback) => {
                this._client.getUserById(
                    null,
                    user1.id,
                    (err, user) => {
                        assert.isNull(err);
                        
                        assert.isNull(user || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
