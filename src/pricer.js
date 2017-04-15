import moment from 'moment';

const holidays = ['01/01', '01/05', '08/05', '14/07'];

// TODO check validity of input
const pricer = (futureDate, currentPrice, volatility) => {
  return calculPrice(moment(), futureDate, currentPrice, volatility);
};

const calculPrice = (currentDate, futureDate, currentPrice, volatility) => {
  if (currentDate.format('DD/MM/YYYY') !== futureDate.format('DD/MM/YYYY')) {
    return calculPrice(nextDay(currentDate), futureDate, currentPrice * (1 + volatility / 100), volatility);
  }
  else {
    return currentPrice;
  }
};

const nextDay = currentDate => escapeWeekend(escapeHolidays(currentDate));

const escapeWeekend = currentDate => {
  switch (currentDate.format('dddd')) {
    case 'Friday' : return currentDate.add(3, 'd');
    case 'Saturday' : return currentDate.add(2, 'd');
    default: return currentDate.add(1, 'd');
  }
};

// TODO check if immutable moment() exists
const escapeHolidays = currentDate =>
  holidays.includes(currentDate.add(1, 'd').format('DD/MM')) ?
    currentDate.add(1, 'd') :
    currentDate;

export {pricer, nextDay, escapeWeekend, escapeHolidays};
