// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see 'README' or 'LICENSE' file.

// Example Quixote unit tests. We're using Mocha as our test framework and Chai for assertions.
// These tests check the our media object CSS, which is defined in `screen.css`.

(function () {
  'use strict';

  // Load an assertion library. You can use any assertion library you want. Here, we use a lightly-modified
  // version of Chai.
  var assert = require('../../vendor/assert.js');

  // Load Quixote.
  var quixote = require('../../vendor/quixote.js');

  // Define a test suite using Mocha's standard `define` function.
  describe('Media Object CSS', function () {
    this.timeout(60000);
    // Variables used by our tests. They're populated in the `before()` and `beforeEach()` functions.
    var frame;
    var media;    // The Quixote test frame.
    var table;

    var container;

    // Use Mocha's standard `before` function to set up our Quixote test frame before the tests run.
    before(function (done) {
      // Create the frame and load our stylesheet.
      frame = quixote.createFrame({
        // The URL of our stylesheet. It's served by Karma and configured in `build/config/karma.conf.js`.
        src: '/test-frame',
        //stylesheet: '/dist/css/uswds-bootstrap',
      }, done);   // This is an asynchronous operation, so we pass in Mocha's `done` callback.
    });

    // Use Mocha's standard `after` function to clean up our Quixote test frame after all the tests are done.
    // We create and remove the test frame only once for the entire suite because it's a relatively expensive
    // operation.
    after(function () {
      frame.remove();
    });

    // Use Mocha's standard `beforeEach()` function to set up the HTML elements we'll use to test our
    // media object CSS.
    beforeEach(function () {
      // Reset Quixote's test frame to a pristine state. This ensures that any DOM changes we made in our
      // tests don't affect other tests. We do it in the `beforeEach()` function rather than `afterEach()`
      // to make debugging easier.
      frame.reset();
      container = frame.add(
        '<div>' +

        '</div>'
      );
      // Get the media element's figure and body elements. Quixote gives us an object we can use to make
      // assertions about how the elements are styled.
      table = frame.get('#table-bordered');

    });

    it('has correct font-family', function () {
      assert.equal(h1.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
    });

  });

}());
