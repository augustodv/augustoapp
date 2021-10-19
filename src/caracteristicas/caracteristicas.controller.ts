import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CaracteristicasService } from './caracteristicas.service';
import { CreateCaracteristicasDto } from './dto/create-caracteristica.dto';
import { UpdateCaracteristicaDto } from './dto/update-caracteristica.dto';



@Controller('caracteristicas')
export class CaracteristicasController {
    constructor(private readonly CaracteristicasService: CaracteristicasService) { }

    @Get()
    findAll() {
        return this.CaracteristicasService.findAll();
    }


    @Get(':id')
    findOne(@Param() params) {
        return this.CaracteristicasService.findOne(params.id);

    }


    @Post()
    create(@Body() CreateCaracteristicasDto: CreateCaracteristicasDto) {
        return this.CaracteristicasService.create(CreateCaracteristicasDto)
    }


    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.CaracteristicasService.remove(+id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() UpdateCaracteristicaDto: UpdateCaracteristicaDto): UpdateCaracteristicaDto{
        return this.CaracteristicasService.update(+id, UpdateCaracteristicaDto);
    }



}