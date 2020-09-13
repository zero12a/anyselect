# anyselect

[![GitHub release](https://img.shields.io/github/release/zero12a/anyselect.svg)](https://GitHub.com/zero12a/anyselect/releases/) [![Github all releases](https://img.shields.io/github/downloads/zero12a/anyselect/total.svg)](https://GitHub.com/zero12a/anyselect/releases/) [![Only 5 Kb](https://badge-size.herokuapp.com/zero12a/anyselect/master/dist/anyselect.min.js)](https://github.com/zero12a/anyselect/master/dist/anyselect.min.js)


demo : https://zero12a.github.io/anyselect/

# Dependency
Jquery 1.7+

# Html
```html
<!--jquery-->
<script src="https://code.jquery.com/jquery-3.5.1.min.js" charset="UTF-8"></script>

<!--anyslect library-->
<link href="anyselect.min.css" rel="stylesheet">
<script src="anyselect.min.js" charset="UTF-8"></script>
```

# Usage
```html
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
```
# Property
| Id | Description | Default |
| --- | --- |--- |
| label | Div label name | "Select options" |
| data | Array data. ex> [ {"cd":"cd1","nm":"nm1"}, {"cd":"cd1","nm":"nm1"} ] | "[]"  |
| height | Popup layer height size | "200px" |
| width | Popup layer width size | "150px" |
| list_height | Popup item list's line height | "32px" |
| text_selectall | Popup 'Select all' text | "Select all" |
| text_unselectall | Popup 'Unselect all' text  | "Unselect all" |
