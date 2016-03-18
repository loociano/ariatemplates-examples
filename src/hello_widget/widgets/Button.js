Aria.classDefinition({
  $classpath : 'examples.hello_widget.widgets.Button',
  $extends : 'aria.widgetLibs.BaseWidget',
  $css : ['examples.hello_widget.widgets.ButtonCSS'],
  $dependencies : ['examples.hello_widget.LibCfgBeans', 'aria.utils.Event'],
  $statics : {
    INVALID_CONFIGURATION : "%1Invalid configuration!"
  },

  $constructor : function (cfg, context, lineNumber) {

    this.$BaseWidget.constructor.apply(this, arguments);

    // Check the configuration and add default values:
    var normalizeArg = {
      beanName : "examples.hello_widget.LibCfgBeans.ButtonCfg",
      json : this._cfg
    };

    try {
      this._cfgOk = aria.core.JsonValidator.normalize(normalizeArg, true);
    } catch (e) {
      this.$logError(this.INVALID_CONFIGURATION, null, e);
    }

    if (!this._cfgOk) {
      return;
    }

    this._label = this._cfg.label;

    /**
     * Id generated for the button DOM element of the slider.
     * @type String
     */
    this._domId = this._createDynamicId();

    this._domElt = null;
  },

  $destructor : function () {
    this._domId = null;
    this.$BaseWidget.$destructor.call(this);
  },

  $prototype : {

    /**
     * Main widget entry-point, called by the widget library. Write the markup of the slider.
     * @param {aria.templates.MarkupWriter} out
     */
    writeMarkup : function (out) {

      if (!this._cfgOk) {
        // configuration was incorrect, do not generate any markup in this case
        return;
      }
      var html = ['<a href="#" id="', this._domId, '" class="button"><span>', this._label, '</span></a>'];
      out.write(html.join(''));
    },

    /**
     * Initialization method called after the markup of the widget has been inserted in the DOM.
     * This method attaches a listener on click to the DOM element.
     */
    initWidget : function () {
      // Here the markup of the widget is ready in the DOM.
      this._domElt = aria.utils.Dom.getElementById(this._domId);

      aria.utils.Event.addListener(this._domElt, "click", {
        fn : this._onButtonClick,
        scope : this
      }, true);

    },

    _onButtonClick: function(){
      alert('clicked!');
    }
  }
});