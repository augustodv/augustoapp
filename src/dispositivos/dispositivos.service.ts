import { Injectable } from '@nestjs/common';
import { Dispositivos } from './dispositivos';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';


@Injectable()
export class DispositivosService {
    [x: string]: any;
 

         
    private dispositivos = [
        {
            "id": 1,
            "tipo": "Switch",
            "nombre": "Tplink SG1100",
            "id_caracteristica": 12,
           
        },
        {
            "id": 2,
            "tipo": "Switch",
            "nombre": "Tplink SG1200",
            "id_caracteristica": 22,
           
        }
 
    ];
         
    findAll() {
        return this.dispositivos;
            }
  
    findOne(id: any) {
        return this.dispositivos.find(function(dispositivos){
            return dispositivos.id == id;
    });
}

create(CreateDispositivoDto: CreateDispositivoDto) {
    let nextId = this.dispositivos[this.dispositivos.length-1].id+1;
    let dispositivo = {
        "id": nextId,
        ...CreateDispositivoDto
    }
   this.dispositivos.push(dispositivo);
   return this.dispositivos;
}

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

 }

