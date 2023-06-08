describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  }); 

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a row for each server', function () {
    allServers = {
      Bob : 2,
      Carole : 3
    }
    updateServerTable();
    expect(serverTbody.rows.length).toEqual(2);
  })

  afterEach(function() {
    allServers = {};
    serverTbody.innerHTML = '';
    serverNameInput.value = '';
  });



});
