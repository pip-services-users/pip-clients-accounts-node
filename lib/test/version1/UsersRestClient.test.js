"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var UsersMemoryPersistence = require('pip-services-users/lib/src/persistence/UsersMemoryPersistence').UsersMemoryPersistence;
var UsersController = require('pip-services-users/lib/src/logic/UsersController').UsersController;
var UsersRestService = require('pip-services-users/lib/src/services/version1/UsersRestService').UsersRestService;
var UsersRestClient_1 = require('../../src/version1/UsersRestClient');
var UsersClientFixture_1 = require('./UsersClientFixture');
var restConfig = pip_services_runtime_node_2.ComponentConfig.fromTuples('endpoint.protocol', 'http', 'endpoint.host', 'localhost', 'endpoint.port', 3000);
suite('UsersRestClient', function () {
    var db = new UsersMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new UsersController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new UsersRestService();
    service.configure(restConfig);
    var client = new UsersRestClient_1.UsersRestClient();
    client.configure(restConfig);
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, service, client);
    var fixture = new UsersClientFixture_1.UsersClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.close(components, done);
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('CRUD Operations', function (done) {
        fixture.testCrudOperations(done);
    });
});
