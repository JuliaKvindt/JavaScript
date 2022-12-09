"use strict"
// Папка 3 задание 1
// let password = 'nkjbhb';
// if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
//     console.log('пароль надежный')
// } else {
//     console.log('пароль недостаточно надежный')
// }

//  first lesson

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);