import { getRandomInteger, getRandomArrayElement, getRandomIdGenerator } from './utils.js';

const NAMES = [
  'Иван',
  'Хуан',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Лолита',
  'Вашингтон'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Хороший кадр',
  'Отличное фото',
  'Седьмое чудо света',
  'Горжусь этим фото',
  'Не просто фотография, а целая история',
  'В день этого снимка, я стал счастливее',
  'Люблю сникерсы и редкий кадр'
];
const MIN_ID = 1;
const MAX_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const QUANTITY_OBJECTS = 25;

const getIdPhoto = getRandomIdGenerator(MIN_ID, MAX_ID);
const getIdComments = getRandomIdGenerator(1, 500);

const GetComment = () => {
  const idComments = getIdComments();
  return {
    id: idComments,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

function getPhoto() {
  const idPhoto = getIdPhoto();

  return {
    id: idPhoto,
    url: `photos/${idPhoto}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, GetComment)
  };
}

const arrayPhotos = () => Array.from({ length: QUANTITY_OBJECTS }, getPhoto);
export { arrayPhotos };
