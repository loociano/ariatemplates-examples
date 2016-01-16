Aria.tplScriptDefinition({
  $classpath: "examples.maintain_focus_on_refreshing_section.MyAppScript",
  $constructor: function() {
    /**
     * Stores the id of the focused element.
     * Requires id to be dynamically set by AT with {id "myid" /} syntax.
     */
    this.focusedEltId = null;
  },
  $prototype: {
    updateModel: function() {
      this.$json.setValue(this.data, "number", Math.random());
    },
    $beforeRefresh: function(args) {
      if (args.section) {
        this.focusedEltId = document.activeElement.id.slice(this.$getId().length);
      }
    },
    $afterRefresh: function(args) {
      if (args.section) {
        this.$focus(this.focusedEltId);
      }
    }
  }
});