import { ComponentFactory } from 'pip-services-runtime-node';
import { DefaultFactory } from 'pip-services-runtime-node';

let Version1 = require('../version1');

export class UsersFactory extends ComponentFactory {
	public static Instance: UsersFactory = new UsersFactory();
	
	constructor() {
		super(DefaultFactory.Instance);

		this.register(Version1.UsersRestClient.Descriptor, Version1.UsersRestClient);
		this.register(Version1.UsersSenecaClient.Descriptor, Version1.UsersSenecaClient);
		this.register(Version1.UsersLambdaClient.Descriptor, Version1.UsersLambdaClient);
	}
	
}
