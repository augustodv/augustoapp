import { Injectable } from '@nestjs/common';
import { Caracteristicas } from './caracteristicas';
import { CreateCaracteristicasDto } from './dto/create-caracteristica.dto';
import { UpdateCaracteristicaDto } from './dto/update-caracteristica.dto';

@Injectable()
export class CaracteristicasService {

             
    private caracteristicas = [
        {
            "id": 1,
            "valor": "Switch",
                       
        },
        {
            "id": 2,
            "valor": "Router",
            
           
        }
 
    ];
         


    findAll() {
        return this.caracteristicas;
            }
  


    findOne(id: any) {
        return this.caracteristicas.find(function(caracteristicas){
            return caracteristicas.id == id;
    });
}


create(CreateCaracteristicasDto: CreateCaracteristicasDto) {
    let nextId = this.caracteristicas[this.caracteristicas.length-1].id+1;
    let caracteristica = {
        "id": nextId,
        ...CreateCaracteristicasDto
    }
   this.caracteristicas.push(caracteristica);
   return this.caracteristicas;
}



remove(id: number): void {
    const caracteristica = this.findOne(id);
    const pos = this.caracteristicas.indexOf(caracteristica);
    this.caracteristicas.splice(pos, 1);

}

update(id: number, UpdateCaracteristicaDto: UpdateCaracteristicaDto): Caracteristicas {
    const caracteristica = this.findOne(id);
    caracteristica.valor= UpdateCaracteristicaDto.valor;
   
    return caracteristica;
   } 




}
