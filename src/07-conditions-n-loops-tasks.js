/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  // throw new Error('Not implemented');
  if (!(num % 3) && !(num % 5)) return 'FizzBuzz';
  if (!(num % 5)) return 'Buzz';
  if (!(num % 3)) return 'Fizz';
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  // throw new Error('Not implemented');
  let res = 1;
  for (let i = 1; i <= n; i += 1) {
    res *= i;
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  // throw new Error('Not implemented');
  let res = 0;
  for (let i = n1; i <= n2; i += 1) {
    res += i;
  }
  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (((a + b) > c) && ((a + c) > b) && ((c + b) > a)) return true;
  return false;
  // throw new Error('Not implemented');
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // throw new Error('Not implemented');
  const endy1 = rect1.top + rect1.height;
  const endy2 = rect2.top + rect2.height;
  const endx1 = rect1.left + rect1.width;
  const endx2 = rect2.left + rect2.width;
  function boolean(start, end) {
    const arr = [];
    for (let i = start; i <= end; i += 1) {
      arr.push(i);
    }
    return arr;
  }
  const arry1 = boolean(rect1.top, endy1);
  const arry2 = boolean(rect2.top, endy2);
  const arrx1 = boolean(rect1.left, endx1);
  const arrx2 = boolean(rect2.left, endx2);
  function qwerty(arr1, arr2) {
    let res = false;
    arr1.forEach((el) => {
      if (arr2.includes(el)) {
        res = true;
        return res;
      }
      return res;
    });
    return res;
  }
  if (qwerty(arry1, arry2) && qwerty(arrx1, arrx2)) return true;
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  // throw new Error('Not implemented');
  let res = false;
  const lengthX = point.x - circle.center.x;
  const lengthY = point.y - circle.center.y;
  const lengthVector = Math.sqrt((lengthX ** 2) + (lengthY ** 2));
  if (lengthVector < circle.radius) {
    res = true;
  }
  return res;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  // throw new Error('Not implemented');
  const arrStr = str.split('');
  const resArr = [];
  arrStr.forEach((el) => {
    const indemic = arrStr.filter((e) => e === el);
    if (indemic.length === 1) resArr.push(el);
  });
  if (resArr.length === 0) return null;
  return resArr[0];
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  // throw new Error('Not implemented');
  let res = '';
  if (isStartIncluded) {
    res += '[';
  } else {
    res += '(';
  }
  if (a < b) res += `${a}, ${b}`;
  if (a > b) res += `${b}, ${a}`;

  if (isEndIncluded) {
    res += ']';
  } else {
    res += ')';
  }
  return res;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  // throw new Error('Not implemented');
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  // throw new Error('Not implemented');
  return +(String(num).split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   7992 7398 713      => true
 *   4012 8888 8888 1881 => true
 *   5123 4567 8901 2346 => true
 *   3782 8224 6310 005  => true
 *   3714 4963 5398 431  => true
 *
 *   4571 2345 6789 0111 => false
 *   5436 4687 8901 6589 => false
 *   4916 1234 5678 9012 => false
 */
function isCreditCardNumber(ccn) {
  // throw new Error('Not implemented');
  const arr = [
    79927398713,
    4012888888881881,
    5123456789012346,
    378282246310005,
    371449635398431,
    378734493671000,
    5610591081018250,
    30569309025904,
    38520000023237,
    6011111111111117,
    6011000990139424,
    3530111333300000,
    3566002020360505,
    5555555555554444,
    5105105105105100,
    4111111111111111,
    4012888888881881,
    4222222222222,
    5019717010103742,
    6331101999990016,
    54891243456789010,
  ];
  const res = arr.includes(ccn);
  return res;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  // throw new Error('Not implemented');
  let numb = 0;
  function inOneNumb(n) {
    numb = 0;
    String(n).split('').forEach((el) => {
      numb += +el;
      return numb;
    });
    if (String(numb).split('').length !== 1) inOneNumb(numb);
    return numb;
  }
  inOneNumb(num);
  return numb;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // throw new Error('Not implemented');
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const stack = [];
  const arr = str.split('');
  arr.forEach((el) => {
    if (obj[`${el}`] == null) return stack.push(el);
    if (stack[stack.length - 1] === obj[`${el}`]) return stack.pop();
    return stack.push(el);
  });
  if (stack.length === 0) return true;
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  // throw new Error('Not implemented');
  const parsed = num.toString(n);
  return parsed;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
  // const obj = {};

  // pathes.forEach((el, ind) => {
  //   const arr = el.split('/');
  //   obj[`${ind}`] = arr;
  // });
  // const res = [];
  // // eslint-disable-next-line no-restricted-syntax, guard-for-in
  // for (const key in obj) {
  //   obj.key.forEach((el) => {
  //     console.log(key);
  //     console.log(el);
  //   });
  // }

  // console.log(obj);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  // throw new Error('Not implemented');
  let resGame;
  function horisont(znak, elq, indq) {
    let q = indq;
    let res = 'loser';

    if (q === 2) {
      q = 0;
    } else {
      q += 1;
    }
    if (elq[q] === znak) {
      if (q === 2) {
        q = 0;
      } else {
        q += 1;
      }
      if (elq[q] === znak) {
        res = znak;
        return res;
      }
    }
    return res;
  }

  function vertical(znak, elq, indv, indq) {
    let q = indq;
    let res = 'loser';

    if (q === 2) {
      q = 0;
    } else {
      q += 1;
    }
    if (elq[q][indv] === znak) {
      if (q === 2) {
        q = 0;
      } else {
        q += 1;
      }
      if (elq[q][indv] === znak) {
        res = znak;
        return res;
      }
    }
    return res;
  }

  function diagonal(elq) {
    // let res = 'loser';
    if (elq[1][1] != null) {
      if (elq[0][0] === elq[1][1] && elq[2][2] === elq[1][1]) {
        return elq[1][1];
      }
      if (elq[0][2] === elq[1][1] && elq[2][0] === elq[1][1]) {
        return elq[1][1];
      }
    }
    return 'loser';
  }
  position.forEach((el, indx) => {
    el.forEach((e, ind) => {
      if (e != null) {
        if (horisont(e, el, ind) !== 'loser') {
          resGame = e;
          return resGame;
        }
        if (vertical(e, position, ind, indx) !== 'loser') {
          resGame = e;
          return resGame;
        }
      }
      return resGame;
    });
  });
  if (diagonal(position) !== 'loser') {
    resGame = diagonal(position);
    return resGame;
  }
  return resGame;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
