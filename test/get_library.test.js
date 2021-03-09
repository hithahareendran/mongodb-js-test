const lib = require("../get_library.js");

describe("integration test", function () {
  it(' get bookmarks from collection "Library" ',  function () {
    var req = {};
    var res = {};

    /* inputs */
    req.query = {guid : 'auth0|601ab6e57d36cc006af5c94f'};
    
    res.send = function (json) {
    console.log("Result of the query", json);
    };
    
    /* calling the function  to see  for any errors*/
    lib.getLibrary(req, res);

  });
});
