// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see 'README' or 'LICENSE' file.

// Example Quixote unit tests. We're using Mocha as our test framework and Chai for assertions.
// These tests check the our media object CSS, which is defined in `screen.css`.

(function () {
  'use strict';

  // Load an assertion library. You can use any assertion library you want. Here, we use a lightly-modified
  // version of Chai.
  var assert = require('./assert.js');

  // Load Quixote.
  var quixote = require('./quixote.js');

  // Define a test suite using Mocha's standard `define` function.
  describe('Media Object CSS', function () {

    // Variables used by our tests. They're populated in the `before()` and `beforeEach()` functions.
    var frame;
    var media;    // The Quixote test frame.
    var button;

    // Use Mocha's standard `before` function to set up our Quixote test frame before the tests run.
    before(function (done) {
      // Create the frame and load our stylesheet.
      frame = quixote.createFrame({
        // The URL of our stylesheet. It's served by Karma and configured in `build/config/karma.conf.js`.
        stylesheet: 'base/docs/bootstrap/css/bootstrap.css',
        //stylesheet: 'base/dist/css/uswds.css',
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

      // Create the HTML needed for our media object. This also acts as documentation for how the media
      // object CSS is supposed to be used. Quixote will return an object we can use to make assertions about
      // how the media element is styled.
      media = frame.add(
        // There's a containing <div>...
        "<div class='btn btn-default'>",
        // Give the HTML a name so Quixote's error messages are more readable. If we don't provide a name,
        // Quixote will use the HTML by default. That would be pretty ugly.
        'default button'
      );

      // Get the media element's figure and body elements. Quixote gives us an object we can use to make
      // assertions about how the elements are styled.
      button = frame.get('.btn-default');
    });

    // Our first test. We use Mocha's standard `it()` function to define the test. Here, we're checking that
    // the `figure` element in our media element is positioned to the left. The test definition reads
    // '[The media object CSS] positions figure to the left of [its] container.'
    it('should have centered text', function () {
      // Tell Quixote to make an assertion about the `figure` element.

        // Check that the left edge of the figure is the same as the left edge of the test frame's <body> element.
        assert.equal(button.getRawStyle("text-align"), "center", "should be centered");
    });

  });

}());
