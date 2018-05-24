
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   
    onDeviceReady: function() {
        this.receivedEvent();
    },

    
    receivedEvent: function() {
        
                                             /*Rendering Content via Javascript*/
        $(".nav li").on("click", function(){
            
            $(".nav").find(".active").removeClass("active");
            
            $(this).addClass("active");
        
        });
        
        page('/mine', function(){ displayPage("#mineScreen"); });
        
        page('/shop', function(){ displayPage("#buyScreen"); });
        
        page('/kingdom', function(){ displayPage("#kingdomScreen");  });
        
        page('/castle', function(){ displayPage("#castleScreen");   });
     
        page('/gamble', function(){ displayPage("#gambleScreen"); });
        
        page();
        
        page('/kingdom');

                                                /*Performing Logic via Javascript*/
        
        /*The data that will be used for this game*/
        var gameData = {
            
            goldCount: 0,
            minersCount: 0,
            miningPower: 1,
                
            minerCost: 100,
            powerUpgradeCost: 200,
            minerHousingCost: 500,
            castleCost: 2500,
            cityPlazaCost: 5000,
            beardCost: 5000,
            throneCost: 10000,
            
            kingdom1: true,
            kingdom2:false,
            kingdom3: false,
            kingdom4: false,
            
            castle1:true,
            castle2:false,
            castle3:false,
            
        };
        

        /*Incraments gold by the amount of miners every game tick (1 second)*/
        var gameTick = setInterval(function(){
            gameData.goldCount += gameData.minersCount;
        }, 1000);
        
        /*Function that will update the user display to curent values (updates every 100ms)*/
        var updateGameData = setInterval(function() {
            $("#goldCount").html(gameData.goldCount);
            $("#minersCount").html(gameData.minersCount);
            $("#miningPower").html(gameData.miningPower);
            $("#minerCost").html("(" + gameData.minerCost + " gold)");
            $("#powerCost").html("(" + gameData.powerUpgradeCost + " gold)");
            $("#minerHousingCost").html("(" + gameData.minerHousingCost + " gold)");
            $("#castleCost").html("(" + gameData.castleCost + " gold)");
            $("#cityPlazaCost").html("(" + gameData.cityPlazaCost + " gold)");
            $("#beardCost").html("(" + gameData.beardCost + " gold)");
            $("#throneCost").html("(" + gameData.throneCost + " gold)");
            
            /*Changes the color of the prices of items depending on if you can afford them*/
             priceColor("#minerCost", gameData.minerCost);
             priceColor("#powerCost", gameData.powerUpgradeCost);
             priceColor("#minerHousingCost", gameData.minerHousingCost);
             priceColor("#castleCost", gameData.castleCost);
             priceColor("#cityPlazaCost", gameData.cityPlazaCost);
             priceColor("#beardCost", gameData.beardCost);
             priceColor("#throneCost", gameData.throneCost);
             priceColor("#gamble100", 100);
             priceColor("#gamble1000", 1000);
             priceColor("#gamble2500", 2500);
             priceColor("#gamble5000", 5000);
            if(gameData.kingdom1 == true){
                $("#buyMinerHousing").siblings().css("display", "none");
               
                $("#buyMiningPower").css("display", "block");
                $("#buyMinerHousing").css("display", "block");
            }
            
            if(gameData.kingdom2 == true){
                $("#buyMiner").siblings().css("display", "none");
                
                $("#buyMiningPower").css("display", "block");
                $("#buyMiner").css("display", "block");
                $("#buyCastle").css("display", "block");
                
                $("#kingdom2").css("display","inline");
                $("#kingdom2").siblings().css("display", "none");
             }
            
            if(gameData.kingdom3 == true){
                $("#buyMiner").siblings().css("display", "none");
                
                $("#buyMiningPower").css("display", "block");
                $("#buyMiner").css("display", "block");
                $("#buyCityPlaza").css("display", "block");
                if(gameData.castle1 == true){
                    $("#castle1").css("display", "inline");
                    $("#castle1").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "block");
                    $("#buyThrone").css("display", "none");
                }
                if(gameData.castle2 == true){
                    $("#castle2").css("display", "inline");
                    $("#castle2").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "none");
                    $("#buyThrone").css("display", "block");
                }
                if(gameData.castle3 == true){
                    $("#castle3").css("display", "inline");
                    $("#castle3").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "none");
                    $("#buyThrone").css("display", "none");
                }
                
                
                $("#kingdom3").css("display","inline"); 
                $("#kingdom3").siblings().css("display", "none");
                
                $("#castleLink").css("display", "block");
                
            }
            
            if(gameData.kingdom4 == true) {
                $("#buyMiner").siblings().css("display", "none");
                
                $("#buyMiningPower").css("display", "block");
                $("#buyMiner").css("display", "block");
                if(gameData.castle1 == true){
                    $("#castle1").css("display", "inline");
                    $("#castle1").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "block");
                    $("#buyThrone").css("display", "none");
                }
                if(gameData.castle2 == true){
                    $("#castle2").css("display", "inline");
                    $("#castle2").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "none");
                    $("#buyThrone").css("display", "block");
                }
                if(gameData.castle3 == true){
                    $("#castle3").css("display", "inline");
                    $("#castle3").siblings().css("display", "none");
                    
                    $("#buyBeard").css("display", "none");
                    $("#buyThrone").css("display", "none");
                }
                
                $("#kingdom4").css("display","inline");
                $("#kingdom4").siblings().css("display", "none");
                
                
                $("#castleLink").css("display", "block");
                $("#gambleLink").css("display", "block");
                
            }
            
            
            

        }, 100);    
        
        /*The onclick function that will add gold based on mining power*/
        $(".mine").click(function(){
                    gameData.goldCount = gameData.goldCount + gameData.miningPower;
                    window.plugins.toast.showWithOptions({
                        message: "+" + gameData.miningPower + " Gold!",
                        duration: 25, 
                        position: "center",
                        styling: {
                          opacity: 0.75, 
                          backgroundColor: '#ffd700',
                          textColor: '#FFFFFF', 
                          textSize: 20.5, 
                          cornerRadius: 16, 
                          horizontalPadding: 20, 
                          verticalPadding: 16 
                        }
                    });       
                });
        
        /*The shop functions*/
        $("#buyMiner").click(function(){
            if(gameData.goldCount >= gameData.minerCost){
                gameData.minersCount = gameData.minersCount + 1;
                gameData.goldCount = gameData.goldCount - gameData.minerCost;
                gameData.minerCost = gameData.minerCost + 100;
            }
        });
         
        $("#buyMiningPower").click(function(){
            if(gameData.goldCount >= gameData.powerUpgradeCost){
                gameData.miningPower = gameData.miningPower + 1;
                gameData.goldCount = gameData.goldCount - gameData.powerUpgradeCost;
                gameData.powerUpgradeCost = gameData.powerUpgradeCost + 200;
            }
        });
        
        $("#buyMinerHousing").click(function(){
            if(gameData.goldCount >= gameData.minerHousingCost){
                displayToast("You have bought Miner Housing!\nYou may now purchase Miners to mine for you.");
                
                gameData.goldCount = gameData.goldCount - gameData.minerHousingCost;

                gameData.kingdom1 = false;
                gameData.kingdom2 = true;
                
            }
        });
        
        $("#buyCastle").click(function(){
            if(gameData.goldCount >= gameData.castleCost){
                displayToast("You have purchased your own Castle!\nGo and visit your new abode.");
                
                gameData.goldCount = gameData.goldCount - gameData.castleCost;
                
                gameData.kingdom2 = false;
                gameData.kingdom3 = true;
                
            }
        });
        
        $("#buyCityPlaza").click(function(){
            if(gameData.goldCount >= gameData.cityPlazaCost){
                displayToast("You may now gamble at the City Plaza!\nBe wise with your gold.")

                gameData.goldCount = gameData.goldCount - gameData.cityPlazaCost; 
                
                gameData.kingdom3 = false;
                gameData.kingdom4 = true;
                
            }
        });
        
        $("#buyBeard").click(function(){
            if(gameData.goldCount >= gameData.beardCost){
                displayToast("You feel the power of Odin pulse through you!\nYou gain 5 Mining Power!");
                gameData.miningPower += 5;
               
                gameData.goldCount = gameData.goldCount - gameData.beardCost;
                
                gameData.castle1 = false;
                gameData.castle2 = true;
                
            }
        });
        
        $("#buyThrone").click(function(){
            if(gameData.goldCount >= gameData.throneCost){
                displayToast("The crowds stare in awe at your throne!\n10 Miners join your cause!");
                gameData.minersCount += 10;
    
                gameData.goldCount = gameData.goldCount - gameData.throneCost;
                
                gameData.castle2 = false;
                gameData.castle3 = true;
                
                
            }
        });
        
        $("#gamble100").click(function(){ gamble(100); });
        
        $("#gamble1000").click(function(){ gamble(1000); });
        
        $("#gamble2500").click(function(){ gamble(2500); });
        
        $("#gamble5000").click(function(){ gamble(5000); });
        
        function priceColor(idToChange, cost){
             if(gameData.goldCount >= cost){
                $(idToChange).css("color", "green");
            }
            else{
                $(idToChange).css("color", "red"); 
            }
        
        }
        
        function displayToast(text){
                    window.plugins.toast.showWithOptions({
                        message: text,
                        duration: 10000, 
                        position: "top",
                        styling: {
                          opacity: .9, 
                          backgroundColor: '#DAA520', 
                          textColor: '#FFFFFF', 
                          textSize: 20.5, 
                          cornerRadius: 16, 
                          horizontalPadding: 20, 
                          verticalPadding: 16 
                        }
                    }); 
            
        }
    
        function displayPage(pageToDisplay){
            $(pageToDisplay).css("display", "block");
            $(pageToDisplay).siblings().css("display", "none");
        }
        
        function gamble(amount){
            if(gameData.goldCount >= amount){
                gameData.goldCount = gameData.goldCount - amount;
                var roll = Math.floor(Math.random() * 100) + 1;
                if(roll > 50){
                    navigator.notification.alert("Roll is " + roll + ". You win!");
                    gameData.goldCount = gameData.goldCount + 2 * amount;
                }
                else{
                    navigator.notification.alert("Roll is " + roll + ". You lose.");
                }
            }
        }
        
        
    }
};

app.initialize();