// $.getJSON('', 

// 	function(data) {
//    //callback

//    var template = $('#quote').html();
//         var html = Mustache.to_html(template, data);
//         $('#quotes').html(html);


// });

function getQuote(data) {

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
        var html = "";
        console.log('data', data);

    });

}

function getQuote () {
 // Only change code below this line.
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
            var html = "";
            console.log('data', data);

            data.forEach(function(val) {

                html += "<div class = 'quotes'>";

                html += "<blockquote class='blockquote-reverse'>" + "<p>" + val.content + "<footer>" + val.title + "</footer>" + "</p>" + "<blockquote>";

                html += "</div>";

            });

               
            $(".message").html(html);

        });
}



$(document).ready(function() {

	 // Only change code below this line.
       getQuote();


    $("#getMessage").on("click", function() {
        // Only change code below this line.
    	getQuote();

    });



});
