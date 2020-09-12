<html>
<head>
<title> myselect </title>

<!-- Development version -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<style>
    #tooltipB {
        background-color: #333;
        color: white;
        padding: 5px 7px 7px 5px;
        border-radius: 4px;
        font-size: 12px;

        display: none;
    }

    #tooltipB[data-show] {
        display: block;
    }
</style>
</head>
<body>
<div style="width:500px;height:100px;background-color:gray">


</div>

<div style="width:500px;height:100px;background-color:silver">


</div>
<div style="width:500px;height:100px;background-color:gray">

    
<input type="button" id="btnLoadData2" value="loadData2">
<input type="button" id="btnSetValue2" value="setValue2">
<input type="button" id="btnGetValue2" value="getValue2">

</div>
<div style="width:500px;height:100px;background-color:silver">


     <div id="button2" style="cursor:pointer;background-color:yellow;width:150px;">pure btn</div>

</div>

<div id="tooltipB" style="position:absolute;">

    <ul id="ulB" style="list-style-type: none; margin: 0;  padding: 0; ">
        
    </ul>
</div>  

</body>

<script>



$("#button2").click(function(e) {
    alog('button2.click()..........................start');

    //alog(e);
    //alog(e.target);
    var t = $(e.target);

    var obj = t.offset();
    alog("left: " + obj.left + ", top: " + obj.top + ", height: " + t.height() );


    var left = obj.left;
    var top = obj.top + t.height();

    alog("to left =" + left);
    alog("to top =" + top);
    
    var pop = $("#tooltipB");
    pop.css("left",left);
    pop.css("top",top);

    //pop.css("display","block");
    
    toggleB();

});


function toggleB(){
    var pop = $("#tooltipB");

    if(pop.attr('data-show') == null){
        pop.attr('data-show', '');
    }else{
        pop.removeAttr('data-show');
    }
}

$( "#btnGetValue" ).click(function() {
    alog('btnGetValue.click()..........................start');
    var chk1 = $('input[id=chk1]');

    var rtnVal = "";
    for(j=0;j<chk1.length;j++){
        alog("j = " + j);
        alog("chk1 value="+ chk1[j].value);

        if(chk1[j].checked){
            if(rtnVal != "")rtnVal += ",";
            rtnVal += chk1[j].value;
        } 
       
    }
    alert(rtnVal);
});

$( "#btnGetValue2" ).click(function() {
    alog('btnGetValue2.click()..........................start');
    var chk1 = $('input[id=chkB]');

    var rtnVal = "";
    for(j=0;j<chk1.length;j++){
        alog("j = " + j);
        alog("chk1 value="+ chk1[j].value);

        if(chk1[j].checked){
            if(rtnVal != "")rtnVal += ",";
            rtnVal += chk1[j].value;
        } 
       
    }
    alert(rtnVal);
});




$( "#btnSetValue2" ).click(function() {
    alog('btnSetValue2.click()..........................start');
    var chk1 = $('input[id=chkB]');

    var setVal = ["value1","value2"];

    for(j=0;j<chk1.length;j++){
        alog("j = " + j);
        alog("chk1 value="+ chk1[j].value);
        chk1[j].checked = false;//체크해제

        for(t=0;t<setVal.length;t++){
            if(setVal[t] == chk1[j].value){
                chk1[j].checked = true;
            }
        }
    }
});


$( "#btnLoadData2" ).click(function() {
    $("#ulB").empty();
    $("#ulB").append('<li id="liSelectAllB" style="cursor:pointer;"><input id="chkSelectAllB" type="checkbox">Select all</li>');
    for(j=0;j<10;j++){
        $("#ulB").append('<li id="liB" style="cursor:pointer;background-color:blue;"><input id="chkB" value="value' + j + '" type="checkbox">I m a tooltip' + j + '</li>');
    }

    $("#chkSelectAllB").click(function(){
        alog('chkSelectAll.click()..........................start');
        $("input[id=chkB]").prop('checked', $(this).prop('checked'));
    });

});



$(document).on('click touchend', function(e){
    alog('document.clickB()..........................start');

    var liSelectAll = $('#liSelectAllB');
    var chkSelectAll = $('#chkSelectAllB');
    var chk1 = $('input[id=chkB]');
    var li2 = $('li[id=liB]');
    // alog(chkSelectAll);
    //alog(chk1.length);
    //alog(li2.length);

    var target = $(e.target);

    var tooltipB = $("#tooltipB");
    var buttonB = $("#button2");

    //alog(target);
    if(target.is(tooltipB)){
        alog(1);
    }else if(target.is(buttonB)){
        alog(2);
    }else if(target.is(liSelectAll)){
        alog(3);
        alog(chkSelectAll.prop('checked'));
        if(chkSelectAll.prop('checked')){
            chkSelectAll.prop('checked',false);
        }else{
            chkSelectAll.prop('checked',true);
        }
        $("input[id=chkB]").prop('checked', chkSelectAll.prop('checked'));
        
    }else if(target.is(chkSelectAll)){
        alog(4);
    }else{
        alog(5);
        for(j=0;j<chk1.length;j++){
            //alog("j = " + j);
            if(target.is(chk1[j])){
                //alog(chk1[j].checked);
                return; 
            }
        }
        alog(6);
        for(i=0;i<li2.length;i++){
            //alog("i = " + i);
            if(target.is(li2[i])){
                //alog(chk1[i].checked);
                if(chk1[i].checked){
                    chk1[i].checked = false;
                }else{
                    chk1[i].checked = true;
                }
                return; 
            }
        }

        alog(7);
        if(tooltipB.attr('data-show') != null){
            toggleB();
        }
    }
;})  







function alog(t){
    if(console)console.log(t);
}
</script>

</html>

