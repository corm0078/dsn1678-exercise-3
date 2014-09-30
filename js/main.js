var salesDetails = $('.sales__details');
var sales = $('.sales');


var salesClickHandler = function() {
    var isActive = sales.attr('data-state');
    
    if (isActive == 'active') {
        salesDetails.attr('data-state','inactive');
    
    }else {    
  salesDetails.attr('data-state','active');
    }
};


salesDetails.on('click', salesClickHandler);