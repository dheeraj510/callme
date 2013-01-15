describe( "CM.Session", function() {
  
  var SSID = "Test session ID";
  
  describe( "initialize", function() {
    
    it( "Should fail without ssid", function() {
      expect( function() {
        var session = new CM.Session();
      } ).toThrow();
    } );
    
    it( "Should not fail with ssid but without params", function() {
      expect( function() {
        var session = new CM.Session( SSID );
      } ).not.toThrow();
    } );
    
  } );
  
  describe( "connect", function() {
    
    var session;
    
    beforeEach( function() {
      session = new CM.Session( SSID );
    } );
    
    it( "Should be defined", function() {
      expect( session.connect ).toBeDefined();
    } );
    
    // it( "Should create connection", function() {
    //   expect( session.isConnected ).toBeFalsy();
    //   session.connect();
    //   expect( session.isConnected ).toBeTruthy();
    // } );
    
  } );
  
} );