function getJongseongIndex(char: string) {
  const charCode = char.charCodeAt(0);

  if (charCode >= 0xac00 && charCode <= 0xd7a3) {
    const jongseong = (charCode - 0xac00) % 28;
    return jongseong;
  }
  return -1;
}

export function getParticle(word: string) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '를' : '을';
  }

  return '';
}

export function getParticleForAnd(word: string) {
  const lastChar = word[word.length - 1];

  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '와' : '과';
  }

  return '';
}

export function getSubjectParticle(word: string) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '가' : '이';
  }

  return '';
}

export function getDirectionalParticle(word: string) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    // 받침이 없거나 받침이 'ㄹ'인 경우 "로"
    if (jongseong === 0 || jongseong === 8) {
      return '로';
    }
    // 받침이 있는 경우 "으로"
    return '으로';
  }

  return '';
}
