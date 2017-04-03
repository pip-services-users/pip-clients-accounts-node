import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { AccountsNullClientV1 } from '../version1/AccountsNullClientV1';
import { AccountsMemoryClientV1 } from '../version1/AccountsMemoryClientV1';
import { AccountsDirectClientV1 } from '../version1/AccountsDirectClientV1';
import { AccountsHttpClientV1 } from '../version1/AccountsHttpClientV1';
import { AccountsSenecaClientV1 } from '../version1/AccountsSenecaClientV1';

export class AccountsFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-accounts', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-accounts', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('pip-services-accounts', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-accounts', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-accounts', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-accounts', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AccountsFactory.NullClientV1Descriptor, AccountsNullClientV1);
		this.registerAsType(AccountsFactory.MemoryClientV1Descriptor, AccountsMemoryClientV1);
		this.registerAsType(AccountsFactory.DirectClientV1Descriptor, AccountsDirectClientV1);
		this.registerAsType(AccountsFactory.HttpClientV1Descriptor, AccountsHttpClientV1);
		this.registerAsType(AccountsFactory.SenecaClientV1Descriptor, AccountsSenecaClientV1);
	}
	
}
