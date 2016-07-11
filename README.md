Contains a modified version of the U.S. Web Design Standards in the `uswds` directory. Build tasks have been altered so that they can be run from the root directory, and then pipe the output of the USWDS scss to `dist` in the root directory.

#Differences Between The USWDS and the USWDS Bootstrap Theme
This Bootstrap theme is purely CSS. The USWDS JavaScript has not been included. Instead, Bootstrap's JavaScript components are styled to display as USWDS components.

The semantic grid pattern (e.g. `class="one-half"`) has not been included. Instead, use Bootstrap's grid notation (e.g. `class="col-md-4"`).

#Development

To run the Jekyll site for the documentation, do `bundle exec jekyll serve`.

Running `gulp build` will build the USWDS styles and pipe them to the `dist` and `docs/dist/` directories.

#Testing

Testing CSS frameworks is not a common practice, however it is necessary in this case due to the fact that the Bootstrap framework will change over time. The goal is to implement 100% test coverage.

Each bootstrap component, (e.g. table, button group, modal) should have its own testing module to check if it adheres to the USWDS standards.

Note that standards do not exist for every Bootstrap component. In some instances, design choices have been inferred. In other cases, the default is vanilla Bootstrap.

##Testing Framework

Use Jake as a task runner:
`./jake.sh karma`

Open a browser window to `localhost:9876`. You should see a green status bar. Note: Webkit based browsers run much slower if this tab is not visible. Make sure to run your terminal commands with the browser window in view or you may get a timeout error.

`./jake.sh test`
