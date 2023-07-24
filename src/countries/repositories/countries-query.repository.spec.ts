import { Test, TestingModule } from '@nestjs/testing';
import { CountriesQueryRepository } from './countries-query.repository';

describe('CountriesQueryRepository', () => {
  let service: CountriesQueryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesQueryRepository],
    }).compile();

    service = module.get<CountriesQueryRepository>(CountriesQueryRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
