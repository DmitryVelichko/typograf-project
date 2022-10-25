// Проверяет, подключена ли стартовая синяя картинка, правильный ли она имеет размер, в нужном ли месте расположена

import Typograf from 'typograf';

const Rule1 = () => {
    Typograf.addRule({
      name: 'common/other/typographicSmiley',
      handler: function (text) {
        return text.replace(/:-\)/g, ':-D');
      },
    });
    return null;
  };
  
  export default Rule1;
  