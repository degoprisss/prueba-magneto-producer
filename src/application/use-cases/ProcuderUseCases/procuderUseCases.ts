import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { IProducerUseCases } from "src/application/ports/UseCases/ProducerUseCases/IProducerUseCases";
import { IProducer } from "src/application/ports/interfaces/IProducer";

@Injectable()
export class ProducerUseCases extends IProducerUseCases {

    constructor(
        @Inject("consumer-Integration") private consumerMicroservice: ClientProxy
    ) {
        super();
    }

    async createProducer(producer: IProducer): Promise<IProducer> {
        return await firstValueFrom(this.consumerMicroservice.send("createProducer", producer));
    }

    async getProducer(): Promise<IProducer[]> {
        return await firstValueFrom(this.consumerMicroservice.send("getProducer", ""));
    }
}