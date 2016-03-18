/**
 * Sample widget library.
 */
Aria.classDefinition({
  $classpath : 'examples.hello_widget.MyWidgetLib',
  $extends : 'aria.widgetLibs.WidgetLib',
  $singleton : true,
  $prototype : {
    /**
     * Map of all the widgets in the library. Keys in the map are widget names as they can be used in templates.
     * Values are the corresponding classpaths.
     * @type {Object}
     */
    widgets : {
      "Button" : "examples.hello_widget.widgets.Button"
    }
  }
});