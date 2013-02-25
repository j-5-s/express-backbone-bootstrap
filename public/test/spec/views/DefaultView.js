describe('Views :: DefaultView', function() {
  beforeEach(function() {
    var flag = false,
      that = this;

    require(['views/DefaultView'], function(DefaultView) {
      that.defaultView = new DefaultView();
      flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  it('should contain the text `Default View`', function(){

    expect($(this.defaultView.render().el).text()).toEqual('Default View');


  });
});