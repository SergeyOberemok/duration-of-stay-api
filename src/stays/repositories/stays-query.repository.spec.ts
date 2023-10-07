import { Test, TestingModule } from '@nestjs/testing';
import { StaysQueryRepository } from './stays-query.repository';

xdescribe('StaysQueryRepository', () => {
  let service: StaysQueryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaysQueryRepository],
    }).compile();

    service = module.get<StaysQueryRepository>(StaysQueryRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
