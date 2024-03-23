// Функция для проверки длины строки
function checkLengthOfString(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

// Строка короче 20 символов
checkLengthOfString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthOfString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthOfString('проверяемая строка', 10); // false


// Является ли строка палиндромом
function isPalindrome(string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    newString += normalizeString[i];
  }
  if (newString === normalizeString) {
    return true;
  }
  return false;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true
