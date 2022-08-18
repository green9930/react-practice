const alertMessages = {
  normal: '⚠️ 내용을 입력해주세요🥺',
  comment: '⚠️ 댓글이 변경되지 않았습니다🥺',
  content: '⚠️ 오늘 할 일이 변경되지 않았습니다🥺 (200자 이내)',
};

const editValidator = (type, currentText, targetText) => {
  let result;
  if (currentText.trim() === '') {
    result = { message: alertMessages.normal, verify: false };
  } else if (currentText === targetText) {
    result = { message: alertMessages[type], verify: false };
  } else {
    result = { message: '', verify: true };
  }

  return result;
};

export default editValidator;
