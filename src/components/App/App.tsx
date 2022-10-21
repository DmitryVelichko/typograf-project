// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Typograf from 'typograf';
import Header from '../Header/Header';
import ClipboardCopy from '../ClipBoardCopy/ClipboardCopy';

type Props = {
  className: string;
}

function App(): React.FC<Props> {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const { TextArea } = Input;

  const onChange = (e) => {
    setText(e.target.value);
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible(true);
    var tp = new Typograf({ locale: ['ru', 'en-US'] });
    setText(tp.execute(text));
    if (text === '') {
      alert('Введите, пожалуйста, текст! Поле не может быть пустым.');
      setIsVisible(false);
    }
  };

  useEffect(() => {}, [text]);

  // Типографический смайлик
  Typograf.addRule({
    name: 'common/other/typographicSmiley',
    handler: function (text) {
      return text.replace(/:-\)/g, ':-D');
    },
  });

  return (
    <div className='App'>
      <Header />
      <TextArea
        autoFocus={true}
        showCount
        allowClear={true}
        bordered={true}
        className='input1'
        onChange={onChange}
        placeholder='Скопируйте сюда ваш шедевр мировой литературы'
      />

      <div className='buttonContainer'>
        <Button onClick={handleClick} type='ghost' className='button1'>
          Подготовить текст к публикации
        </Button>
        <ClipboardCopy copyText={text} />
      </div>

      {isVisible && (
        <>
          <TextArea
            readOnly
            autoFocus={true}
            showCount
            allowClear={true}
            bordered={true}
            className='input2'
           
            value={text}
          />
        </>
      )}

      {isVisible && (
        <>
          <TextArea
            readOnly
            autoFocus={true}
            showCount
            allowClear={true}
            bordered={true}
            className='input2'
            placeholder='Вывод логов'
            value='Поле с ошибками'
          />
        </>
      )}
    </div>
  );
}

export default App;
