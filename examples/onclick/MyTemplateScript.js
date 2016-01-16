Aria.tplScriptDefinition({
  $classpath: 'examples.onclick.MyTemplateScript',
  $prototype: {
    clickHandler: function() {
      var time = new Date();
      alert("It is " + time.toTimeString());
    }
  }
});