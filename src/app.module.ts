import { Module } from '@nestjs/common';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { CaracteristicasModule } from './caracteristicas/caracteristicas.module';

@Module({
  imports: [DispositivosModule, CaracteristicasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
