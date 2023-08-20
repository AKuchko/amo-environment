const getDomain = (env) => {
  if (env === 'amo') {
    return `${AMOCRM.constant('account').subdomain}.amocrm.ru`;
  }
  return 'test.amocrm.ru';
}

export {
  getDomain,
}
