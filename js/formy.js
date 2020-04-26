/*!
 * formy.js v0.0.1
 * Copyright 2018 Conv3rsion
 *
 */

(function(root) {

  var Lib = function(formId) {
    this.formId = formId;
    this.groupFieldsName = '.group-fields';
  }

  // Current version
  Lib.prototype.version = '0.0.1';

  /* --- Internal Helper Methods --- */

  Lib.prototype.add = function(a, b) {
    $(this.formId).html(a + b);
  }
  Lib.prototype.divide = function(a, b) {
    $(this.formId).html(a / b);
  } 


  /* --- Module Definition --- */

  // Export formy for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `formy` to the global object
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = lib;
    }
    exports.Formy = Lib;
  } else if (typeof define === 'function' && define.amd) {
    // Return the library as an AMD module:
    define([], function() {
      return Lib;
    });
  } else {
    // Use Formy.noConflict to restore `Formy` back to its original value.
    // Returns a reference to the library's `Formy` object;
    // e.g. `var numbers = Formy.noConflict();`
    // Lib.noConflict = (function(oldFormy) {
    //  return function() {
    //    // Reset the value of the root's `Formy` variable:
    //    root.Formy = oldAFormy;
    //    // Delete the noConflict method:
    //    Lib.noConflict = undefined;
    //    // Return reference to the library to re-assign it:
    //    return Lib;
    //  };
    // })(root.Formy);

    var oldFormy = root.Formy;

    Lib.noConflict = function() {
      root.formy = oldFormy;
      return Lib;
    };

    // Declare `fx` on the root (global/window) object:
    root['Formy'] = Lib;
  }

}(this));