import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('question')
export class Question extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {type: 'varchar'}
    )
    question: string;
}