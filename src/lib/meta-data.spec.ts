import { MetaData } from './meta-data';
import { Utils } from './utils';

describe('meta-data', () => {
  it('should create an instance', () => {
    expect(new MetaData('', '')).toBeTruthy();
  });

  it('should get id from instance', () => {
    const key = Utils.uuid();
    const data = Utils.uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.id).toBeDefined();
  });

  it('should get key from instance', () => {
    const key = Utils.uuid();
    const data = Utils.uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.key).toBeDefined();
    expect(metaData.key).toEqual(key);
  });

  it('should get data from instance', () => {
    const key = Utils.uuid();
    const data = Utils.uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.data).toBeDefined();
    expect(metaData.data).toEqual(data);
  });

  it('should get timestamp from instance', () => {
    const key = Utils.uuid();
    const data = Utils.uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.timestamp).toBeDefined();
    expect(metaData.timestamp).toEqual(jasmine.any(Number));
  });
});
