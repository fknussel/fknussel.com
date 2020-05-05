---
title: Skipping and Focusing Tests
date: 2020-01-23
spoiler:
category: testing
---

Rephrase as this has been taken from somewhere else:

I think this depends on the framework you're using. I'm using Jasmine for the the tests, and I can achieve this by renaming individual test cases or test suites from `it()` to [`fit()`](https://jasmine.github.io/api/3.4/global#fit) or `describe()` to [`fdescribe()`](https://jasmine.github.io/api/3.4/global#fdescribe) - **it's a feature of the testing framework rather than a feature of Karma**. With Mocha, you can use `it.only()` and `describe.only()` for [exclusive tests](https://mochajs.org/#exclusive-tests).

To skip tests in Jasmine, replace `describe()` with [`xdescribe()`](https://jasmine.github.io/api/3.4/global#xdescribe) and `it()` with [`xit()`](https://jasmine.github.io/api/3.4/global#xit). In Mocha, use `it.skip()` and `describe.skip` for [inclusive tests](https://mochajs.org/#inclusive-tests).

Jasmine examples: https://davidtang.io/2016/01/03/controlling-which-tests-run-in-jasmine.html

Mocha examples: https://jaketrent.com/post/run-single-mocha-test/
