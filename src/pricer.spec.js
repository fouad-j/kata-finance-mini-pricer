import pricer from './pricer';

describe('Should test pricer', () => {
  it('Should get Hello from pricer', () => {
    expect(pricer()).toEqual('Hello World');
  });
});