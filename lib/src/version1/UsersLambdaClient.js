"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var UsersLambdaClient = (function (_super) {
    __extends(UsersLambdaClient, _super);
    function UsersLambdaClient(config) {
        _super.call(this, UsersLambdaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    UsersLambdaClient.prototype.getUsers = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);
        this.call('get_users', {
            correlation_id: correlationId,
            filter: filter,
            paging: paging
        }, callback);
    };
    UsersLambdaClient.prototype.findUser = function (correlationId, userId, email, callback) {
        callback = this.instrument(correlationId, 'users.find_user', callback);
        this.call('find_user', {
            correlation_id: correlationId,
            user_id: userId,
            email: email
        }, callback);
    };
    UsersLambdaClient.prototype.getUserById = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.get_user_by_id', callback);
        this.call('get_user_by_id', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    UsersLambdaClient.prototype.createUser = function (correlationId, user, callback) {
        callback = this.instrument(correlationId, 'users.create_user', callback);
        this.call('create_user', {
            correlation_id: correlationId,
            user: user
        }, callback);
    };
    UsersLambdaClient.prototype.updateUser = function (correlationId, userId, user, callback) {
        callback = this.instrument(correlationId, 'users.update_user', callback);
        this.call('update_user', {
            correlation_id: correlationId,
            user_id: userId,
            user: user
        }, callback);
    };
    UsersLambdaClient.prototype.deleteUser = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.delete_user', callback);
        this.call('delete_user', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    /**
     * Unique descriptor for the UsersLambdaClient component
     */
    UsersLambdaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-users", "lambda", "1.0");
    return UsersLambdaClient;
}(pip_services_runtime_node_5.LambdaClient));
exports.UsersLambdaClient = UsersLambdaClient;
