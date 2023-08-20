const {getDomain} = require('./amo/getDomain');
const {getSubDomain} = require('./amo/getSubDomain');
const {getCurrentUserId} = require('./amo/getCurrentUserId');
const {getCurrentUserName} = require('./amo/getCurrentUserName');
const {getCurrentUserPhone} = require('./amo/getCurrentUserPhone');
const {getCurrentUserEmail} = require('./amo/getCurrentUserEmail');
const {getAccountTimezone} = require('./amo/getAccountTimezone');
const {getCurrentCardId} = require('./amo/getCurrentCardId');

class AmoEnv {
  constructor(env) {
    this.env = env;
  }
  getDomain () {
    return getDomain(this.env);
  }
  getSubDomain () {
    return getSubDomain(this.env);
  }
  getCurrentUserId () {
    return getCurrentUserId(this.env);
  }
  getCurrentUserName () {
    return getCurrentUserName(this.env);
  }
  getCurrentUserPhone () {
    return getCurrentUserPhone(this.env);
  }
  getCurrentUserEmail () {
    return getCurrentUserEmail(this.env);
  }
  getAccountTimezone () {
    return getAccountTimezone(this.env);
  }
  getCurrentCardId () {
    return getCurrentCardId(this.env);
  }
}

module.exports = {
  AmoEnv,
}
