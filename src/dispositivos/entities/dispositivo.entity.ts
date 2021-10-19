import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Dispositivo{

    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private tipo: string;
    @Column()
    private nombre: string;
    @Column()
    private id_caracteristica: number;
   
    @Column ({default: true })
    isActive: boolean;
   

}