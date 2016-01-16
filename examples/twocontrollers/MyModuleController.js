Aria.classDefinition({
  $classpath: "examples.twocontrollers.MyModuleController",
  $extends: "aria.templates.ModuleCtrl",
  $implements: ["examples.twocontrollers.IMyModuleController"],
  $dependencies: ["aria.utils.Json"],
  $constructor: function() {
    // call parent constructor
    this.$ModuleCtrl.constructor.call(this);
    /**
     * The Data Model
     * @protected
     * @type Object
     */
    this.setData({
      count: 0
    });
  },
  $prototype: {
    // specify the public interface for this module
    $publicInterfaceName: "examples.twocontrollers.IMyModuleController",
    /**
     * Increment the value of the counter inside the data model.
     */
    incrementCount: function() {
      var data = this.getData();
      // same as this._data.count++, but allows other classes to listen to this change
      aria.utils.Json.setValue(data, "count", data.count + 1);
    }
  }
});