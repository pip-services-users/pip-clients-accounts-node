import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';
export declare class AccountsClientFactory extends Factory {
    static Descriptor: Descriptor;
    static NullClientV1Descriptor: Descriptor;
    static MemoryClientV1Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    static SenecaClientV1Descriptor: Descriptor;
    constructor();
}
