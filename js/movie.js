// php数据请求
// php数据请求
// php数据请求

sec_now=document.getElementById("sec_now");
var ajaxMovie=new XMLHttpRequest;
ajaxMovie.open("get","php/movie_rightnow.php",true);
ajaxMovie.send(null);
ajaxMovie.onreadystatechange = function(){
    if(ajaxMovie.readyState === 4&&ajaxMovie.status === 200){
        var date = JSON.parse(ajaxMovie.responseText);
        var str = "";
        for(var i = 0;i < date.length;i++){
            str+=`
            <li>
                <a href="">
                    <img class="movie_pic" src="img/${date[i].imgurl}" alt="">

                    <div class="movie_produce">
                            <p class="movie_name">
                                    <span>${date[i].movieName}</span><i></i>
                            </p>
                            <p class="${date[i].movieCommentClass}">                          
                                <span class="commit_span">${date[i].movieCommentSpan}</span><i>${date[i].movieCommentI}</i>              
                            </p>
                            <p class="movie_actor">主演：张喆 杨天翔 唐小喜 张喆 杨天翔 唐小喜</p>
                            <p class="movie_statistics">今天297家电影院放映2320场</p>
                    </div>
                    
                    <div class="${date[i].moviebuyClass}">${date[i].movieBuy}</div>                                   
                </a>
            </li>
            
            
            `
        }
        sec_now.innerHTML = str;
    }
}


// 正在热映和即将热映切换
// 正在热映和即将热映切换
// 正在热映和即将热映切换

var rightnow = document.getElementById("rightnow");
var willdo = document.getElementById("willdo");
var sec_now = document.getElementById("sec_now");
var sec_will = document.getElementById("sec_will");

rightnow.onclick = function(){
    sec_now.style.display="block";
    sec_will.style.display="none";

    rightnow.style.color="#a75655";
    willdo.style.color="#5f5f5f";

    rightnow.style.borderBottomColor="#d84f49";
    willdo.style.borderBottomColor="#f2f2f2";
}

willdo.onclick = function(){
    sec_now.style.display="none";
    sec_will.style.display="block";

    willdo.style.color="#a75655";
    rightnow.style.color="#5f5f5f";

    willdo.style.borderBottomColor="#d84f49";
    rightnow.style.borderBottomColor="#f2f2f2";
}





//即将热映中拖拽
//即将热映中拖拽
// var movieMove = document.getElementById("movieMove")
// var movieMoveUl = document.getElementById("movieMoveUl")
// movieMoveUl.onmousedown=function(ev){
//     var x=ev.offsetX;
//     document.onmousemove=function(ev){
//     console.log(x);
//         movieMoveUl.style.left=movieMoveUl.clientX+x-ev.clientX+"rem";
//         movieMoveUl.style.top=0;
    
                
//     }
//     document.onmouseup=function(){
//         document.onmousemove=null;
//     }
// }