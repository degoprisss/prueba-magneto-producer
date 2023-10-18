import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ProducerDto {
    @IsString()
    @ApiProperty()
    user: string;
}