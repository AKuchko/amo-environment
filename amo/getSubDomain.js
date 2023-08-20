const getSubDomain = (env) => {
  if (env === 'amo') {
    return AMOCRM.constant('account').subdomain;
  }
  return 'test';
}

export {
  getSubDomain,
}
