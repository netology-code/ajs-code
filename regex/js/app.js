{
  function validateEmail(emailStr) {
    for (const itemSymbol of emailStr) {
      if (itemSymbol === '@') {
        return true;
      }
    }
    return false;
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('supportnetology.ru')); // false
}

{
  function validateEmail(emailStr) {
    return emailStr.indexOf('@') !== -1;
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('supportnetology.ru')); // false
}

{
  function validateEmail(emailStr) {
    return emailStr.includes('@');
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('supportnetology.ru')); // false
}

{
  function validateEmail(emailStr) {
    let foundCommercialAt = false;
    for (const itemSymbol of emailStr) {
      if (itemSymbol === '@') {
        foundCommercialAt = true;
      }
      if (itemSymbol === '.' && foundCommercialAt) {
        return true;
      }
    }
    return false;
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('support@netologyru')); // false
  console.log(validateEmail('supportnetology.ru')); // false
}

{
  function validateEmail(emailStr) {
    const commercialAtPos = emailStr.indexOf('@');
    return commercialAtPos !== -1 && commercialAtPos < emailStr.indexOf('.');
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('supportnetology.ru'));
}

{
  function validateEmail(emailStr) {
    const commercialAtPos = emailStr.indexOf('@');
    return commercialAtPos !== -1 && commercialAtPos < emailStr.indexOf('.');
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('support@netologyru')); // false
  console.log(validateEmail('@supportnetology.ru')); // false
  console.log(validateEmail('support@netologyru.')); // false
  console.log(validateEmail('supportnetology.ru')); // false
  console.log(validateEmail('supportnetologyru')); // false
}

{
  function validateEmail(emailStr) {
    const commercialAtPos = emailStr.indexOf('@');
    const dotPos = emailStr.indexOf('.');
    if (commercialAtPos <= 0) {
      return false;
    }
    if (dotPos < commercialAtPos) {
      return false;
    }
    return dotPos !== emailStr.length - 1;
  }

  console.log(validateEmail('support@netology.ru')); // true
  console.log(validateEmail('support@netologyru')); // false
  console.log(validateEmail('@supportnetology.ru')); // false
  console.log(validateEmail('support@netologyru.')); // false
  console.log(validateEmail('supportnetology.ru')); // false
  console.log(validateEmail('supportnetologyru')); // false
}

{
  function validateEmail(emailStr) {
    return /@/.test(emailStr);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('supportnetology.ru'));
}

{
  function validateEmail(emailStr) {
    return /@[^.]+\./.test(emailStr);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('supportnetology.ru'));
}

{
  function validateEmail(emailStr) {
    return /@[^.]+\.\w/.test(emailStr);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function validateEmail(emailStr) {
    return emailStr.search(/\w@[\w\d][-_\w\d]+\.\w/) !== -1;
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function validateEmail(emailStr) {
    return emailStr.match(/\w@[\w\d][-_\w\d]+\.\w/);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function validateEmail(emailStr) {
    return emailStr.match(/\w@([\w\d][-_\w\d]+)\.\w/);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function separatePhrase(phrase) {
    return phrase.split(/[^(а-яёa-z@\.)]+/i);
  }
  console.log(separatePhrase('Support@netology.ru - адрес технической поддержки Нетологии.'));
}

{
  function transferToBrick(phrase) {
    return phrase.toUpperCase().replace(/([АЯЭЕОЁУЮЫИ])/, '$1K$1');
  }
  console.log(transferToBrick('Привет, мир!'));
}

{
  function transferToBrick(phrase) {
    return phrase.toUpperCase().replace(/([АЯЭЕОЁУЮЫИ])/g, '$1K$1');
  }
  console.log(transferToBrick('Привет, мир!'));
}

{
  function validateEmail(emailStr) {
    return /\w@[\w\d][-_\w\d]+\.\w/.test(emailStr);
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function validateEmail(emailStr) {
    return /\w@[\w\d][-_\w\d]+\.\w/.exec(emailStr) !== null;
  }

  console.log(validateEmail('support@netology.ru'));
  console.log(validateEmail('supp@rt@netologyru'));
  console.log(validateEmail('$upport@netologyru'));
  console.log(validateEmail('support@netologyru'));
  console.log(validateEmail('@supportnetology.ru'));
  console.log(validateEmail('support@netologyru.'));
  console.log(validateEmail('supportnetology.ru'));
  console.log(validateEmail('supportnetologyru'));
}

{
  function findEmail(emailStr) {
    // мы упростили выражение для наглядности
    return /(?<emailGroup>\w+@\w+\.\w+)/.exec(emailStr);
  }

  const textStr = 'Support@netology.ru - адрес технической поддержки Нетологии.';
  const emailStr = findEmail(textStr);
  console.log(emailStr.groups.emailGroup);
}

{
  function findEmail(emailStr) {
    return emailStr.match(/\w+(?=@)/g);
  }

  textStr = 'admin@netology, email: support@netology.ru';
  console.log(findEmail(textStr)); // -> ["admin", "support"]
}

{
  function matchPhrase(phraseStr) {
    return /Нетология.онлайн-школа/.exec(phraseStr);
  }

  const textStr = 'Нетология\nонлайн-школа';
  console.log(matchPhrase(textStr));
}

{
  function matchPhrase(phraseStr) {
    return /Нетология.онлайн-школа/s.exec(phraseStr);
  }

  const textStr = 'Нетология\nонлайн-школа';
  console.log(matchPhrase(textStr));
}

{
  console.log(/\p{Emoji}/u.test('😀ΩU'));
  console.log(/\p{Script=Greek}/u.exec('😀ΩU'));
}
