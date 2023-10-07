import { Test, TestingModule } from '@nestjs/testing';
import { StaysCommandRepository } from './stays-command.repository';

xdescribe('StaysCommandRepository', () => {
  let service: StaysCommandRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaysCommandRepository],
    }).compile();

    service = module.get<StaysCommandRepository>(StaysCommandRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
