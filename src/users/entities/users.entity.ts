import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  id: string;
  
  @Column()
  pw: string;

  @Column()
  itype: string;
}