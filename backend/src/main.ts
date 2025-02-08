import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {GlobalExceptionFilter} from "./global-exception.filter";
import {BadRequestException, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Nawy Real-State')
        .setDescription('API documentation for managing apartments')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/docs', app, document);

    app.useGlobalFilters(new GlobalExceptionFilter());

    app.useGlobalPipes(new ValidationPipe({
        exceptionFactory: (errors) => {
            const firstError:any = errors[0];
            const field:any = firstError.property;
            const firstErrorMessage = Object.values(firstError.constraints)[0];

            return new BadRequestException({
                field,
                message: firstErrorMessage,
            });
        },
    }));

    app.enableCors({
        origin: '*',
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });

    await app.listen(process.env.PORT ?? 5000);
}

bootstrap().then(() => {
    console.log('App bootstrapped!')
});
