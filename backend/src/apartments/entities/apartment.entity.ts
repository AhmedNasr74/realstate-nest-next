import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apartments')
export class Apartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit_name: string;

    @Column()
    unit_number: number;

    @Column()
    project: string;

    @Column()
    location: string;

    @Column()
    price: number;

    @Column()
    bedrooms: number;

    @Column()
    bathrooms: number;
}
