import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateApartmentDto {
    @ApiProperty({ example: 'Luxury Apartment', description: 'Name of the apartment unit' })
    @IsString()
    unit_name: string;

    @ApiProperty({ example: 101, description: 'Apartment unit number' })
    @IsNumber()
    unit_number: number;

    @ApiProperty({ example: 'Badya', description: 'Project name where the apartment is located' })
    @IsString()
    project: string;

    @ApiProperty({ example: 'Giza', description: 'Location of the apartment' })
    @IsString()
    location: string;

    @ApiProperty({ example: 2000000, description: 'Price of the apartment' })
    @IsNumber()
    @Min(0)
    price: number;

    @ApiProperty({ example: 3, description: 'Number of bedrooms' })
    @IsNumber()
    @Min(1)
    @Max(10)
    bedrooms: number;

    @ApiProperty({ example: 2, description: 'Number of bathrooms' })
    @IsNumber()
    @Min(1)
    @Max(5)
    bathrooms: number;
}
