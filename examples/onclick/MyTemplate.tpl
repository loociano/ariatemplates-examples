{Template {
  $classpath: "examples.onclick.MyTemplate",
  $hasScript: true
}}

    {macro main ()}
        <div {on click { fn : clickHandler} /}> What time is it?</div>
    {/macro}

{/Template}