import { Utils } from './utils';

describe('utils', () => {

  it('should create an instance', () => {
    expect(new Utils()).toBeTruthy();
  });

  it('should generate an uuid', () => {
    const uuid = Utils.uuid();

    expect(uuid).toBeDefined();
    expect(uuid).toEqual(jasmine.any(String));
    expect(uuid).toHaveSize(36);
  });

});
