{Template {
  $classpath : "examples.ajax_call.MyTemplate",
  $hasScript : true
}}

  {macro main()}
    {@aria:TextField {
      label : "Url for AJAX request",
      labelWidth : 160,
      width : 800,
      bind : {
        value : {
          inside : data,
          to : "url"
        }
      }
    }/}
    <br/>
    {@aria:Button {
      label : "Send Request",
      onclick : doRequest
    }/}

    {section {
      id : "responseContent",
      macro : "content",
      bindRefreshTo : [{
        inside : data,
        to : "response"
      }]
    }/}
  {/macro}

  {macro content()}

    {if (data.response)}
      <div>
        <textarea style="margin: 0px; width: 1024px; height: 768px;">
          ${data.response}
        </textarea>
      </div>
    {/if}

  {/macro}

{/Template}