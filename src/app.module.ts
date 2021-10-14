import { Module } from '@nestjs/common';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { CaracteristicasModule } from './caracteristicas/caracteristicas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caracteristica } from './caracteristicas/entities/caracteristica.entity';
import { Dispositivo } from './dispositivos/entities/dispositivo.entity';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'augustoapp',
    entities: [Dispositivo,Caracteristica],
    synchronize: true,
  }),DispositivosModule, CaracteristicasModule],
  controllers: [],
  providers: [],
})


export class AppModule {}
