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
var UsersSenecaClient = (function (_super) {
    __extends(UsersSenecaClient, _super);
    function UsersSenecaClient(config) {
        _super.call(this, UsersSenecaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    UsersSenecaClient.prototype.getUsers = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'users.get_users', callback);
        this.call('users', 'get_users', {
            correlation_id: correlationId,
            filter: filter,
            paging: paging
        }, callback);
    };
    UsersSenecaClient.prototype.findUser = function (correlationId, userId, email, callback) {
        callback = this.instrument(correlationId, 'users.find_user', callback);
        this.call('users', 'find_user', {
            correlation_id: correlationId,
            user_id: userId,
            email: email
        }, callback);
    };
    UsersSenecaClient.prototype.getUserById = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.get_user_by_id', callback);
        this.call('users', 'get_user_by_id', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    UsersSenecaClient.prototype.createUser = function (correlationId, user, callback) {
        callback = this.instrument(correlationId, 'users.create_user', callback);
        this.call('users', 'create_user', {
            correlation_id: correlationId,
            user: user
        }, callback);
    };
    UsersSenecaClient.prototype.updateUser = function (correlationId, userId, user, callback) {
        callback = this.instrument(correlationId, 'users.update_user', callback);
        this.call('users', 'update_user', {
            correlation_id: correlationId,
            user_id: userId,
            user: user
        }, callback);
    };
    UsersSenecaClient.prototype.deleteUser = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'users.delete_user', callback);
        this.call('users', 'delete_user', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    /**
     * Unique descriptor for the UsersSenecaClient component
     */
    UsersSenecaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-users", "seneca", "1.0");
    return UsersSenecaClient;
}(pip_services_runtime_node_5.SenecaClient));
exports.UsersSenecaClient = UsersSenecaClient;
