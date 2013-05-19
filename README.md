match.js
========

A reimplementation of Rob Pike's simplified regular expression matcher from (Beautiful Code)[http://shop.oreilly.com/product/9780596510046.do] by O'Reilly Media (a great book, by the way) in Javascript.

My implementation sticks pretty close to the original with the following changes (more or less):

- Wrapped all functionality in the main function, camel-cased function names and some other minor tidying
- Swapped out integer return values for booleans, because sometimes truthy just isn't truthy enough
- Replaced C pointer fancyness with string subscript notation and judicious use of String.slice as required
- End-of-string conditions are now based on string length, rather than an EOS character being present
- Added a check for empty inputs
