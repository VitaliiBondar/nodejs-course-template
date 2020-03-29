const encrypt = (key, str, action) => {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const LETTERS_UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LETTERS_LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
  const newLetterArr = [];
  const indexFirstEl = 26 - key;

  function reorderLettersInStr(arr) {
    const lettersArr = arr.split('');
    for (let i = indexFirstEl; i < lettersArr.length; i++) {
      newLetterArr.push(lettersArr[i]);
    }
    for (let i = 0; i < indexFirstEl; i++) {
      newLetterArr.push(lettersArr[i]);
    }
  }

  reorderLettersInStr(LETTERS_UPPER_CASE);
  reorderLettersInStr(LETTERS_LOWER_CASE);

  const newLetterOrder = newLetterArr.join('');

  if (action === 'encode') {
    const index = x => newLetterOrder.indexOf(x);
    const translate = x => (index(x) > -1 ? LETTERS[index(x)] : x);
    return str
      .split('')
      .map(translate)
      .join('');
  }
  if (action === 'decode') {
    const index = x => LETTERS.indexOf(x);
    const translate = x => (index(x) > -1 ? newLetterOrder[index(x)] : x);
    return str
      .split('')
      .map(translate)
      .join('');
  }
};
module.exports = { encrypt };
