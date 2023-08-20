
function getCurrentCardId (env) {
  if (env === 'amo') {
    return AMOCRM.data.current_card.id;
  } 
  return 'test_current_card_id';
}

module.exports = {getCurrentCardId};
