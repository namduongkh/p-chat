import io from "socket.io-client";

var Socket = (function () {
  var instance;

  function createInstance() {
    var object = io("http://localhost:8888");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default Socket