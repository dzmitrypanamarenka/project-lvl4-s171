import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;

}

export const us = () => {
  console.log('hui')
};
