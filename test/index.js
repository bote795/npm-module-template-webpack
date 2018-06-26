import { assert } from 'chai';
import defaultAwesomeFunction from '../lib/index';

describe('Awesome test.', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
    assert(
      defaultAwesomeFunction('Dinesh') === expectedVal,
      'Default not awesome :('
    );
  });
});
