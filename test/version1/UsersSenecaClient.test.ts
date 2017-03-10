let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';
import { SenecaAddon } from 'pip-services-runtime-node';

let UsersMemoryPersistence = require('pip-services-users/lib/src/persistence/UsersMemoryPersistence').UsersMemoryPersistence;
let UsersController = require('pip-services-users/lib/src/logic/UsersController').UsersController;
let UsersSenecaService = require('pip-services-users/lib/src/services/version1/UsersSenecaService').UsersSenecaService;

import { UsersSenecaClient } from '../../src/version1/UsersSenecaClient';
import { UsersClientFixture } from './UsersClientFixture';

suite('UsersSenecaClient', ()=> {        
    let db = new UsersMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new UsersController();
    ctrl.configure(new ComponentConfig());

    let service = new UsersSenecaService();
    service.configure(new ComponentConfig());

    let client = new UsersSenecaClient();
    client.configure(new ComponentConfig());

    let seneca = new SenecaAddon();
    seneca.configure(new ComponentConfig());

    let components = ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    let fixture = new UsersClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        seneca.getSeneca().close(() => {
            LifeCycleManager.close(components, done);
        });
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});