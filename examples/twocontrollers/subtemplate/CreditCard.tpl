{Template {
    $classpath: "examples.twocontrollers.subtemplate.CreditCard"
}}

    {macro main()}

      ${this.moduleCtrl.setData(this.data)|eat} // Little nasty trick to pass the data reference to the subcontroller

      <div style="border: 1px solid red; padding: 10px;">

        <h1>Subtemplate</h1>

        <button {on click {
          fn : "decrement",
          scope : moduleCtrl
        }/}>decrement</button>

      </div>
    {/macro}

{/Template}