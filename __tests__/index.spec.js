(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isReachable localhost:8081 should get false', function (done) {
      nx.isReachable({ port: 8081 }).then((res) => {
        console.log(res);
        done();
      });
    });

    test('www.baidu.com shoud 443/80 get true', (done) => {
      Promise.all([
        nx.isReachable({ port: 80, host: 'www.baidu.com' }),
        nx.isReachable({ port: 443, host: 'www.baidu.com' })
      ]).then((res) => {
        expect(res).toEqual([true, true]);
        done();
      });
    });
  });
})();
