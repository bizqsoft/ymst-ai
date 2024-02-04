import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enginx {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', collation: 'utf8_general_ci', nullable: true, length: 100,default:null })
    kanban: string;

    @Column({ type: 'varchar', collation: 'utf8_general_ci', nullable: true, length: 100,default:null })
    partno: string;

    @Column({ type: 'varchar', collation: 'utf8_general_ci', nullable: true, length: 100,default:null})
    lotsize: string;

    @Column({ type: 'varchar', collation: 'utf8_general_ci', nullable: true, length: 100,default:null })
    predict: string;

    @Column({ type: 'int', collation: 'utf8_general_ci', width: 1, default:0 })
    sensor_no_1: number;

    @Column({ type: 'int', collation: 'utf8_general_ci', width: 1, default:0 })
    sensor_no_2: number;
}
