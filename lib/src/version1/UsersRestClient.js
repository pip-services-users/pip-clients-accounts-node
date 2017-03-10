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
var UsersRestClient = (function (_super) {
    __extends(UsersRestClient, _super);
    function UsersRestClient(config) {
        _super.call(this, UsersRestClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    UsersRestClient.prototype.getUsers = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);
        var params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        this.addPagingParams(params, paging);
        this.call('get', '/users', params, callback);
    };
    UsersRestClient.prototype.findUser = function (correlationId, userId, email, callback) {
        callback = this.instrument(correlationId, 'users.find_user', callback);
        this.call('get', '/users/find', {
            correlation_id: correlationId,
            user_id: userId,
            email: email
        }, callback);
    };
    UsersRestClient.prototype.getUserById = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.get_user_by_id', callback);
        this.call('get', '/users/' + userId, {
            correlation_id: correlationId
        }, callback);
    };
    UsersRestClient.prototype.createUser = function (correlationId, user, callback) {
        callback = this.instrument(correlationId, 'users.create_user', callback);
        this.call('post', '/users', {
            correlation_id: correlationId
        }, user, callback);
    };
    UsersRestClient.prototype.updateUser = function (correlationId, userId, user, callback) {
        callback = this.instrument(correlationId, 'users.update_user', callback);
        this.call('put', '/users/' + userId, {
            correlation_id: correlationId
        }, user, callback);
    };
    UsersRestClient.prototype.deleteUser = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.delete_user', callback);
        this.call('delete', '/users/' + userId, {
            correlation_id: correlationId
        }, callback);
    };
    /**
     * Unique descriptor for the UsersRestClient component
     */
    UsersRestClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-users", "rest", "1.0");
    return UsersRestClient;
}(pip_services_runtime_node_5.RestClient));
exports.UsersRestClient = UsersRestClient;
