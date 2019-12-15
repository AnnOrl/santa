import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Results {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 45
    })
    index: string;

    @Column({
        length: 45
    })
    index_who: string;

    @Column({
        length: 45
    })
    index_whom: string;

    @Column({
        length: 45
    })
    index_room: string;
}
