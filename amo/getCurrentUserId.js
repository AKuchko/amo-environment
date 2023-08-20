
function getCurrentUserId (env) {
  if (env === 'amo') {
    return AMOCRM.constant('user').id;
  }
  return 'test_user_id';
}

module.exports = {getCurrentUserId};
