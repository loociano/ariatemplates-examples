{Template {
  $classpath: "examples.onclick.MyTemplate",
  $hasScript: true
}}

  {macro main ()}
    <div {on click { fn : clickHandler} /}> Click me to know what time it is.</div>
  {/macro}

{/Template}