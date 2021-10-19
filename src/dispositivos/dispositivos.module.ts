import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivosController } from './dispositivos.controller';
import { DispositivosService } from './dispositivos.service';
import { Dispositivo } from './entities/dispositivo.entity';

    @Module({
      imports: [TypeOrmModule.forFeature([Dispositivo])],
        controllers: [DispositivosController],
        providers: [DispositivosService]
      })



export class DispositivosModule {
  
}
