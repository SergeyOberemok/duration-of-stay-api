import { FindStayHandler } from './find-stay.handler';
import { FindStaysHandler } from './find-stays.handler';
import { GetStayDurationHandler } from './get-stay-duration.handler';
import { GetStaysDurationHandler } from './get-stays-duration.handler';

export const staysQueryHandlers = [
  FindStaysHandler,
  FindStayHandler,
  GetStaysDurationHandler,
  GetStayDurationHandler,
];
