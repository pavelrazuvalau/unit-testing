jest.mock('./third-party');
const SoundPlayer = require('./player');
const thirdParty = require('./third-party');

describe('SoundPlayer', () => {
  const urls = ['1', '2', '3', '4'];
  let instance;

  beforeAll(() => {
    global.fetch = jest.fn().mockReturnValue(Promise.resolve({
      json: () => urls
    }))
  });

  beforeEach(() => {
    instance = new SoundPlayer();
  })

  test('should store fetched urls', () => {
    return instance.fetchSounds().then(() => {
      expect(instance.urls).toEqual(urls);
      expect(thirdParty).toHaveBeenCalled();
    })
  });
});
