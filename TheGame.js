var c = 0;
var t;
var timer_is_on = 0;
var milSecs="";

function timedCount() {
    document.getElementById("timer").innerHTML = ++c;
    c = c + 1;
    var milSecs = c;
    t = setTimeout(function(){ timedCount() }, 1);
   document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds";
            document.getElementById("timer").style.fontWeight = "bold";
            document.getElementById("timer").style.fontSize= "1.5em";
            if (milSecs < 100) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Excellent!"
            } else if (milSecs >100 && milSecs <200) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Nat bad :D";
            } else if (milSecs >=200 && milSecs <300) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Could be better!";
            } else if  (milSecs >=300 && milSecs <400) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>You should get some practice!"
            } else if (milSecs >=400 && milSecs < 500) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>More coffee, please!"   
            } else if (milSecs >= 500 && milSecs < 600) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Seriously?!" 
            } else if (milSecs >= 600 && milSecs < 700) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>What took you so long?"     
            } else if  (milSecs >= 700 && milSecs < 800) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Is your internet that slow again?"     
            }  else if (milSecs >= 800 && milSecs < 900) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Did you take a break for a meal?"     
            }  else if (milSecs >= 900 && milSecs < 1000) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Time is merciless."     
            }                 else if (milSecs >= 1000) {
                document.getElementById("timer").innerHTML = "Your time: " + milSecs + " milliseconds.<br>Are you still there?"     
            }  
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
     
               
}
    
    function changeRandom() {
            var color = "#";
                for (k = 0; k < 3; k++) {
                color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
                    }
            var randomColor = color;
            document.getElementById("random").style.backgroundColor = randomColor;

            if (randomColor == "#FFFFFF") {
              document.getElementById("random").style.borderWidth = "1px";
            } else {
                document.getElementById("random").style.borderWidth = 0;
            }

            // size
            var rdmSize = "";
            randomSize = Math.floor((Math.random() * 150) + 20)+ "px";           
            document.getElementById("random").style.width = randomSize;
            document.getElementById("random").style.height = randomSize; 

            var randomNumber ="";
            randomNumber = Math.floor((Math.random() * 2) + 1);
            
            // circle or square
             if (Math.random() > 0.5) {
                document.getElementById("random").style.borderRadius = "50%"
            } else {
                document.getElementById("random").style.borderRadius = "0";
            };

            // var randomPosition;        
            // for (var i = 0; i <4; i++){
            //     i = Math.floor((Math.random() * 200) + 1)+ "px";
            //     randomPosition = i;
            // };

            var randomPositionX = Math.floor((Math.random() * 200) + 1)+ "px";
            var randomPositionY = Math.floor((Math.random() * 200) + 1)+ "px";
           
            // document.getElementById("random").style.position = "relative";
            // document.getElementById("random").style.left = randomPosition;
            // document.getElementById("random").style.top = randomPosition;
            // document.getElementById("random").style.right = randomPosition;
            // document.getElementById("random").style.bottom = randomPosition;        
        
            document.getElementById("random").style.marginTop = randomPositionX;
            document.getElementById("random").style.marginBottom = randomPositionY;
            document.getElementById("random").style.marginLeft = randomPositionX;
            document.getElementById("random").style.marginRight = randomPositionY;

            var randomBackround ="";
            var randomBackround = Math.floor((Math.random() * 21) +1);
               
    };     
    
    function refresh (timeoutPeriod) { 
		refresh = setTimeout(function(){window.location.reload(true);},timeoutPeriod); 
    
    };