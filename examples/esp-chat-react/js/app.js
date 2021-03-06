"use strict";

// This file bootstraps the entire application.
var ChatApp = require('./components/ChatApp.react');
var ChatExampleData = require('./ChatExampleData');
var model = require('./model');
var modelRouter = require('./model/modelRouter');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

ChatExampleData.init(); // load example data into localstorage

React.render(
    <ChatApp />,
    document.getElementById('react')
);

var modelBootstrapper = new model.ModelBootstrapper();
modelBootstrapper.start();

modelRouter.publishEvent("initEvent", {});