let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';

let UsersMemoryPersistence = require('pip-services-users/lib/src/persistence/UsersMemoryPersistence').UsersMemoryPersistence;
let UsersController = require('pip-services-users/lib/src/logic/UsersController').UsersController;
let UsersRestService = require('pip-services-users/lib/src/services/version1/UsersRestService').UsersRestService;

import { UsersRestClient } from '../../src/version1/UsersRestClient';
import { UsersClientFixture } from './UsersClientFixture';

let restConfig = ComponentConfig.fromTuples(
    'endpoint.protocol', 'http',
    'endpoint.host', 'localhost',
    'endpoint.port', 3000
);

suite('UsersRestClient', ()=> {    
    let db = new UsersMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new UsersController();
    ctrl.configure(new ComponentConfig());

    let service = new UsersRestService();
    service.configure(restConfig);

    let client = new UsersRestClient();
    client.configure(restConfig);

    let components = ComponentSet.fromComponents(db, ctrl, service, client);
    let fixture = new UsersClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        LifeCycleManager.close(components, done);
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});