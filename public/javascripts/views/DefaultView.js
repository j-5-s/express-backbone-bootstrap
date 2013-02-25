define([], function() {
  var DefaultView = Backbone.View.extend({
    tagName: 'p',
    initialize: function() {

    },
    render: function() {
      this.$el.html('Default View');
      return this;
    }

  });
  return DefaultView;
});