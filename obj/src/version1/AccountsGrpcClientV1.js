"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let services = require('../../../src/protos/accounts_v1_grpc_pb');
let messages = require('../../../src/protos/accounts_v1_pb');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const AccountGrpcConverterV1_1 = require("./AccountGrpcConverterV1");
class AccountsGrpcClientV1 extends pip_services3_grpc_node_1.GrpcClient {
    constructor() {
        super(services.AccountsClient);
    }
    getAccounts(correlationId, filter, paging, callback) {
        let request = new messages.AccountPageRequest();
        paging = paging || new pip_services3_commons_node_1.PagingParams();
        let pagingParams = new messages.PagingParams();
        pagingParams.setSkip(paging.skip);
        pagingParams.setTake(paging.take);
        pagingParams.setTotal(paging.total);
        request.setPaging(pagingParams);
        AccountGrpcConverterV1_1.AccountGrpcConverterV1.setMap(request.getFilterMap(), filter);
        let timing = this.instrument(correlationId, 'accounts.get_accounts');
        this.call('get_accounts', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccountPage(response.getPage())
                : null;
            callback(err, result);
        });
    }
    getAccountById(correlationId, accountId, callback) {
        let request = new messages.AccountIdRequest();
        request.setAccountId(accountId);
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id');
        this.call('get_account_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
    getAccountByLogin(correlationId, login, callback) {
        let request = new messages.AccountLoginRequest();
        request.setLogin(login);
        let timing = this.instrument(correlationId, 'accounts.get_account_by_login');
        this.call('get_account_by_login', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
    getAccountByIdOrLogin(correlationId, idOrLogin, callback) {
        let request = new messages.AccountLoginRequest();
        request.setLogin(idOrLogin);
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');
        this.call('get_account_by_id_or_login', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
    createAccount(correlationId, account, callback) {
        let accountObj = AccountGrpcConverterV1_1.AccountGrpcConverterV1.fromAccount(account);
        let request = new messages.AccountObjectRequest();
        request.setAccount(accountObj);
        let timing = this.instrument(correlationId, 'accounts.create_account');
        this.call('create_account', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
    updateAccount(correlationId, account, callback) {
        let accountObj = AccountGrpcConverterV1_1.AccountGrpcConverterV1.fromAccount(account);
        let request = new messages.AccountObjectRequest();
        request.setAccount(accountObj);
        let timing = this.instrument(correlationId, 'accounts.update_account');
        this.call('update_account', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
    deleteAccountById(correlationId, accountId, callback) {
        let request = new messages.AccountIdRequest();
        request.setAccountId(accountId);
        let timing = this.instrument(correlationId, 'accounts.delete_account_by_id');
        this.call('delete_account_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = AccountGrpcConverterV1_1.AccountGrpcConverterV1.toError(response.error);
            let result = response
                ? AccountGrpcConverterV1_1.AccountGrpcConverterV1.toAccount(response.getAccount())
                : null;
            callback(err, result);
        });
    }
}
exports.AccountsGrpcClientV1 = AccountsGrpcClientV1;
//# sourceMappingURL=AccountsGrpcClientV1.js.map