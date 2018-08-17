let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { AccountsMemoryPersistence } from 'pip-services-accounts-node';
import { AccountsController } from 'pip-services-accounts-node';
import { IAccountsClientV1 } from '../../src/version1/IAccountsClientV1';
import { AccountsDirectClientV1 } from '../../src/version1/AccountsDirectClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

suite('AccountsDirectClientV1', ()=> {
    let client: AccountsDirectClientV1;
    let fixture: AccountsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AccountsMemoryPersistence();
        let controller = new AccountsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-accounts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-accounts', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AccountsDirectClientV1();
        client.setReferences(references);

        fixture = new AccountsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
