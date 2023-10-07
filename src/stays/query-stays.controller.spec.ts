import { Test, TestingModule } from '@nestjs/testing';
import { QueryStaysController } from './query-stays.controller';

xdescribe('QueryStaysController', () => {
  let controller: QueryStaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryStaysController],
    }).compile();

    controller = module.get<QueryStaysController>(QueryStaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
