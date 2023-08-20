
function getAccountTimezone (env) {
  if (env === 'amo') {
    return AMOCRM.constant('account').timezone;
  } 
  return 'Europe/Moscow';
}

module.exports = {getAccountTimezone};
