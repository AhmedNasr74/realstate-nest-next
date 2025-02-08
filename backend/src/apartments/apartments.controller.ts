import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApartmentsService} from './apartments.service';
import {CreateApartmentDto} from './dto/create-apartment.dto';
import {ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Apartment} from "./entities/apartment.entity";

const apartmentSchema = {
    "id": 1,
    unit_name: "Luxury Apartment",
    unit_number: 25004185,
    project: "Next Point",
    location: 'New York',
    price: 1350000.00,
    bedrooms: 2,
    bathrooms: 2
}

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}

    @ApiOperation({summary: 'Get all apartments'})
    @ApiQuery({ name: 'unit_name', required: false, type: String, description: 'Filter by unit name (LIKE %search%)' })
    @ApiQuery({ name: 'project', required: false, type: String, description: 'Filter by project (LIKE %search%)' })
    @ApiQuery({ name: 'unit_number', required: false, type: String, description: 'Unit Number 525' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination', example: 1 })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Limit per page', example: 10 })
    @ApiQuery({ name: 'sort_by', required: false,enum: ['unit_name', 'project', 'price'], description: 'Sort by field (e.g., unit_name, project)' })
    @ApiQuery({ name: 'order', required: false, enum: ['ASC', 'DESC'], description: 'Sort order (ASC or DESC)', example: 'ASC' })
    @ApiResponse({status: 200, description: 'List of all apartments', schema: {example: {data: [apartmentSchema]}}})
    @Get()
    async findAll(
        @Query('unit_name') unit_name?: string,
        @Query('unit_number') unit_number?: string,
        @Query('project') project?: string,
        @Query('page') page:number = 1,
        @Query('limit') limit:number = 10,
        @Query('sort_by') sort_by?: string,
        @Query('order') order: 'ASC' | 'DESC' = 'ASC',
    ) {
        return this.apartmentsService.findAll({
            unit_name,
            unit_number,
            project,
            page,
            limit,
            sort_by,
            order
        })
    }

    @Get(':id')
    @ApiOperation({summary: 'Get details of specific apartment'})
    @ApiResponse({status: 200, description: 'Show apartments details', schema: {example: {data: apartmentSchema}}})
    async findOne(@Param('id') id: string) {
        const apartment: Apartment = await this.apartmentsService.findOne(+id);
        return {data: apartment};
    }

    @Post()
    @ApiOperation({ summary: 'Create a new apartment' })
    @ApiResponse({
        status: 201,
        description: 'Apartment created successfully',
        schema: {
            example: {data: apartmentSchema},
        },
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid request data',
        schema: {
            example: {
                statusCode: 400,
                message: 'Validation failed',
                error: 'Bad Request',
            },
        },
    })
    @ApiBody({
        description: 'Apartment data',
        required: true,
        schema: {
            type: 'object',
            properties: {
                unit_name: { type: 'string', example: 'Luxury Apartment', description: 'Name of the apartment unit' },
                unit_number: { type: 'number', example: 207, description: 'Apartment unit number' },
                project: { type: 'string', example: 'Skyline Towers', description: 'Project name where the apartment is located' },
                location: { type: 'string', example: 'New York', description: 'Location of the apartment' },
                price: { type: 'number', example: 2500.75, description: 'Price of the apartment' },
                bedrooms: { type: 'number', example: 3, description: 'Number of bedrooms' },
                bathrooms: { type: 'number', example: 2, description: 'Number of bathrooms' },
            },
        },
    })
    async create(@Body() createApartmentDto: CreateApartmentDto) {
        const apartment: Apartment = await this.apartmentsService.create(createApartmentDto);
        return {data: apartment}
    }

}
