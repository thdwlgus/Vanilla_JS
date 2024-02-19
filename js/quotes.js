const quotes = [
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    author: 'Carol Burnett',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote:
      "I can't go back to yesterday because I was a different person then.",
    author: 'Lewus carroll',
  },
  {
    quote:
      'Although the world is full of suffering, it is full also of the overcoming of it.',
    author: 'Helen Keller',
  },
  {
    quote: 'Energy and persistence conquer all things.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    quote:
      'It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tommorrow.',
    author: ' Rober H. Goddard',
  },
  {
    quote:
      'Resolve to perform what your ought, perform without fail what you resolve.',
    author: 'Benjamin Franklin',
  },
  {
    quote: 'Never, Never, Never, Never give up.',
    author: ' Winston Churchill',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
