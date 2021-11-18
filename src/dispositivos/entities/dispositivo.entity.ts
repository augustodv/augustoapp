
import { Caracteristica } from "src/caracteristicas/entities/caracteristica.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Dispositivo{

    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public tipo: string;
    @Column()
    public nombre: string;
    @Column()
    public id_caracteristica: number;

    @Column ({default: true })
    isActive: boolean;
   
    @ManyToOne(() => Caracteristica, id_caracteristica => id_caracteristica.dispositivo)
    @JoinColumn({name: 'id_caracteristica'})
    caracteirtica : Caracteristica;
}