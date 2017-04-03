"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const AccountsNullClientV1_1 = require("../version1/AccountsNullClientV1");
const AccountsMemoryClientV1_1 = require("../version1/AccountsMemoryClientV1");
const AccountsDirectClientV1_1 = require("../version1/AccountsDirectClientV1");
const AccountsHttpClientV1_1 = require("../version1/AccountsHttpClientV1");
const AccountsSenecaClientV1_1 = require("../version1/AccountsSenecaClientV1");
class AccountsFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(AccountsFactory.NullClientV1Descriptor, AccountsNullClientV1_1.AccountsNullClientV1);
        this.registerAsType(AccountsFactory.MemoryClientV1Descriptor, AccountsMemoryClientV1_1.AccountsMemoryClientV1);
        this.registerAsType(AccountsFactory.DirectClientV1Descriptor, AccountsDirectClientV1_1.AccountsDirectClientV1);
        this.registerAsType(AccountsFactory.HttpClientV1Descriptor, AccountsHttpClientV1_1.AccountsHttpClientV1);
        this.registerAsType(AccountsFactory.SenecaClientV1Descriptor, AccountsSenecaClientV1_1.AccountsSenecaClientV1);
    }
}
AccountsFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'factory', 'default', 'default', '1.0');
AccountsFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'null', 'default', '1.0');
AccountsFactory.MemoryClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'memory', 'default', '1.0');
AccountsFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'direct', 'default', '1.0');
AccountsFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'http', 'default', '1.0');
AccountsFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'client', 'seneca', 'default', '1.0');
exports.AccountsFactory = AccountsFactory;
//# sourceMappingURL=AccountsFactory.js.map