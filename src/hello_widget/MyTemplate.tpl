{Template {
  $classpath : 'examples.hello_widget.MyTemplate',
  $wlibs : {
    'mylib' : 'examples.hello_widget.MyWidgetLib'
  }
}}

  {macro main()}

    {@mylib:Button {
      label: 'Hello Button!'
    } /}

  {/macro}

{/Template}