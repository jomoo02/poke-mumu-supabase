function checkTextLanguageKo(text: string) {
  return /^[가-힣]+$/.test(text);
}

function containsKorean(text: string): boolean {
  // 문자열에 한글이 하나라도 포함되어 있는지 확인
  return /[가-힣]/.test(text);
}

function checkTextNumberType(text: string) {
  // 빈 문자열이면 false 반환
  if (text.trim() === '') return false;

  // 숫자로 변환 후 NaN이 아닌지 확인
  const num = Number(text);

  return !Number.isNaN(num);
}

function formatNoSpaceInputText(text: string = '') {
  return containsKorean(text) ? text.replace(/\s/g, '') : text.trim();
}

function checkEmptyText(text: string) {
  if (!text) {
    return true;
  }

  const noSpaceInputText = formatNoSpaceInputText(text);

  return noSpaceInputText === '';
}

export {
  checkTextLanguageKo,
  checkTextNumberType,
  containsKorean,
  formatNoSpaceInputText,
  checkEmptyText,
};
