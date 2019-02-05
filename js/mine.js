// 登录方式切换


var meituan = document.getElementById("meituan");
var shouji = document.getElementById("shouji");
var mine_secbox_meituan = document.getElementById("mine_secbox_meituan");
var mine_secbox_shouji = document.getElementById("mine_secbox_shouji");

meituan.onclick = function(){
    mine_secbox_meituan.style.display="block";
    mine_secbox_shouji.style.display="none";

    meituan.style.color="#a75655";
    shouji.style.color="#5f5f5f";

    meituan.style.borderBottomColor="#d84f49";
    shouji.style.borderBottomColor="#f2f2f2";
}

shouji.onclick = function(){
    mine_secbox_meituan.style.display="none";
    mine_secbox_shouji.style.display="block";

    shouji.style.color="#a75655";
    meituan.style.color="#5f5f5f";

    shouji.style.borderBottomColor="#d84f49";
    meituan.style.borderBottomColor="#f2f2f2";
}


// 
var mine_input_zhanghao = document.getElementById("mine_input_zhanghao");
var mine_input_mima = document.getElementById("mine_input_mima");
mine_input_zhanghao.onclick=function(){
    this.style.background = "#e2e2e2";
    mine_input_mima.style.background = "#fff";

}
mine_input_mima.onclick=function(){
    this.style.background = "#e2e2e2";
    mine_input_zhanghao.style.background = "#fff";

}

