"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var UsersMemoryPersistence = require('pip-services-users/lib/src/persistence/UsersMemoryPersistence').UsersMemoryPersistence;
var UsersController = require('pip-services-users/lib/src/logic/UsersController').UsersController;
var UsersSenecaService = require('pip-services-users/lib/src/services/version1/UsersSenecaService').UsersSenecaService;
var UsersSenecaClient_1 = require('../../src/version1/UsersSenecaClient');
var UsersClientFixture_1 = require('./UsersClientFixture');
suite('UsersSenecaClient', function () {
    var db = new UsersMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new UsersController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new UsersSenecaService();
    service.configure(new pip_services_runtime_node_2.ComponentConfig());
    var client = new UsersSenecaClient_1.UsersSenecaClient();
    client.configure(new pip_services_runtime_node_2.ComponentConfig());
    var seneca = new pip_services_runtime_node_4.SenecaAddon();
    seneca.configure(new pip_services_runtime_node_2.ComponentConfig());
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    var fixture = new UsersClientFixture_1.UsersClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        seneca.getSeneca().close(function () {
            pip_services_runtime_node_3.LifeCycleManager.close(components, done);
        });
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('CRUD Operations', function (done) {
        fixture.testCrudOperations(done);
    });
});
