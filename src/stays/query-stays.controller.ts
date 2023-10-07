import { Controller, Get, Param } from '@nestjs/common';
import { StaysService } from './stays.service';
import { YearsMonthsDays } from 'src/domain/date-calculator/shared';

@Controller('query-stays')
export class QueryStaysController {
  constructor(private readonly staysService: StaysService) {}

  @Get('duration')
  getStaysDuration(): Promise<number> {
    return this.staysService.getStaysDuration();
  }

  @Get('duration/:id')
  getStayDuration(@Param('id') id: string): Promise<YearsMonthsDays> {
    return this.staysService.getStayDuration(id);
  }
}
