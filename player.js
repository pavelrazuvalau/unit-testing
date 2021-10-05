const thirdParty = require('./third-party');

module.exports = class SoundPlayer {
  constructor() {
    this.urls = [];
    this.currentError = null;
  }

  fetchSounds() {
    return fetch('http://example.com')
      .then(res => res.json())
      .then((urls) => {
        this.urls = urls;
        thirdParty();
      })
      .catch((error) => {
        this.currentError = 'Oops';
      })
  }
}
