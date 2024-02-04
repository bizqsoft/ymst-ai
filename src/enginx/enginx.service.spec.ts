import { Test, TestingModule } from '@nestjs/testing';
import { EnginxService } from './enginx.service';

describe('EnginxService', () => {
  let service: EnginxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnginxService],
    }).compile();

    service = module.get<EnginxService>(EnginxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
