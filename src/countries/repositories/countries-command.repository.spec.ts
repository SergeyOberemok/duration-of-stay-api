import { Test, TestingModule } from '@nestjs/testing';
import { CountriesCommandRepository } from './countries-command.repository';

describe('CountriesCommandRepository', () => {
  let service: CountriesCommandRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesCommandRepository],
    }).compile();

    service = module.get<CountriesCommandRepository>(
      CountriesCommandRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
