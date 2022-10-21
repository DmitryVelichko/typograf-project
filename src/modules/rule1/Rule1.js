import React from 'react';
import Typograf from 'typograf';

const Rule1 = () => {
  Typograf.addRule({
    name: 'common/other/typographicSmiley',
    handler: function (text) {
      return text.replace(/:-\)/g, ':-D');
    },
  });
  return <div></div>;
};

export default Rule1;
