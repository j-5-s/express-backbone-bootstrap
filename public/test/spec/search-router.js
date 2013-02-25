describe('Search Router', function() {

  beforeEach(function() {
    var flag = false,
      that = this;

    require(['search-app', 'Backbone'], function(SearchRouter, Backbone) {
      //needed for multiple routers
      if (typeof Backbone.history !== 'undefined') {
        Backbone.history.stop();
      }
      that.searchApp = new SearchRouter.initialize();
      flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  it('should be defined', function(){
    expect(this.searchApp).toBeDefined();
  });
});