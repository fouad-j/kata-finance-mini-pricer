import moment from 'moment';

// TODO check validity of input
let pricer = (futureDate, currentPrice, volatility) => {
  return calculPrice(moment(), futureDate, currentPrice, volatility);
};

let calculPrice = (currentDate, futureDate, currentPrice, volatility) => {
  return currentDate.format('DD/MM/YYYY') !== futureDate.format('DD/MM/YYYY') ?
    calculPrice(currentDate.add(1, 'd'), futureDate, currentPrice*(1+volatility/100), volatility) :
    currentPrice;
};

export default pricer;
