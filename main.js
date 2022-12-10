"use strict"
// Папка 3 задание 1
// let password = 'nkjbhb';
// if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
//     console.log('пароль надежный')
// } else {
//     console.log('пароль недостаточно надежный')
// }

//  first lesson, second lesson

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
      
      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
                if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('ok');
                } else {
                    console.log('error');
                    i--;
                }              
      }
      if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
      } else {
        console.log('Произошла ошибка');
      }
      console.log(personalMovieDB);

    //   console.log( NaN || 2 || undefined ); // 2
    //   console.log( NaN && 2 && undefined ); // nan
    //   console.log( 1 && 2 && 3 ); // 3
    //   console.log( !1 && 2 || !3 ); // false
    //   console.log( 25 || null && !3 );  //25    
    //   console.log( NaN || null || !3 || undefined || 5); // 5
    //   console.log( NaN || null && !3 && undefined || 5); // 5
    //   console.log( 5 === 5 && 3 > 1 || 5); // true

    // const hamburger = 3;
    // const fries = 3;
    // const cola = 0;
    // const nuggets = 2;
    
    // if (hamburger === 3 && cola || fries === 3 && nuggets) {
    //     console.log('Done!')
    // }

    // let hamburger;
    // const fries = NaN;
    // const cola = 0;
    // const nuggets = 2;
    
    // if (hamburger || cola || fries === 3 || nuggets) {
    // console.log('Done!')
    // }

    // let hamburger;
    // const fries = NaN;
    // const cola = 0;
    // const nuggets = 2;
    
    // if (hamburger && cola || fries === 3 && nuggets) {
    // console.log('Done!')
    // }

    // // пирамидка из *
    // let result = '';
    // const length = 7;
    // for (let i = 1; i < length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         result += '*';
    //     }
    //     result += '\n';
    // }
    // console.log(result);

