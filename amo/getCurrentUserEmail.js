
function getCurrentUserEmail (env) {
  if (env === 'amo') {
    return AMOCRM.constant('user').login;
  } 
  return 'test@test.com';
}

module.exports = {getCurrentUserEmail};
