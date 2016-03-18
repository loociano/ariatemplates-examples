Aria.tplScriptDefinition({
  $classpath: "examples.ajax_call.MyTemplateScript",
  $prototype: {

    doRequest: function() {
      aria.core.IO.asyncRequest({
        url: this.data.url,
        timeout: 2000,
        callback: {
          fn: this.onSuccess,
          scope: this,
          onerror: this.onError,
          onerrorScope: this
        }
      });
    },

    onSuccess: function(responseObject, callbackArguments) {
      this.$json.setValue(this.data, 'response', responseObject.responseText);
    },

    onError: function(responseObject, callbackArguments) {
      this.$json.setValue(this.data, "response", responseObject.error);
    }
  }
});