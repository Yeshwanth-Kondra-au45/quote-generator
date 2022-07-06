let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: `“Be the change that you wish to see in the world.”`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: ` Albert Einstein`,
  },
  {
    quote: `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
    person: `Anonymous`,
  },
  {
    quote: `"A room without books is like a body without a soul."`,
    person: `Marcus Tullius Cicero`,
  },
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})