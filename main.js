// Generated by purs bundle 0.12.0
var PS = {};
(function(exports) {
    "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Effect.Console"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Effect = PS["Effect"];
  exports["log"] = $foreign.log;
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function(exports) {exports.getArgs = function(index) {
    return process.argv[index];
  };
})(PS["Main"] = PS["Main"] || {});
(function(exports) {
    "use strict";
  var $foreign = PS["Main"];
  var Data_Function = PS["Data.Function"];
  var Effect = PS["Effect"];
  var Effect_Console = PS["Effect.Console"];
  var Prelude = PS["Prelude"];                 
  var main = Effect_Console.log($foreign.getArgs(2));
  exports["main"] = main;
  exports["getArgs"] = $foreign.getArgs;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();