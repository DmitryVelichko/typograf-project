import { useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './ClipboardCopy.css';

export default function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false); //
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='containerForCopyButton'>
      <Button
        type='ghost'
        icon={<CopyOutlined />}
        className='button2'
        onClick={handleCopyClick}
      > Скопировать исправленный текст</Button>
      {isCopied && <button className='copied'>Скопировано!</button>}
    </div>
  );
}
