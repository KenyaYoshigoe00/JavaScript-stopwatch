let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let hyouji = document.getElementById("time");
let Interval

function count_number(){
  if (minutes != 59){
    if(seconds != 59){
      if(milliseconds != 9){
        milliseconds += 1
      }else{
        milliseconds = 0;
        seconds += 1;
      }
    }else{
      if(milliseconds != 9){
        milliseconds += 1
      }else{
        milliseconds = 0;
        seconds = 0;
        minutes += 1;
      }
    }
  }else{
    if(seconds != 59){
      if(milliseconds != 9){
        milliseconds +=1
      }else{
        milliseconds = 0;
        seconds +=1;
      }
    }else{
      if(milliseconds != 9){
        milliseconds +=1
      }else{
        milliseconds =0;
        seconds = 0;
        minutes = 0;
        hours += 1;
      }
    }
  }
  hyouji.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  }

function start(){
  document.getElementById("button_start").disabled = true;
  document.getElementById("button_stop").disabled = false;
  document.getElementById("button_reset").disabled = false;
  Interval = setInterval(count_number, 100);
  
}

function stop(){
  document.getElementById("button_stop").disabled = true;
  document.getElementById("button_start").disabled = false;
  clearInterval(Interval);
}

function reset(){
  document.getElementById("button_reset").disabled = true;
  document.getElementById("button_stop").disabled = true;
  document.getElementById("button_start").disabled = false;
  hyouji.innerHTML = "0:0:0:0";
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}

