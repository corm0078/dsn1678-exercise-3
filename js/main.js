var salesDetails = $('.sales__details');
var sales = $('.sales');


var salesClickHandler = function() {
    var isActive = salesDetails.attr('data-state');
    
    if (isActive == 'active') {
        salesDetails.attr('data-state','inactive');
    
    }else {    
  salesDetails.attr('data-state','active');
    }
};


sales.on('click', salesClickHandler);


var infoDetails1 = $('.info__details1');
var info1 = $('.info1');


var sales1ClickHandler = function() {
    var isActive = infoDetails1.attr('data-state');
    
    if (isActive == 'active') {
        infoDetails1.attr('data-state','inactive');
    
    }else {    
  infoDetails1.attr('data-state','active');
    }
};


info1.on('click', salesClickHandler);