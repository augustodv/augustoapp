import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaracteristicasDto } from './dto/create-caracteristica.dto';
import { UpdateCaracteristicaDto } from './dto/update-caracteristica.dto';
import { Caracteristica } from './entities/caracteristica.entity';

@Injectable()
export class CaracteristicasService {
                  
    constructor( 
        @InjectRepository(Caracteristica)
        private caracteristicasrepository: Repository<Caracteristica>
    )

    {
    }
       
    findAll() {
        return this.caracteristicasrepository.find();
            }
  


    findOne(id: number) {
        return this.caracteristicasrepository.findOne(id);
    };

    create(CreateCaracteristicasDto: CreateCaracteristicasDto) {
        const caracteristica: Caracteristica = this.caracteristicasrepository.create(CreateCaracteristicasDto);
        return this.caracteristicasrepository.save(caracteristica);
    }   

    update(id: number, UpdateCaracteristicaDto: UpdateCaracteristicaDto) {
        this.caracteristicasrepository.update(id, UpdateCaracteristicaDto);
        return this.caracteristicasrepository.findOne(id);
      }
    
      remove(id: number) {
        this.caracteristicasrepository.delete(id);
        return `Fue eliminado el item #${id}`;
      }


}

