$(document).ready(function(){  
    
    $('submit-btn').click(function(){
        
        
        var city = $('#city-type').val();
            
        if(city == 'nyc' || city == 'new york'){
            $('body').addClass('nyc');
        }
    });
});