define(['ojs/ojcore', 'knockout', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojbutton'],
function(oj, ko) {

    function getData(data, host, port) {
         $.getJSON("http://"+host+":"+port+"/greetings").
                then(function (json) {
                    data = this.greeting;
                    });  
         
    };

  function viewModel() {
      var self = this;
      self.value = ko.observable("Somewhat long value");
      self.host = envOptions.host;
      self.port = envOptions.port;
      getData(self.value, self.host, self.port);
  };

  return viewModel;
});
