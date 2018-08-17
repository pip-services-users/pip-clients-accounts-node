"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_components_node_1 = require("pip-services-components-node");
const AccountsNullClientV1_1 = require("../version1/AccountsNullClientV1");
const AccountsMemoryClientV1_1 = require("../version1/AccountsMemoryClientV1");
const AccountsDirectClientV1_1 = require("../version1/AccountsDirectClientV1");
const AccountsHttpClientV1_1 = require("../version1/AccountsHttpClientV1");
const AccountsSenecaClientV1_1 = require("../version1/AccountsSenecaClientV1");
class AccountsClientFactory extends pip_services_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(AccountsClientFactory.NullClientV1Descriptor, AccountsNullClientV1_1.AccountsNullClientV1);
        this.registerAsType(AccountsClientFactory.MemoryClientV1Descriptor, AccountsMemoryClientV1_1.AccountsMemoryClientV1);
        this.registerAsType(AccountsClientFactory.DirectClientV1Descriptor, AccountsDirectClientV1_1.AccountsDirectClientV1);
        this.registerAsType(AccountsClientFactory.HttpClientV1Descriptor, AccountsHttpClientV1_1.AccountsHttpClientV1);
        this.registerAsType(AccountsClientFactory.SenecaClientV1Descriptor, AccountsSenecaClientV1_1.AccountsSenecaClientV1);
    }
}
AccountsClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'factory', 'default', 'default', '1.0');
AccountsClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'null', 'default', '1.0');
AccountsClientFactory.MemoryClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'memory', 'default', '1.0');
AccountsClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'direct', 'default', '1.0');
AccountsClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'http', 'default', '1.0');
AccountsClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'seneca', 'default', '1.0');
exports.AccountsClientFactory = AccountsClientFactory;
//# sourceMappingURL=AccountsClientFactory.js.map