import pricer from './pricer';
import moment from 'moment';

describe('Should test pricer', () => {
  it('Should return the same price for the same day', () => {
    expect(pricer(moment(), 50, 100)).toEqual(50);
  });

  it('Should return 100 for one day more', () => {
    expect(pricer(moment().add(1, 'd'), 50, 100)).toEqual(100);
  });
});