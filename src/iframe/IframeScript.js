Aria.tplScriptDefinition({
  $classpath: 'examples.iframe.IframeScript',
  $constructor: function() {},
  $prototype: {
    $dataReady: function() {
      window.showSpinner = this.showSpinner; // Attach fn reference to the Window Object
    },
    showSpinner: function(evt, args) {
      alert('Parent executing function');
    }
  }
});