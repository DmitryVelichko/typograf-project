import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Header from '../Header';
import ClipboardCopy from '../ClipBoardCopy';
import ruleTypograf from '../../modules/ruleTypograf';
import ruleCheckCurseWords from '../../modules/ruleCheckCurseWords';
import './App.css';
const reactDiffView = require('react-diff-view');

const App: React.FC = ({ diffText }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const { TextArea } = Input;

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible(true);
    let typografedText = ruleTypograf(text);
    let checkedForCurseWordsText = ruleCheckCurseWords(typografedText);
    setText(checkedForCurseWordsText);
    if (text === '') {
      alert('Введите, пожалуйста, текст! Поле не может быть пустым.');
      setIsVisible(false);
    }
  };

  useEffect(() => {}, [text]);

  // Библиотека для сравнения текста react-diff-view
  // https://www.npmjs.com/package/react-diff-view

  const files = reactDiffView.parseDiff('diffText');

  const renderFile = ({ oldRevision, newRevision, type, hunks }: any) => (
    <reactDiffView.Diff
      key={oldRevision + '-' + newRevision}
      viewType='split'
      diffType={type}
      hunks={hunks}
    >
      {(hunks: any): any =>
        hunks.map((hunk: any): any => (
          <reactDiffView.Hunk key={hunk.content} hunk={hunk} />
        ))
      }
    </reactDiffView.Diff>
  );

  return (
    <div className='App'>
      <Header />
      <div>{files.map(renderFile)}</div>
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
};

export default App;
