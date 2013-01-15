;( function( W ) {
  
  var CM = W.CM = W.CM || {};
  
  CM.Transport = new Class({
    
    /*@Abstract*/
    
    Implements: [ OnEvents, Options ],
    
    initialize: function( options ) {
      this.setOptions( options );
      this.is_connected = false;
    },
    
    connect: function( callback, errback ) {
      
    },
    
    disconnect: function( callback ) {
      
    },
    
    isConnected: function() {
      return this.is_connected;
    },
    
    send: function( data, params ) {
      
    },
    
    receive: function( data ) {
      
    }
    
  });
  
} )( window );