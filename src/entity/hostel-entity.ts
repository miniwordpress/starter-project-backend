import { Entity, Column, PrimaryGeneratedColumn, Double } from "typeorm";

@Entity()
export class HostelDetail {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  hostelName: string;

  @Column()
  hostelType: string;

  @Column()
  address: string;

  @Column()
  tel: string;
  
  
  @Column()
  email: string;

  @Column()
  price: number;
  
  @Column()
  description: string;
}
