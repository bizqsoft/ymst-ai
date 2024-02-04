import { Test, TestingModule } from '@nestjs/testing';
import { EnginxController } from './enginx.controller';
import { EnginxService } from './enginx.service';

describe('EnginxController', () => {
  let controller: EnginxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnginxController],
      providers: [EnginxService],
    }).compile();

    controller = module.get<EnginxController>(EnginxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
