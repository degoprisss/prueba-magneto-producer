import { ApiProperty } from "@nestjs/swagger";

export class producerDto {
    @ApiProperty()
    user: string;
}