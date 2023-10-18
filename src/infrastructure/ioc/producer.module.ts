import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { IProducerUseCases } from "src/application/ports/UseCases/ProducerUseCases/IProducerUseCases";
import { ProducerUseCases } from "src/application/use-cases/ProcuderUseCases/procuderUseCases";
import { ProducerController } from "src/presentation/controllers/producer.controller";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'consumer-Integration',
                transport: Transport.RMQ,
                options: {
                    urls: [`amqp://${process.env.RABBITMQ_HOST || 'rabbitmq'}:${process.env.RABBITMQ_PORT || 5672}`],
                    queue: 'cats_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
    ],
    providers: [
        {
            provide: IProducerUseCases,
            useClass: ProducerUseCases,
        }
    ],
    controllers: [ProducerController],
    exports: [IProducerUseCases],
})

export class ProducerModule { }