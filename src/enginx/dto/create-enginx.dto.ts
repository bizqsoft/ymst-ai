import { ApiProperty ,ApiPropertyOptional} from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
export class CreateEnginxDto {

 @ApiProperty()
  //@IsNotEmpty()
  kanban: string;

  @ApiProperty()
  //@IsNotEmpty()
  partno: string;


  @ApiProperty()
  //@IsNotEmpty()
  lotsize: string;


  @ApiProperty()
 // @IsNotEmpty()
  predict: string;

  @ApiProperty()
 // @IsNotEmpty()
  sensor_no_1: number;

  @ApiProperty()
  //@IsNotEmpty()
  sensor_no_2: number;



}
