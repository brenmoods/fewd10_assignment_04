//wait for the DOM elements to load before executing
$(document).ready(function(){  
    $('#submit-btn').click(function(event){ 
        
//prevent the submit button from automatic refreshing the page
     event.preventDefault();
        
//get the value of the #city-type input
        var city = $('#city-type').val();
        
//correct capitalisation to lowercase to match if / if else statements
        var city = city.toLowerCase();
        
        
     
// if the user inputs New York / New York City / NYC change the body class to 'nyc.jpg'
        if (city == 'new york' || city == 'new york city' || city == 'nyc') {
        $('body').css('background-image','url(images/nyc.jpg');
            
// if the user inputs San Francisco / SF / Bay Area change the body class to 'sf.jpg'
        } else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
        $('body').css('background-image','url(images/sf.jpg)');  
            
// if the user inputs Los Angeles / LA / LAX change the body class to 'la.jpg'
        } else if (city == 'los angeles' || city == 'la' || city == 'lax') {
        $('body').css('background-image','url(images/la.jpg)'); 
            
// if the user inputs Austin / ATX change the body class to 'austin.jpg'
        } else if (city == 'austin' || city == 'atx') {
        $('body').css('background-image','url(images/austin.jpg)');   
            
// if the user inputs Sydney / SYD change the body class to 'sydney.jpg'
        } else if (city == 'sydney' || city == 'syd') {
        $('body').css('background-image','url(images/sydney.jpg)');
 
                
        }   



});
});
    
