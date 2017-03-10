"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var Version1 = require('../version1');
var UsersFactory = (function (_super) {
    __extends(UsersFactory, _super);
    function UsersFactory() {
        _super.call(this, pip_services_runtime_node_2.DefaultFactory.Instance);
        this.register(Version1.UsersRestClient.Descriptor, Version1.UsersRestClient);
        this.register(Version1.UsersSenecaClient.Descriptor, Version1.UsersSenecaClient);
        this.register(Version1.UsersLambdaClient.Descriptor, Version1.UsersLambdaClient);
    }
    UsersFactory.Instance = new UsersFactory();
    return UsersFactory;
}(pip_services_runtime_node_1.ComponentFactory));
exports.UsersFactory = UsersFactory;
