import { Dispositivo } from "src/dispositivos/entities/dispositivo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Caracteristica{
    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private valor: string;
   
    @OneToMany(() => Dispositivo, Dispositivo => Dispositivo.caracteirtica)
    dispositivo: Dispositivo[];
}