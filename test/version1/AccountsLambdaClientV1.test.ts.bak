let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { DynamicMap } from 'pip-services-runtime-node';

import { UsersLambdaClient } from '../../src/version1/UsersLambdaClient';
import { UsersClientFixture } from './UsersClientFixture';

let options = new DynamicMap(require('../../../config/config'));
let clientOptions = options.get('clients');
clientOptions = _.isArray(clientOptions) ? clientOptions : [clientOptions];
let lambdaOptions = _.find(clientOptions, (o) => { 
    return (o.type || (o.identity || {}).type) == 'lambda'; 
});

suite('UsersLambdaClient', ()=> {        
    // Skip test if lambda is not configured
    if (lambdaOptions == null) return; 

    let config = ComponentConfig.fromValue(lambdaOptions);
    let client = new UsersLambdaClient();
    client.configure(config);
     
    let fixture = new UsersClientFixture(client);

    suiteSetup((done) => {
        client.link(new ComponentSet());
        client.open(done);
    });
    
    suiteTeardown((done) => {
        client.close(done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});