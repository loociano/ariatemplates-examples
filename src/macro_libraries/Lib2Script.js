Aria.tplScriptDefinition({
  $classpath: 'examples.macro_libraries.Lib2Script',
  $prototype: {
    shout: function(word) {
      return word.toUpperCase();
    }
  }
});