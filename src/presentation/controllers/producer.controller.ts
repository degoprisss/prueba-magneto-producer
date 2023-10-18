import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProducerUseCases } from "src/application/ports/UseCases/ProducerUseCases/IProducerUseCases";
import { ProducerDto } from "../view-models/producer.dto";

@Controller("producer")
@ApiTags('Producer')
export class ProducerController {

    constructor(private readonly producerUseCase: IProducerUseCases) { }

    @Post('create')
    async createProducer(@Body() data: ProducerDto) {
        return await this.producerUseCase.createProducer(data);
    }

    @Get()
    async getProducer() {
        return await this.producerUseCase.getProducer();
    }
}