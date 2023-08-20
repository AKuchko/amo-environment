
function getCurrentUserName (env) {
  if (env === 'amo') {
    return AMOCRM.constant('user').name;
  }
  return 'test_user_name';
}

module.exports = {getCurrentUserName};
