{Template {
    $classpath: "examples.maintain_focus_on_refreshing_section.MyApp",
    $hasScript: true
}}

  {macro main()}

    {section {
        id: "mysection",
        macro: "content",
        bindRefreshTo: [{
            to: "number",
            inside: this.data
        }]
    } /}

  {/macro}

  {macro content()}
    <h1>A random number: ${data.number}!</h1>

    <input {id "name" /} type="text" {on click updateModel /} />
    <input {id "lastname" /} type="text" {on click updateModel /} />
    <input {id "whatever" /} type="text" {on click updateModel /} />
  {/macro}

{/Template}