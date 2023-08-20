
function getCurrentUserPhone (env) {
  if (env === 'amo') {
    return AMOCRM.constant('user').personal_mobile;
  }
  return 'test_phone';
}

module.exports = {getCurrentUserPhone};
