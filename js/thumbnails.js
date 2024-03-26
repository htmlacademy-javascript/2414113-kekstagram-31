import { arrayPhotos } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const containerUsersPhotos = document.querySelector('.pictures');
const usersPhotos = arrayPhotos();
const photoFragment = document.createDocumentFragment();

usersPhotos.forEach(({ url, description, likes, comments }) => {
  const thumbnail = template.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  photoFragment.append(thumbnail);
});

containerUsersPhotos.append(photoFragment);
