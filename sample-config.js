Perch.UserConfig.redactor = function () {
  var get = function (profile, config, field) {
    // remove perchassets plugin
    config.plugins = config.plugins.filter(function (item) {
      return item !== 'perchassets'
    })

    // add inlineperchassets plugin
    if (config.plugins.indexOf('inlineperchassets') === -1) config.plugins.push('inlineperchassets');

    return config;
  };

  var load = function (cb) {
    // load inlineperchassets plugin
    jQuery.getScript(Perch.path + '/addons/plugins/editors/redactor-plugins/pipit_inlineperchassets/inlineperchassets.js', cb);
  };

  return {
    'get': get,
    'load': load
  }

}();