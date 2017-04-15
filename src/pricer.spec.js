import {pricer, nextDay, escapeWeekend, escapeHolidays} from './pricer';
import moment from 'moment';

describe('Pricer tests', () => {
  it('Should return the same price for the same day', () => {
    expect(pricer(moment(), 50, 100)).toEqual(50);
  });

  it('Should return 100 for one day more', () => {
    expect(pricer(moment().add(1, 'd'), 50, 100)).toEqual(100);
  });

  it('Should return 400 for one day more', () => {
    expect(pricer(moment().add(3, 'd'), 50, 100)).toEqual(400);
  });

  // TODO review this
  xit('Should return 100 for one day more', () => {
    expect(pricer(moment().add(3, 'd'), 100, 1)).toEqual(99.99);
  });

  describe('Test function that allow to escape weekend', () => {
    it('Should return monday when its friday', () => {
      expect(escapeWeekend(moment().isoWeekday('Friday')).format('dddd')).toEqual('Monday');
    });

    it('Should return monday when its Saturday', () => {
      expect(escapeWeekend(moment().isoWeekday('Saturday')).format('dddd')).toEqual('Monday');
    });

    it('Should return monday when its sunday', () => {
      expect(escapeWeekend(moment().isoWeekday('Sunday')).format('dddd')).toEqual('Monday');
    });

    it('Should return tuesday when its monday', () => {
      expect(escapeWeekend(moment().isoWeekday('Monday')).format('dddd')).toEqual('Tuesday');
    });
  });

  describe('Test function that allow to escape holidays', () => {
    it('Should escape 08/05 (Victoire 1945)', () => {
      expect(escapeHolidays(moment('07/05', 'DD/MM')).format('DD/MM')).toEqual('09/05');
    });

    it('Should escape 14/07 (Fête Nationale)', () => {
      expect(escapeHolidays(moment('13/07', 'DD/MM')).format('DD/MM')).toEqual('15/07');
    });

    it('Should just give the next day', () => {
      expect(escapeHolidays(moment('20/07', 'DD/MM')).format('DD/MM')).toEqual('21/07');
    });
  });
});
