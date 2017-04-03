let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { AccountsMemoryPersistence } from 'pip-services-accounts-node';
import { AccountsController } from 'pip-services-accounts-node';
import { AccountsSenecaServiceV1 } from 'pip-services-accounts-node';
import { IAccountsClientV1 } from '../../src/version1/IAccountsClientV1';
import { AccountsSenecaClientV1 } from '../../src/version1/AccountsSenecaClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('AccountsSenecaClient', () => {
    let service: AccountsSenecaServiceV1;
    let client: AccountsSenecaClientV1;
    let fixture: AccountsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AccountsMemoryPersistence();
        let controller = new AccountsController();

        service = new AccountsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-accounts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-accounts', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-accounts', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new AccountsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new AccountsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
