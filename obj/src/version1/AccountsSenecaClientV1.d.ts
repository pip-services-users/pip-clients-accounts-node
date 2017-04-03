import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';
import { AccountV1 } from './AccountV1';
import { IAccountsClientV1 } from './IAccountsClientV1';
export declare class AccountsSenecaClientV1 extends CommandableSenecaClient implements IAccountsClientV1 {
    constructor(config?: any);
    getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<AccountV1>) => void): void;
    getAccountById(correlationId: string, id: string, callback: (err: any, account: AccountV1) => void): void;
    getAccountByLogin(correlationId: string, login: string, callback: (err: any, account: AccountV1) => void): void;
    getAccountByIdOrLogin(correlationId: string, idOrLogin: string, callback: (err: any, account: AccountV1) => void): void;
    createAccount(correlationId: string, account: AccountV1, callback: (err: any, account: AccountV1) => void): void;
    updateAccount(correlationId: string, account: AccountV1, callback: (err: any, account: AccountV1) => void): void;
    deleteAccountById(correlationId: string, id: string, callback: (err: any, account: AccountV1) => void): void;
}
