import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';


@Injectable()
export class DispositivosService {

 

    constructor(
        @InjectRepository(Dispositivo)
        private dispositivosrepository: Repository<Dispositivo>
    ) {
    }



    findAll() {
        return this.dispositivosrepository.find({relations:['caracteirtica']});
    }

    findOne(id: number) {
        return this.dispositivosrepository.findOne(id,{relations:['caracteirtica']});
    };

    async create(CreateDispositivoDto: CreateDispositivoDto) {
        const dispositivo: Dispositivo = await this.dispositivosrepository.save(this.dispositivosrepository.create(CreateDispositivoDto));
        return this.findOne(dispositivo.id);
       
    }

    update(id: number, UpdateDispositivoDto: UpdateDispositivoDto) {
        this.dispositivosrepository.update(id, UpdateDispositivoDto);
        return this.dispositivosrepository.findOne(id);
      }
    
      remove(id: number) {
        this.dispositivosrepository.delete(id);
        return `Fue eliminado el item #${id}`;
      }


    

}




/*



x

remove(id: number): void {
    const dispositivo = this.findOne(id);
    const pos = this.dispositivos.indexOf(dispositivo);
    this.dispositivos.splice(pos, 1);

}

update(id: number, UpdateDispositivoDto: UpdateDispositivoDto): Dispositivos {
    const dispositivo = this.findOne(id);
    dispositivo.nombre= UpdateDispositivoDto.nombre;
    dispositivo.tipo= UpdateDispositivoDto.tipo;
    dispositivo.id_caracteristica= UpdateDispositivoDto.id_caracteristica;
    return dispositivo;
   }
*/


