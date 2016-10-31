; (function ($) {
    $.fn.callTripAdvisor = function (options) {
    	var settings = $.extend({
			key: "5BA8C93749B94B9D852B006A13984700",
			mode: "",
			locationId: "3698496",
			extraParams: "",
			callback: function($el, tripAdvisorData) {},
			errorCallback: function($el) {}
        }, options);
        
    	function initialize($el) {
    		$.support.cors = true;
    		jQuery.ajax({
    			cache: false,
				dataType: "json",
				url: buildApiCallUrl(),
				data: "{}",
				success: function (tripAdvisorData) {
					settings.callback($el, tripAdvisorData);
				},
				error:function(XMLHttpRequest,status,error) {
					settings.errorCallback($el);
				}
			});
        }
        
        function buildApiCallUrl() {
        	var rtnVal = "http://api.tripadvisor.com/api/partner/2.0/location/";
        	rtnVal = rtnVal + settings["locationId"] + "/";
        	
        	if(settings["mode"] != "") {
        		rtnVal = rtnVal + settings["mode"];
        	}
        	
        	rtnVal = rtnVal + "?key=5BA8C93749B94B9D852B006A13984700" + settings["extraParams"];
        	return rtnVal;
        }
        
        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);