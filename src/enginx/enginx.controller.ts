import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnginxService } from './enginx.service';
import { CreateEnginxDto } from './dto/create-enginx.dto';
import { UpdateEnginxDto } from './dto/update-enginx.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('system api')
@Controller('enginx')
export class EnginxController {
  constructor(private readonly enginxService: EnginxService) {}

  @Post()
  @ApiOperation({ summary: 'Create data' })
  create(@Body() createEnginxDto: CreateEnginxDto) {
    return this.enginxService.create(createEnginxDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All data' })
  findAll() {
    return this.enginxService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get data by id' })
  findOne(@Param('id') id: string) {
    return this.enginxService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update data' })
  update(@Param('id') id: string, @Body() updateEnginxDto: UpdateEnginxDto) {
    return this.enginxService.update(+id, updateEnginxDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete data by id' })
  remove(@Param('id') id: string) {
    return this.enginxService.remove(+id);
  }
}
