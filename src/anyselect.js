/*
https://github.com/zero12a/anyselect

version : 1.0.1
*/
var anyselect = anyselect || {};

anyselect = function (obj,cfg){
    alog("anyselect()................................start");

    var self = this;// Can't use this inside the function

    //pop 레이서 생성
    //alog(obj);
    this.cfg = cfg;

    //설정 관련
    if(this.cfg.label === undefined)this.cfg.label = "Select options";
    if(this.cfg.data === undefined)this.cfg.data = [];
    if(this.cfg.height === undefined)this.cfg.height = "200px";
    if(this.cfg.width === undefined)this.cfg.width = "150px";
    if(this.cfg.list_height === undefined)this.cfg.list_height = "32px";
    if(this.cfg.text_selectall === undefined)this.cfg.text_selectall = "Select all";
    if(this.cfg.text_unselectall === undefined)this.cfg.text_unselectall = "Unselect all";

    //alog("this.cfg.text_selectall="  + this.cfg.text_selectall);
    

    //오브젝트 관련
    this.obj = obj;
    this.obj_id = obj.attr('id');
    this.pop_div_id = this.obj_id + "_div";
    this.pop_selectall_div_id = this.obj_id + "_selectall_div";
    this.is_pop_selectall = false;
    //this.pop_selectall_chk_id = this.obj_id + "_selectall_chk";
    this.pop_ul_id = this.obj_id + "_ul";
    this.pop_li_id = this.obj_id + "_li";
    this.pop_chk_id = this.obj_id+ "_chk";


    //오브젝트 속성 변경하기
    obj.addClass( 'anyselectParent' );
    obj.css("cursor","pointer");
    obj.css("overflow","hidden");
    if(obj.css("position") != "static" && console)console.warn("Recommend myframe.anyselect div position is static.");

    //alert(obj.width());
    //obj.css("width", obj.width()); //가로사이즈 안 늘어나게 고정 시키기
    //obj.css("height", obj.height()); //세로사이즈 안 늘어나게 고정 시키기
    
    //오브젝트 내부에 텍스트 child오브젝트 생성하기
    obj.html("<div class='anyselectLabel'>" + this.cfg.label + "</div>");
    alog(obj.children().html());

    //팝업 html생성
    var pop = '<div class="anyselect" id="' + this.pop_div_id + '" style="height:' + this.cfg.height + ';width:' + this.cfg.width + ';">';
    pop += '<div class="anyselectSelectAllDiv" id=' + this.pop_selectall_div_id + ' style="line-height:' + this.cfg.list_height + ';height:' + this.cfg.list_height + ';">' + this.cfg.text_selectall + '</div>';
    pop += '<ul id="' + this.pop_ul_id + '" class="anyselectUl"></ul>';
    pop += '</div>';

    $('body').append(pop);



    //check all event
    $("#" + this.pop_selectall_div_id).click(function(e){
        alog('chkSelectAllDiv.click()..........................start');
        //chkObj = $("#" + self.pop_selectall_chk_id);
        //chkObj.prop('checked', !chkObj.prop('checked'));
        var obj2 = $(e.target);

        if(self.is_pop_selectall){
            self.is_pop_selectall = false;
            obj2.html(self.cfg.text_selectall);
        }else{
            self.is_pop_selectall = true;
            obj2.html(self.cfg.text_unselectall);
        }
        $("input[id=" + self.pop_chk_id + "").prop('checked', self.is_pop_selectall);

        self.makeLabel();
    });

    this.makeLabel = function(){
        alog("makeLabel()...........................start");

        var label = this.getLabel();
        if(label==""){
            this.obj.children().html(this.cfg.label);
        }else{
            this.obj.children().html(this.getLabel());
        }

        alog("obj.width = " + this.obj.width() + ", obj.child.width = " + this.obj.children().width());
        if(this.obj.width() < this.obj.children().width()){
            var label = this.getSelectedCount() + " selected.";
            this.obj.children().html(label);
        }
    };

    this.getSelectedCount = function(){
        alog("getSelectedCount()...........................start");
        return $('input[id=' + this.pop_chk_id + ']:checked').length;
    }

    this.getLabel = function(){
        alog("getLabel()...........................start");

        var chk1 = $('input[id=' + this.pop_chk_id + ']');

        var rtnVal = "";
    
        for(j=0;j<chk1.length;j++){
            //alog("j = " + j);
            if(chk1[j].checked){
                if(rtnVal != "")rtnVal += ", ";
                //alog(chk1[j]);
                //alog(chk1[j].parent("li"));
                //alog($(chk1[j]).parent("li"));

                rtnVal += $(chk1[j]).parent("li").text();
            }
        }
        return rtnVal;
    };

    this.loadData = function(t){
        alog("loadData()...........................start");
        //전체 선택 체크 해제
        $("#" + this.pop_selectall_chk_id).prop('checked',false);
       
        $("#" + this.pop_ul_id).empty();//데이터 비우기
        for(j=0;j<t.length;j++){
            cd = t[j].cd;
            nm = t[j].nm;
            $("#" + this.pop_ul_id).append('<li class="anyselectLi" id="' + this.pop_li_id + '" style="line-height:' + this.cfg.list_height + ';height:' + this.cfg.list_height + ';"><input id="' + this.pop_chk_id + '" value="' + cd + '" type="checkbox">' + nm + '</li>');
        }

        //li click event
        $("li[id=" + this.pop_li_id + "]").click(function(e){
            alog('li.click()..........................start');
            //alog(e);
            //alog(e.target);
            var liObj = $(e.target);
            //alog(liObj.children());
            if(liObj.children().length > 0){
                //alog(liObj.children('input'));
                childObj = liObj.children('input')[0];

                if(childObj.checked){
                    childObj.checked = false;
                }else{
                    childObj.checked = true;
                }

                self.makeLabel();
            }
        });

        //li click event
        $("input[id=" + this.pop_chk_id + "]").click(function(e){
            alog('chk.click()..........................start');

            self.makeLabel();
        });

        //make labe
        this.makeLabel();
    };
    

    this.setValue = function(t){
        alog("setValue()...........................start");

        var chk1 = $('input[id=' + this.pop_chk_id + ']');

        var setVal = t.split(",");
    
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
        
        this.makeLabel(); //라벨 갱신
    };
    

    //data있으면 목록 생성
    if(cfg.data.length > 0){
        this.loadData(cfg.data);
    }

    this.getValue = function(){
        alog("getValue()...........................start");

        var chk1 = $('input[id=' + this.pop_chk_id + ']');

        var rtnVal = "";
    
        for(j=0;j<chk1.length;j++){
            alog("j = " + j);
            if(chk1[j].checked){
                if(rtnVal != "")rtnVal += ",";
                rtnVal += chk1[j].value
            }
        }
        return rtnVal;
    };



    this.click = function(){
        alog("click()...........................start");

        this.toggle();
    };

    this.toggle = function(){
        alog("obj.toggle()...........................start");


        var objoffset = this.obj.offset();
        alog("left: " + objoffset.left + ", top: " + objoffset.top + ", height: " + this.obj.height() );
    
    
        var left = objoffset.left;
        var top = objoffset.top + this.obj.height() + 2;
    
        alog("to left =" + left);
        alog("to top =" + top);
        
        alog("self.pop_div_id = " + this.pop_div_id);
        var pop = $("#" + this.pop_div_id);
        alog(pop);        
        pop.css("left",left);
        pop.css("top",top);

        if(pop.attr('data-show') == null){
            pop.attr('data-show', '');
        }else{
            pop.removeAttr('data-show');
        }        
    };

    obj.click(function() {
        alog("obj.click()...........................start");
        self.click();
    });

    //내 오브젝트들이 아니고 그외의 영역 클릭하면 토글해서 숨기기
    $(document).on('click touchend', function(e){
        alog('document.click()..........................start');
    
        
        var obj_btn = $("#" + self.obj_id);
        var obj_pop_div = $("#" + self.pop_div_id);
        var obj_pop_selectall_div = $("#" + self.pop_selectall_div_id);
        //var obj_pop_selectall_chk = $("#" + self.pop_selectall_chk_id);
        var obj_pop_li = $("li[id=" + self.pop_li_id + "]");
        var obj_pop_chk = $("input[id=" + self.pop_chk_id + "]");
    
        var target = $(e.target);
    
        //alog(target);
        if(target.is(obj_btn)){
            alog(11);
        }else if(target.is(obj_btn.children())){
            alog(12);
        }else if(target.is(obj_pop_div)){
            alog(20);
        }else if(target.is(obj_pop_selectall_div)){
            alog(30);
        //}else if(target.is(obj_pop_selectall_chk)){
        //    alog(4);
        }else if(target.is(obj_pop_li)){
            alog(50);
        }else if(target.is(obj_pop_chk)){
            alog(60);
        }else{
            alog(70);
            for(j=0;j<obj_pop_li.length;j++){
                //alog("j = " + j);
                if(target.is(obj_pop_li[j])){
                    //alog(chk1[j].checked);
                    return; 
                }
            }
            alog(80);
            for(i=0;i<obj_pop_chk.length;i++){
                //alog("i = " + i);
                if(target.is(obj_pop_chk[i]))return; 
            }
    
            alog(90);

            var pop = $("#" + self.pop_div_id);
            if(pop.attr('data-show') != null) pop.removeAttr('data-show'); //숨기기
        }
    ;})  
    

}