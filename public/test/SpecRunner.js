
require.config({
  baseUrl: "/javascripts/",
  urlArgs: 'cb=' + Math.random(),
  paths: {

    spec: '../test/jasmine/spec/'
  }
});

//window.store = "TestStore"; // override local storage store name - for testing

require([], function(){



  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

    specs.push('../test/spec/router');
    specs.push('../test/spec/views/DefaultView');



  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
