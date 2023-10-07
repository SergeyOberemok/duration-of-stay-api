import { FindStayHandler } from './find-stay.handler';
import { FindStayQuery } from './find-stay.query';
import { FindStaysHandler } from './find-stays.handler';
import { FindStaysQuery } from './find-stays.query';
import { GetStayDurationHandler } from './get-stay-duration.handler';
import { GetStayDurationQuery } from './get-stay-duration.query';
import { GetStaysDurationHandler } from './get-stays-duration.handler';
import { GetStaysDurationQuery } from './get-stays-duration.query';

export const staysQueries = [
  FindStaysQuery,
  FindStayQuery,
  GetStaysDurationQuery,
  GetStayDurationQuery,
];

export const staysQueryHandlers = [
  FindStaysHandler,
  FindStayHandler,
  GetStaysDurationHandler,
  GetStayDurationHandler,
];
