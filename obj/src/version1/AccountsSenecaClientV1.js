"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class AccountsSenecaClientV1 extends pip_services_net_node_1.CommandableSenecaClient {
    constructor(config) {
        super('accounts');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getAccounts(correlationId, filter, paging, callback) {
        this.callCommand('get_accounts', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getAccountById(correlationId, id, callback) {
        this.callCommand('get_account_by_id', correlationId, {
            account_id: id
        }, callback);
    }
    getAccountByLogin(correlationId, login, callback) {
        this.callCommand('get_account_by_login', correlationId, {
            login: login
        }, callback);
    }
    getAccountByIdOrLogin(correlationId, idOrLogin, callback) {
        this.callCommand('get_account_by_id_or_login', correlationId, {
            id_or_login: idOrLogin
        }, callback);
    }
    createAccount(correlationId, account, callback) {
        this.callCommand('create_account', correlationId, {
            account: account
        }, callback);
    }
    updateAccount(correlationId, account, callback) {
        this.callCommand('update_account', correlationId, {
            account: account
        }, callback);
    }
    deleteAccountById(correlationId, id, callback) {
        this.callCommand('delete_account_by_id', correlationId, {
            account_id: id
        }, callback);
    }
}
exports.AccountsSenecaClientV1 = AccountsSenecaClientV1;
//# sourceMappingURL=AccountsSenecaClientV1.js.map