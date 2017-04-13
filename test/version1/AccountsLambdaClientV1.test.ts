import { YamlConfigReader } from 'pip-services-commons-node';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';
import { AccountsLambdaClientV1 } from '../../src/version1/AccountsLambdaClientV1';

suite('AccountsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: AccountsLambdaClientV1;
    let fixture: AccountsClientFixtureV1;

    setup((done) => {
        client = new AccountsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new AccountsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});