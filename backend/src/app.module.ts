import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ApartmentsModule} from './apartments/apartments.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { config } from 'dotenv';

config();
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '3306'),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        ApartmentsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
