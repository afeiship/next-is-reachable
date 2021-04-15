(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var net = require('net');
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { timeout: 6 * 1e3, host: 'localhost' };
  // https://github.com/sindresorhus/is-port-reachable/blob/main/index.js

  nx.isReachable = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var socket = new net.Socket();
    return new Promise(function (resolve, reject) {
      var onError = function () {
        socket.destroy();
        resolve(false);
      };

      socket.setTimeout(options.timeout);
      socket.once('error', onError);
      socket.once('timeout', onError);
      socket.connect(options.port, options.host, function () {
        socket.end();
        resolve(true);
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isReachable;
  }
})();
