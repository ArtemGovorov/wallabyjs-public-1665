import { always } from './index';

describe('test suite', () => {
  it('test to pass', () => {
    expect(always(true)).to.be.true;
  });

  it('test to fail', () => {
    expect(true).to.be.false;
  });

  it('test to skip');
});
