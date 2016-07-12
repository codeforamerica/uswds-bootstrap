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
    var
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h1Blue,
      h2Blue,
      h3Blue,
      h4Blue,
      h5Blue,
      h6Blue,
      lead,
      p,
      blockquote,
      blockquoteReverse;
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
          '<h1 id="h1">Test Heading 1</h1>' +
          '<h2 id="h2">Test Heading 2</h2>' +
          '<h3 id="h3">Test Heading 3</h3>' +
          '<h4 id="h4">Test Heading 4</h4>' +
          '<h5 id="h5">Test Heading 5</h5>' +
          '<h6 id="h6">Test Heading 6</h6>' +

          '<h1 id="h1-blue" class="heading-blue">Test Heading 1</h1>' +
          '<h2 id="h2-blue" class="heading-blue">Test Heading 2</h2>' +
          '<h3 id="h3-blue" class="heading-blue">Test Heading 3</h3>' +
          '<h4 id="h4-blue" class="heading-blue">Test Heading 4</h4>' +
          '<h5 id="h5-blue" class="heading-blue">Test Heading 5</h5>' +
          '<h6 id="h6-blue" class="heading-blue">Test Heading 6</h6>' +

          '<p id="lead" class="lead">Test Lead</p>' +
          '<p id="p">Test Paragraph</p>' +

          '<blockquote id="blockquote">Test Blockquote</blockquote>' +
          '<blockquote id="blockquote-reverse" class="blockquote-reverse">Test Paragraph</blockquote>' +
        '</div>'
      );
      // Get the media element's figure and body elements. Quixote gives us an object we can use to make
      // assertions about how the elements are styled.
      h1 = frame.get('#h1');
      h2 = frame.get('#h2');
      h3 = frame.get('#h3');
      h4 = frame.get('#h4');
      h5 = frame.get('#h5');
      h6 = frame.get('#h6');

      h1Blue = frame.get('#h1-blue');
      h2Blue = frame.get('#h2-blue');
      h3Blue = frame.get('#h3-blue');
      h4Blue = frame.get('#h4-blue');
      h5Blue = frame.get('#h5-blue');
      h6Blue = frame.get('#h6-blue');

      lead = frame.get('#lead');
      p = frame.get('#p');

      blockquote = frame.get('#blockquote');
      blockquoteReverse = frame.get('#blockquote-reverse');

    });

    it('has correct font-family', function () {
      assert.equal(h1.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
      assert.equal(h2.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
      assert.equal(h3.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
      assert.equal(h4.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
      assert.equal(h5.getRawStyle('font-family'), 'Merriweather, georgia', 'Heading font should be Merriweather');
      assert.equal(h6.getRawStyle('font-family'), '"Source Sans Pro", helvetica', 'H6 font should be Source Sans Pro');

      assert.equal(lead.getRawStyle('font-family'), 'Merriweather, georgia', 'Lead font should be Source Sans Pro');
      assert.equal(p.getRawStyle('font-family'), '"Source Sans Pro", helvetica', 'Paragraph font should be Source Sans Pro');

    });

    it('has correct font-weight', function () {
      assert.equal(h1.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h2.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h3.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h4.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h5.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h6.getRawStyle('font-weight'), 'normal', 'Font weight should be 400');

      assert.equal(lead.getRawStyle('font-weight'), 'normal', 'Font weight should be 400');
      assert.equal(p.getRawStyle('font-weight'), 'normal', 'Font weight should be 400');

    });

    it('has correct font-weight', function () {
      assert.equal(h1.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h2.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h3.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h4.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h5.getRawStyle('font-weight'), 'bold', 'Font weight should be 700');
      assert.equal(h6.getRawStyle('font-weight'), 'normal', 'Font weight should be 400');
    });

    //Skipping for now because em is causing errors
    it.skip('has correct line-height', function () {
      assert.equal(h1.getRawStyle('line-height'), '52px', 'Font weight should be 700');
      assert.equal(h2.getRawStyle('line-height'), '39px', 'Font weight should be 700');
      assert.equal(h3.getRawStyle('line-height'), '26px', 'Font weight should be 700');
      assert.equal(h4.getRawStyle('line-height'), '22.1px', 'Font weight should be 700');
      assert.equal(h5.getRawStyle('line-height'), '19.5px', 'Font weight should be 700');
      assert.equal(h6.getRawStyle('line-height'), '16.9px', 'Font weight should be 400');
    });

    it('h6 is uppercase', function () {
      assert.equal(h6.getRawStyle('text-transform'), 'uppercase', 'h6 should be uppercase');
    });

    it('turns blue with heading-blue class', function (){
      assert.equal(h1Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(h2Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(h3Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(h4Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(h5Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(h6Blue.getRawStyle('color'), 'rgb(0, 113, 188)', 'Should be blue');
    });

    it('Blockquote has blue border', function (){
      assert.equal(blockquote.getRawStyle('border-color'), 'rgb(0, 113, 188)', 'Should be blue');
      assert.equal(blockquoteReverse.getRawStyle('border-color'), 'rgb(0, 113, 188)', 'Should be blue');
    });

  });

}());
