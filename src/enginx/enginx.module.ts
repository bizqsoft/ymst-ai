import { Module } from '@nestjs/common';
import { EnginxService } from './enginx.service';
import { EnginxController } from './enginx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enginx } from './entities/enginx.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enginx])],
  controllers: [EnginxController],
  providers: [EnginxService],
  exports:[EnginxService],
})
export class EnginxModule {}
