/* eslint-disable no-undef */
define(['postmonger'], function (Postmonger) {
    'use strict';
  
    let connection = new Postmonger.Session();
    let payload = {};
  
    $(window).ready(onRender);
  
    connection.on('initActivity', initialize);
    connection.on('clickedNext', onClickedNext);
  
    function onRender() {
      connection.trigger('ready');
      connection.trigger('updateButton', {
        button: 'next',
        enabled: true,
        visible: true,
      });
    }
  
  
    function initialize(data) {
      if (data) {
        payload = data;
      }
    }
  
    function onClickedNext() {
      save();
    }
  
    function save() {
  
      payload['metaData'].isConfigured = true;
  
      connection.trigger('updateActivity', payload);
    }
  });
  