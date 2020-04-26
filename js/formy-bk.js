/*!
 * formy.js v0.0.1
 * Copyright 2018 Conv3rsion
 *
 */

(function(root) {

  var lib = {};

  // Current version
  lib.version = '0.0.1';

  /* --- Exposed settings --- */
  lib.settings = {
    formId: '',
    formHtml: '',
    groupFieldsName: 'group-fields',
    fields: []
  };

  /* --- Internal Helper Methods --- */

  // Get element(s) by CSS selector:
  window.qs = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };
  window.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector);
  };
  // get ID element
  var getById = function(element) {
    return document.getElementById(element);
  }

  var detectFields = function() {
    lib.settings.fields = getById(lib.settings.formId).
      getElementsByClassName(lib.settings.groupFieldsName);

    return lib.settings.fields;
  }
  
  lib.currentField = 0;
  var listenCurrentFields = function() {
    var fields = detectFields()[lib.currentField]
    console.log(fields.getElementsByTagName('select'));
  }

  /* --- Internal Methods --- */

  // 



  /* --- API Methods --- */

  // Create a new Formy
  lib.create = function(formId) {
    lib.settings.formId = formId;
    lib.settings.formHtml = getById(formId);
    detectFields();
    listenCurrentFields();
  }



  /* --- Module Definition --- */

  // Export formy for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `formy` to the global object
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = lib;
    }
    exports.formy = lib;
  } else if (typeof define === 'function' && define.amd) {
    // Return the library as an AMD module:
    define([], function() {
      return lib;
    });
  } else {
    // Use formy.noConflict to restore `foromy` back to its original value.
    // Returns a reference to the library's `formy` object;
    // e.g. `var numbers = formy.noConflict();`
    // lib.noConflict = (function(oldFormy) {
    //  return function() {
    //    // Reset the value of the root's `formy` variable:
    //    root.formy = oldAFormy;
    //    // Delete the noConflict method:
    //    lib.noConflict = undefined;
    //    // Return reference to the library to re-assign it:
    //    return lib;
    //  };
    // })(root.formy);

    var oldFormy = root.formy;

    lib.noConflict = function() {
      root.formy = oldFormy;
      return lib;
    };

    // Declare `fx` on the root (global/window) object:
    root['formy'] = lib;
  }

}(this));