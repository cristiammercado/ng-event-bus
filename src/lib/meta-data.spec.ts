import { MetaData } from './meta-data';

describe('meta-data', () => {
  it('should create an instance', () => {
    expect(new MetaData('', '')).toBeTruthy();
  });

  it('should get id from instance', () => {
    const key = uuid();
    const data = uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.id).toBeDefined();
  });

  it('should get key from instance', () => {
    const key = uuid();
    const data = uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.key).toBeDefined();
    expect(metaData.key).toEqual(key);
  });

  it('should get data from instance', () => {
    const key = uuid();
    const data = uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.data).toBeDefined();
    expect(metaData.data).toEqual(data);
  });

  it('should get timestamp from instance', () => {
    const key = uuid();
    const data = uuid();
    const metaData = new MetaData(key, data);

    expect(metaData.timestamp).toBeDefined();
    expect(metaData.timestamp).toEqual(jasmine.any(Number));
  });

  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
});
