import { PartialType } from '@nestjs/mapped-types';
import { CreateEnginxDto } from './create-enginx.dto';

export class UpdateEnginxDto extends PartialType(CreateEnginxDto) {}
