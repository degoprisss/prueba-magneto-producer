import { IProducer } from "../../interfaces/IProducer";

export abstract class IProducerUseCases {
    abstract createProducer(producer: IProducer): Promise<IProducer>;
    abstract getProducer(): Promise<IProducer[]>;
}