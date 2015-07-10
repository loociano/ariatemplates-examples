Aria.classDefinition({
	$classpath : "examples.twocontrollers.subtemplate.CreditCardController",
	$extends : "aria.templates.ModuleCtrl",
	$implements : ["examples.twocontrollers.subtemplate.ICreditCardController"],
	$dependencies : ["aria.utils.Json"],
	$constructor : function () {

		// call parent constructor
		this.$ModuleCtrl.constructor.call(this);
	},
	$prototype : {
		// specify the public interface for this module
		$publicInterfaceName : "examples.twocontrollers.subtemplate.ICreditCardController",

		/**
		 * Decrements counter
		 */
		decrement: function(){
			aria.utils.Json.setValue(this._data, "count", this._data.count - 1);
		},

		/**
		 * sets the data 
		 */
		setData: function(data){
			this._data = data;
		}
	}
});