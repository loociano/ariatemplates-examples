Aria.beanDefinitions({
  $package : "examples.hello_widget.LibCfgBeans",
  $description : "Widget Lib config beans",
  $namespaces : {
    "json" : "aria.core.JsonTypes"
  },
  $beans : {
    "ButtonCfg" : {
      $type : "json:Object",
      $description : "Configuration of the slider widget.",
      $properties : {
        label : {
          $type : "json:String",
          $description : "Label for the button",
          $mandatory: true
        }
      }
    }
  }
});