### A sample set of utility functions written in Javascript.  h/t lodash

## Coding Exercises

- [x] Write your own `_.each`
- [x] Write your own `_.map`
- [ ] Write you own `_.reduce`
- [ ] BONUS: Write your own `_.memoize`

## Notes
* Handle Collections (arrays, objects, maps)
* Well documented and organized
* TDD - write test cases for each type of utility function and collection type

## Requirements
* An installation of Node: [Node](https://github.com/nodejs/node "Node")
* An installation of Tape: [Tape](https://github.com/substack/tape "Tape")

## Running Tests
```
$ node test/utilities_test.js
```

## Aspirations
Teaching Front End Web Developer at the Maryland Institute College of Art
requires me to create templates of increasingly complexity in order to
scaffold web development for students who are writing HTML/CSS/JS for the
first time.  I wanted to make this exercise kill two birds with one stone
by implementing it in such a way that I can use it when I teach FEWD again.

If I can provide the students with simple, easy to understand tests and
starter functions, I should be able to guide them through an introduction
to collections and functions while providing them with increasing independence.

Further, I stay away from fancy and/or clever ways of writing Javascript
such as ternary operators. I want the code I write for my students, and also
the code I write with the junior engineers on my team, to be easy to understand
and debug.

I have found interactive exercises such as [javascripting](https://github.com/workshopper/learnyounode "javascripting")
to be very successful in introducing students to programming and wanted to create
something as a first step toward that interactivity.

Beyond writing this code in a way that is helpful for my students,
I wanted to follow TDD and inline documentation as I think it is
important when working on a team, planning to hand off code, or even just
for one's future self. I love pairing with junior developers on refactoring
when we have a comprehensive unit tests because it gives them more confidence
in their changes. It also makes debugging quicker when in those production
hotfix situations we all know and love.

## Regrets
Had I had more time this week, I would have loved to have completed both
the `_.reduce` and `_.memoize` utility functions.

I also would have like to explore an implementation of pattern-matching
for a more functional style of javascript to be able to match on each
collection type rather than needing if else statements. I enjoyed this
exercise and would like to repeat it using Elixir to create utility functions.
The current version of Elixir that my team is using does not include Guards yet,
but I could see a perfect application for them here and would love to explore
it on my own.

Further, I would have liked to not need to rely on the lodash source code
as a reference for my private functions as much and had time to debug them
because my tests for each and map over an object is not passing, but unfortunately,
I ran out of time.

Finally, I wish I had slept for more than a couple of hours last night, but
it does give me an excuse to sample lots of coffee in LA :-)


## Thank you!
Thank you very much for taking the time to read all this and to review my code!
I would appreciate any and all feedback and look forward to chatting with you!

