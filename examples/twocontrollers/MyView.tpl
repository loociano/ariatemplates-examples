{Template {
    $classpath: "examples.twocontrollers.MyView"
}}

  {macro main()}

    <h1>Two controllers</h1>

    <p>This example shows how to load a template within a template</p>

    <p>The subtemplate has its own controller. The subcontroller normally handles its own data,
    but in this example the data reference is passed to the subcontroller.</p>

    <p>Hence, in this example both controllers have access to the same data model. Both modify the same counter.</p>

    {section {
      id : 'mySection',
      macro : 'macroContent',
      type : 'div',
      bindRefreshTo : [{
        to : "count",
        inside : data
      }]
    }/}

    <button{on click {
      fn : "incrementCount",
      scope : moduleCtrl
    }/}>increment</button>

    <div>
      {@aria:Template {
            defaultTemplate: "examples.twocontrollers.subtemplate.CreditCard",
            data: data,
            moduleCtrl: {
                classpath: "examples.twocontrollers.subtemplate.CreditCardController"
            }
        }/}
    </div>

  {/macro}

  {macro macroContent()}
    Count : ${data.count}
  {/macro}

{/Template}