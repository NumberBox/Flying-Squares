function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var grand_final_shet = 0;
var level_hard_speed = 5;
var level_hard_spawn = 20;
var level_n = 1;
var level_chiclo_block = 1;
var end_game = false;
var total = document.getElementById("total_id");
    

function play_function(){
    let number_block = getRandomInRange(1,9);
    let color_block = "rgb("+getRandomInRange(0,255)+", "+getRandomInRange(0,255)+", "+getRandomInRange(0,255)+")";
    let number_chichlo_block = getRandomInRange(1,1+level_chiclo_block);
    let speed = getRandomInRange(30-level_hard_speed,70-level_hard_speed); 
    
    
    
    
    
    var block = document.createElement("div");
    block.setAttribute("class", "sqares_tab"+number_block);
    block.setAttribute("id", "id_"+number_block);  
    var parent = document.getElementById("child_id");
    
    parent.appendChild(block);
    
    block.style.backgroundColor = color_block;
    block.innerHTML = number_chichlo_block;
    
    
    let z = -400;
    let block_nterval_game_over = setInterval(function(){     
        if(z>=43){
            clearInterval(block_nterval_game_over);
            end_game = true;
            console.log("lose");
            while (document.getElementById("total_id").nextElementSibling) {
                let a = document.getElementById("total_id").nextElementSibling;
                a.parentNode.removeChild(a);
            }
            total.innerHTML = "";
            let end_block = document.getElementById("id_p2_class");
            end_block.innerHTML = "Total = "+grand_final_shet;
            end_block = document.getElementById("scene_gameover_id");
            end_block.style.display = "block";
            end_block = document.getElementById("id_back");
            end_block.style.animationPlayState = "running";
            return;
        }
        block.style.transform = "translateZ("+z+"px)";
        z+=3;
        
    }, speed);
    
    
    
    block.addEventListener("mousedown", function(event){
        let num = block.innerHTML;
        if(num!=1){
            num--;
            block.innerHTML = num;
        }
        else{
            grand_final_shet++;
            total.innerHTML = grand_final_shet;
            block.parentNode.removeChild(block);
            
            if(grand_final_shet>(20*level_n)){
                console.log("level_up");               
                level_hard_spawn+=40;
                level_n++;
                if((level_n%3)==0){
                    console.log("level_up_block");
                    level_chiclo_block++;
                    level_hard_speed+=5;
                }
            }
            console.log(grand_final_shet);

            clearInterval(block_nterval_game_over);
        }
        
        
        

        
//    console.log(event.target);
//    console.log(block.style.backgroundColor);
//    block.style.backgroundColor="#ffffff";

    });
    
    if(end_game===true){
        return;
    }
        
    let time_play = getRandomInRange(500-level_hard_spawn,1000-level_hard_spawn);
    var play = setTimeout(play_function, time_play); 
}

document.addEventListener("DOMContentLoaded", function() {   
    let time_play = getRandomInRange(500,1000);
    var play = setTimeout(play_function, time_play);  
    
});
    

