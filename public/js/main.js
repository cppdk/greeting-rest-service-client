requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.4.0',
    'jquery': 'libs/jquery/jquery-3.1.1.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0.min',
    'ojs': 'libs/oj/v3.2.0/debug',
    'ojL10n': 'libs/oj/v3.2.0/ojL10n',
    'ojtranslations': 'libs/oj/v3.2.0/resources',
    'signals': 'libs/js-signals/signals.min',
    'crossroads': 'libs/crossroads/crossroads.min',
    'text': 'libs/require/text',
    'promise': 'libs/es6-promise/es6-promise.min',
    'hammerjs': 'libs/hammer/hammer-2.0.8.min',
    'customElements': 'libs/webcomponents/customElements',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    },
    'crossroads': {
      deps: ['signals'],
      exports: 'crossroads'
    }
  }
  });


/**
 * A top-level require call executed by the Application.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar','ojs/ojmenu', 'ojs/ojrouter','ojs/ojmodule'], // add additional JET component modules as needed
function(oj, ko, $) {

  // Initialize the router
  var router = oj.Router.rootInstance;
  router.configure({'home':    {label: 'Home',     value: 'home', isDefault: true}});

  // Only the router is need in the viewModel
  var viewModel = {
    router:      router,
  };

  oj.Router.sync().then(
    function() {
      ko.applyBindings(viewModel);
      $('#globalBody').show();
    },
    function(error) {
      oj.Logger.error('Error when starting router: ' + error.message);
    }
  );
});
