// Функция для проверки длины строки
function checkLengthOfString(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

// Строка короче 20 символов
checkLengthOfString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthOfString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthOfString('проверяемая строка', 10); // false


// Является ли строка палиндромом
function palindrome(string) {
  const resetString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = resetString.length - 1; i >= 0; i--) {
    newString += resetString[i];
  }
  if (newString === resetString) {
    return true;
  } else {
    return false;
  }
}

// Строка является палиндромом
palindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palindrome('ДовОд'); // true
// Это не палиндром
palindrome('Кекс'); // false
palindrome('Лёша на полке клопа нашёл '); // true
