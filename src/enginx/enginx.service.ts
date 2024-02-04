import { Injectable } from '@nestjs/common';
import { CreateEnginxDto } from './dto/create-enginx.dto';
import { UpdateEnginxDto } from './dto/update-enginx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { isNotEmpty } from 'class-validator';
import { Repository } from 'typeorm';
import { Enginx } from './entities/enginx.entity';

@Injectable()
export class EnginxService {
  constructor(
    @InjectRepository(Enginx)
    private readonly repository: Repository<Enginx>,
  ) {}

  async create(createDto: CreateEnginxDto) {
    try {
      const result = await this.repository.save(createDto);

      return {
        message: 'Created data success.',
        data: { ...result },
      };
    } catch (error) {
      return {
        message: 'Created data failed.',
        error,
      };
    }
  }


  async findAll() {
    const result = await this.repository.find();
    if (isNotEmpty(result)) return result;
    return { message: 'No data found' };
  }

  async findOne(id: number) {
    const result = await this.repository.findOne({
      where: { id },
    });
    if (isNotEmpty(result)) return result;
    return { message: 'No data found' };
  }

  async update(id: number, updateDto: UpdateEnginxDto) {
    const result = await this.repository.findOne({
      where: { id },
    });
    if (isNotEmpty(result)) {
      await this.repository.update(id, updateDto);
      return { message: 'Update data success.' };
    }
    return { message: 'Data not found.' };
  }

  async remove(id: number): Promise<any> {
    const result = await this.repository.findOne({
      where: { id },
    });
    if (isNotEmpty(result)) {
      await this.repository.delete(id);
      return { message: 'Delete data success.' };
    }
    return { message: 'Data not found.' };
  }
}
