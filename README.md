# anyselect

demo : https://zero12a.github.io/anyselect/

# Dependency
Jquery 1.7+

# Html
<pre>
<code>

    <!--jquery-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" charset="UTF-8"></script>

    <!--anyslect library-->
    <link href="anyselect.min.css" rel="stylesheet">
    <script src="anyselect.min.js" charset="UTF-8"></script>


</code>
</pre>


# Usage
<pre>
<code>

    <div id="anyselectDiv"></div>

    <script>
    var config = {
        label: 'Select options3'
        ,text_selectall : 'Select all.' 
        ,text_unselectall : 'Unselect all'
        ,data: [
            {cd:"cd1", nm:"nm1"}
            ,{cd:"cd2", nm:"nm2"}
            ,{cd:"cd3", nm:"nm3"}
            ,{cd:"cd4", nm:"nm4"}
            ,{cd:"cd5", nm:"nm5"}
        ]
    };

    var objAnyselect = new anyselect($("#anyselectDiv"),config);
    </script>
</code>
</pre>
