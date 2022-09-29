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
    url: process.env.DATABASE_URL,
    //host: 'localhost',
    //port: 5432,
    //username: 'postgres',
    //password: 'postgres',
    //database: 'augustoapp',
    entities: [Dispositivo,Caracteristica],
    synchronize: true,
   // ssl:{
     // rejectUnauthorized: false,
    //}
  }),DispositivosModule, CaracteristicasModule],
  controllers: [],
  providers: [],
})


export class AppModule {}
