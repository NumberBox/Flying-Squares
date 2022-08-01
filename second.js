function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var origin_hor = 50;
var origin_ver = 50;
var swetofor = false;

var grand_final_shet = 0;
var level_hard_speed = 5;
var level_hard_spawn = 20;
var level_n = 1;
var end_game = false;
   

function game_over(){
        if(end_game)
            return;
        while (document.getElementById("last_element_id").nextElementSibling) {
            let a = document.getElementById("last_element_id").nextElementSibling;
            a.parentNode.removeChild(a);
        }
        let end_block = document.getElementById("id_p2_class");
        end_block.innerHTML = "Total = "+grand_final_shet;
        end_block = document.getElementById("scene_gameover_id");
        end_block.style.display = "block";
        end_block = document.getElementById("id_back");
        end_block.style.animationPlayState = "running";
        let t = document.getElementById("glav_grid_id");
        t.style.perspectiveOrigin = 50+"% "+50+"%";
}

function play_function(){
    let number_block = getRandomInRange(1,9);
    let color_block = "rgb("+getRandomInRange(0,255)+", "+getRandomInRange(0,255)+", "+getRandomInRange(0,255)+")";  
    let speed = getRandomInRange(30-level_hard_speed,70-level_hard_speed); 
    
    
       
    var block = document.createElement("div");
    block.setAttribute("class", "sqares_tab"+number_block);
    block.setAttribute("id", "id_"+number_block);  
    var parent = document.getElementById("child_id"); 
    parent.appendChild(block);
        
    block.style.backgroundColor = color_block;
       
    let z = -400;
    let block_nterval_game_over = setInterval(function(){     
        if(z>=43){
            grand_final_shet++;
            console.log(grand_final_shet);
            if(grand_final_shet>(20*level_n)){
                console.log("level_up");               
                level_hard_spawn+=70;
                level_n++;
                if((level_n%2)==0){
                   level_hard_speed+=5; 
                }
            }
            clearInterval(block_nterval_game_over);

            
            if ((block.className === "sqares_tab1") && (origin_hor === 35) && (origin_ver === 35)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab2") && (origin_hor === 50) && (origin_ver === 35)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab3") && (origin_hor === 65) && (origin_ver === 35)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab4") && (origin_hor === 35) && (origin_ver === 50)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab5") && (origin_hor === 50) && (origin_ver === 50)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab6") && (origin_hor === 65) && (origin_ver === 50)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab7") && (origin_hor === 35) && (origin_ver === 65)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab8") && (origin_hor === 50) && (origin_ver === 65)){
                game_over();
                end_game = true;
            }
            if ((block.className === "sqares_tab9") && (origin_hor === 65) && (origin_ver === 65)){
                game_over();
                end_game = true;
            }
            try{
                block.parentNode.removeChild(block);
            }
            catch{
                
            }
            
        }
        else{
            block.style.transform = "translateZ("+z+"px)";
            z+=3;
        }
        
    }, speed);
    
    
    if(end_game===true){   
        let a = document.getElementById("child_id").lastChild;
        a.parentNode.removeChild(a);
        return;
    }
    else{      
        let time_play = getRandomInRange(500-level_hard_spawn,1000-level_hard_spawn);
        var play = setTimeout(play_function, time_play); 
    }
}

document.addEventListener("DOMContentLoaded", function() {  
    
    let top = document.getElementById("id_top");
    top.style.backgroundSize = "100px 865px"; //100 865
    top = document.getElementById("id_right");
    top.style.backgroundSize = "870px 110px"; //870 110
    top = document.getElementById("id_bottom");
    top.style.backgroundSize = "100px 865px";
    top = document.getElementById("last_element_id");
    top.style.backgroundSize = "870px 110px";
    

    
    let time_play = getRandomInRange(500,1000);
    var play = setTimeout(play_function, time_play);  
    
    
});
    
    

document.addEventListener("keydown", function(event){
        if(event.key==="ArrowLeft"){
            if(swetofor||end_game)
                return;
            let t = document.getElementById("glav_grid_id");
            let origin_hor_let = origin_hor;
            let origin_ver_let = origin_ver;
            if(origin_hor_let===35)
                return;
            let loop = setInterval(function(){
                if(origin_hor_let-15!=origin_hor){
                    origin_hor--;
                    t.style.perspectiveOrigin = (origin_hor)+"% "+(origin_ver)+"%";
                    swetofor = true;
                }
                else{
                    swetofor = false;
                    clearInterval(loop);
                }
            }, 7);
        }
        if(event.key==="ArrowRight"){   
            if(swetofor||end_game)
                return;
            var t = document.getElementById("glav_grid_id");
            let origin_hor_let = origin_hor;
            let origin_ver_let = origin_ver;
            if(origin_hor_let===65)
                return;
            var loop = setInterval(function(){
                if(origin_hor_let+15!=origin_hor){
                    origin_hor++;
                    t.style.perspectiveOrigin = (origin_hor)+"% "+(origin_ver)+"%";
                    swetofor = true;
                }
                else{
                    swetofor = false;
                    clearInterval(loop);
                }
            }, 7);
        }
        if(event.key==="ArrowUp"){   
            if(swetofor||end_game)
                return;
            var t = document.getElementById("glav_grid_id");
            let origin_hor_let = origin_hor;
            let origin_ver_let = origin_ver;
            if(origin_ver_let===35)
                return;
            var loop = setInterval(function(){
                if(origin_ver_let-15!=origin_ver){
                    origin_ver--;
                    t.style.perspectiveOrigin = (origin_hor)+"% "+(origin_ver)+"%";
                    swetofor = true;
                }
                else{
                    swetofor = false;
                    clearInterval(loop);
                }
            }, 7);
        }
        if(event.key==="ArrowDown"){   
            if(swetofor||end_game)
                return;
            var t = document.getElementById("glav_grid_id");
            let origin_hor_let = origin_hor;
            let origin_ver_let = origin_ver;
            if(origin_ver_let===65)
                return;
            var loop = setInterval(function(){
                if(origin_ver_let+15!=origin_ver){
                    origin_ver++;
                    t.style.perspectiveOrigin = (origin_hor)+"% "+(origin_ver)+"%";
                    swetofor = true;
                }
                else{
                    swetofor = false;
                    clearInterval(loop);
                }
            }, 7);
        }
    
    });


//    var a = document.getElementById("id_1");
//    a.addEventListener("mousedown", function(event){
//    console.log(event.target);
//    console.log(a.style.backgroundColor);
//    if(a.style.backgroundColor==="rgb(255, 255, 255)"){ 
//        a.style.backgroundColor="#8b0000";
//    }
//    else{
//        a.style.backgroundColor="#ffffff";
//    }
//});



    
//document.addEventListener("click", function(event){
//            t = document.getElementById("id_1");
//            t.style.backgroundColor = "#ffffff"; 
//            console.log(event.target);
//    console.log(event.type);
//    });
