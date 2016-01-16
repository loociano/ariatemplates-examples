Aria.interfaceDefinition({
  $classpath: "examples.controller.IMyModuleController",
  $extends: 'aria.templates.IModuleCtrl',
  $interface: {
    /**
     * Increment the value of the counter inside the data model.
     */
    incrementCount: function() {}
  }
});