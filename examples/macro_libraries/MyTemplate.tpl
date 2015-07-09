{Template {
    $classpath: "examples.macro_libraries.MyTemplate",
    $macrolibs : {
    	libOne: "examples.macro_libraries.Lib1",
    	libTwo: "examples.macro_libraries.Lib2"
    }
}}
	{var name = "Luciano" /}

    {macro main()}
		{call libOne.sayHello(name) /} <br/>
		{call libTwo.shoutHello(name) /}
    {/macro}

{/Template}