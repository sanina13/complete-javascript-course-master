'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
//Strings part 3

const logBookCategories = function (str) {
  const strClear = str.split(';');
  for (const word of strClear) {
    console.log(word);
  }
};

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

/* logBookCategories(bookCategories); */

//17.2
const getKeywordsAsString = function (books) {
  let str = [];
  for (let i = 0; i < books.length; i++) {
    for (const keyword of books[i].keywords.values()) {
      str.push(keyword);
    }
  }
  const setStr = [...new Set(str)];

  console.log(setStr.join(';'));
};
getKeywordsAsString(books);

//17.3
const logBookChapters = function (arr) {
  for (const [title, pages] of arr) {
    console.log(title.padEnd(20, '_') + ' ' + pages);
  }
};

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);

//Strings part 2

/* const normalizeAuthorName = function (nameAuthor) {
  const nameAuthorNorm = nameAuthor.toLowerCase().trim();
  let final = '';
  if (nameAuthorNorm.endsWith('(contributor)')) {
    final = nameAuthorNorm.slice(0, nameAuthorNorm.lastIndexOf(' '));
  }
  console.log(final[final.indexOf(' ') + 1]);
  const capitalizaFinal =
    final[0].toUpperCase() +
    final.slice(1, final.indexOf(' ')) +
    ' ' +
    final[final.indexOf(' ') + 1].toUpperCase() +
    final.slice(final.indexOf(' ') + 2);
  console.log(capitalizaFinal);
};
normalizeAuthorName('  JuliE sussMan (Contributor)'); */

// 16.2
/* const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);
// 16.3
const logBookTheme = function (title) {
  const titleNorm = title.toLowerCase();
  if (titleNorm.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (
    titleNorm.includes('algorithms') &&
    titleNorm.includes('structures')
  ) {
    console.log('This book is about algorithms and data structures');
  } else if (
    (titleNorm.endsWith('system') || titleNorm.endsWith('systems')) &&
    !titleNorm.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
};
 */

//String Part 1
/* console.log(books[1].ISBN[6]);
console.log(books[1].ISBN[4]);
console.log(books[1].ISBN[9]);
console.log(books[1].ISBN[8]);
 */
/* const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));
console.log(quote.slice(quote.lastIndexOf(' ') + 1)); */

/* const isContributor = function (author) {
  if (author.indexOf('Contributor') === -1) {
    return false;
  } else {
    return true;
  }
};

console.log(isContributor('Robert Sedgewick'));
 */
//Maps 2
/* const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}
 */
//Maps
/* const bookMap = new Map();
const Data = [
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
];
bookMap.set(Data[0][0], Data[0][1]);
bookMap.set(Data[1][0], Data[1][1]);
console.log(bookMap);

bookMap.set('pages', 464);
console.log(bookMap);
console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);
console.log(bookMap.size);

console.log(
  bookMap.has('author')
    ? 'The author of the book is known'
    : 'The author is anonymous'
); */

//Sets
/* const allKeywords = []; */

/* for (const book of books) {
  /* for (const keyword of book.keywords) {
    allKeywords.push(keyword);
  } */
/*   allKeywords.push(...book.keywords); */
/* } */
/* console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords); */

//Looping Objects
/* const entires = [];

for (const keys of Object.keys(books[0].thirdParty.goodreads)) {
  entires.push([keys]);
}
console.log(entires);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entires[index].push(value);
}
console.log(entires);
//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);
 */
//Optional Chaining
/* const getFirstKeyword = function (books) {
  return books.keywords?.[0] ? books.keywords[0] : 'Keyword not found';
};
console.log(getFirstKeyword(books[0])); */

/* const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
console.log(newBook2); */

//Enhanced Object Literals

//Looping Arrays
/* let pageSum = 0;
for (const pages of books) {
  pageSum += pages.pages;
}
console.log(pageSum);
 */
/* const allAuthors = [];

for (const book of books) {
  if (!(typeof book.author === 'string')) {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  } else {
    allAuthors.push(book.author);
  }
}
console.log(allAuthors);

//8.3)

for (const [id, author] of allAuthors.entries()) {
  console.log(`${id + 1}. ${author}`);
}
 */
//Logical assigment operator
/* for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
} */

/* for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
console.log(books); */

//Nullish operator

/* for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
} */

//short circuiting

/* const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available';
};
console.log(hasExamplesInJava(books[1]));

for (let i = 0; i < books.length; i++) {
  const flag = books[i].onlineContent || false;
  if (flag) console.log(`"${books[i].title}" provides online content`);
}

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
} */
//Rest operator and rest parameter

/* const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}; */
/* printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'); */

/* const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);

/* const [[, rating] [, ratingsCount]] = ratings; */

/* const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
 */

//Destructuring Objects

/* const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = "Unknown" } = books[6];
console.log(language, programmingLanguage);

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

const printBookInfo = function ({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});

printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
 */

// The Spread Operator
/* const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (word) {
  console.log(...word);
};

spellWord('JavaScript'); */
