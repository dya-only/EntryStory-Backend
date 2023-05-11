import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  content: string;
}