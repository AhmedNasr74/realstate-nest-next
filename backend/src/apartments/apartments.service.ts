import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateApartmentDto} from './dto/create-apartment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Apartment} from "./entities/apartment.entity";
import {Repository} from "typeorm";
import {SelectQueryBuilder} from "typeorm/query-builder/SelectQueryBuilder";

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartment)
        private readonly apartmentRepository: Repository<Apartment>,
    ) {
    }

    create(createApartmentDto: CreateApartmentDto) {
        const apartment = this.apartmentRepository.create(createApartmentDto);
        return this.apartmentRepository.save(apartment);
    }

    async findAll({unit_name, unit_number, project, page, limit, sort_by, order}): Promise<{
        data: Apartment[],
        total: number,
        page: number,
        limit: number
    }> {
        const query: SelectQueryBuilder<Apartment> = this.apartmentRepository.createQueryBuilder('apartments')
        page = parseInt(page)

        limit = parseInt(limit)

        if (unit_name) {
            query.andWhere('apartments.unit_name LIKE :unit_name', {unit_name: `%${unit_name}%`})
        }

        if (unit_number) {
            query.andWhere('apartments.unit_number = :unit_number', {unit_number})
        }

        if (project) {
            query.andWhere('apartments.project LIKE :project', {project: `%${project}%`})
        }

        if (sort_by) {
            query.orderBy(`apartments.${sort_by}`, order || 'ASC');
        }
        const total = await query.getCount();
        query.skip((page - 1) * limit).take(limit);

        const data = await query.getMany();

        return {data, total, page, limit};
    }

    async findOne(id: number): Promise<Apartment> {
        const apartment = await this.apartmentRepository.findOne({where: {id}});
        if (!apartment) {
            throw new NotFoundException({error: 'Apartment Not Found!'})
        }
        return apartment;
    }
}
