import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    deleteAt: Date;
}