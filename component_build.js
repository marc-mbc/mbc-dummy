'use strict';
module.exports = function (config) {
  return require('bdgt-web-component-builder')({
    tools: config.tools || {},
    name: config.wc_name,
    web_component_root: config.root,
    dist_path: '/public/assets',
    subfolder: 'web_component_dist/' + config.wc_name,
    dependences: [],
    main_root: config.main_root || config.root || '.'
  });
};