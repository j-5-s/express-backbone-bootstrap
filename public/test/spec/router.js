describe('App Router', function() {
  beforeEach(function() {
    var flag = false,
      that = this;

    require(['app'], function(AppRouter) {
      //needed for multiple routers
      if (typeof Backbone.history !== 'undefined') {
       // Backbone.history.stop();
      }
      that.app = new AppRouter.initialize();
      flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  it('should be defined', function(){

    expect(this.app).toBeDefined();
  });
});