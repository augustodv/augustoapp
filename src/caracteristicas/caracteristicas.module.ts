import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicasController } from './caracteristicas.controller';
import { CaracteristicasService } from './caracteristicas.service';
import { Caracteristica } from './entities/caracteristica.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Caracteristica])],
    controllers: [CaracteristicasController],
    providers:[CaracteristicasService]


})
export class CaracteristicasModule {}
