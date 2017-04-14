import pricer from './pricer';
import moment from 'moment';

describe('Should test pricer', () => {
  it('Should get Hello from pricer', () => {
    expect(pricer(moment().format('DD/MM/YYYY'), 50, 100)).toEqual(50);
  });
});