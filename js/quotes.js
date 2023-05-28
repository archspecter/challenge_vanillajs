const quotes = [
  //1
  {
    quote:
      "Insanity is doing the same thing over and over again and expecting different results.",
    author: "Albert Einstein",
  },
  //2
  {
    quote:
      "If Somebody Hate You For No Reason, Give That Mother Fucker A Reason.",
    author: "Roger Rosenblatt",
  },
  //3
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  //4
  {
    quote: "Common sense is the collection of prejudices acquired by age 18.",
    author: "Albert Einstein",
  },
  //5
  {
    quote:
      "It is only with the heart that one can see rightly. What is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery",
  },
  //6
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  //7
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  //8
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  //9
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  //10
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
