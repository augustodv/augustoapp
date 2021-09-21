import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { Dispositivos } from './dispositivos';
import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';


@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) {}

    @Get()
    findAll()  {
      return this.dispositivosService.findAll();
      }


    @Get (':id')
    findOne (@Param() params){
        return this.dispositivosService.findOne(params.id);

    }


    @Post()
    create(@Body() CreateDispositivoDto: CreateDispositivoDto){
        return this.dispositivosService.create(CreateDispositivoDto)
    }


    @Delete(':id')
 remove(@Param('id') id: number) : void {
   return this.dispositivosService.remove(id);
 }

 @Put(':id')
 update(@Param('id') id: number, @Body() UpdateDispositivoDto: UpdateDispositivoDto) : Dispositivos{
   return this.dispositivosService.update(id, UpdateDispositivoDto);
 }



}
