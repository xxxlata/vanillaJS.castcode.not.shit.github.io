const quotes = [
    {
      quote: "Even if there's a change, it doesn't change.",
      author: "-Erica Yorn-",
    },
    {
      quote: "It's really late when you think it's late.",
      author: "-Erica Yorn-",
    },
    {
      quote: "If this month's me, the next month's me, and the next month's me work together, there's nothing I can't buy.",
      author: "-Erica Yorn-",
    },
    {
      quote: "What people want the most is someone who will listen to their stories.",
      author: "-Chaekovsky-",
    },
    {
      quote: "Let's survive and go to tomorrow.",
      author: "-Jutalie.C.Portman-",
    },
    {
      quote: "Not a baby over the age of 20 but a brat.",
      author: "-Jutalie.C.Portman-",
    },
    {
      quote: "Let's not regret leaving.",
      author: "-Jutalie.C.Portman-",
    },
    {
      quote: "Life is real game.",
      author: "Tequila.L.Mango",
    },
    {
      quote: "I just want a be me.",
      author: "Dongcrates",
    },
    {
      quote: "I'm just a little slow..",
      author: "Tequila.L.Mango",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;