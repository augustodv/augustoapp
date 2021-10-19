import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Caracteristica{
    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private valor: string;
   
    @Column ({default: true })
    isActive: boolean;
   
}