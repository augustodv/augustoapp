
import { Caracteristica } from "src/caracteristicas/entities/caracteristica.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Dispositivo{

    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    private tipo: string;
    @Column()
    private nombre: string;
    @Column()
    private id_caracteristica: number;
   
    @Column ({default: true })
    isActive: boolean;
   
    @ManyToOne(() => Caracteristica, id_caracteristica => id_caracteristica.dispositivo)
    @JoinColumn({name: 'id_caracteristica'})
    caracteirtica : Caracteristica;
}