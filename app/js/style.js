// $.getJSON('', 

// 	function(data) {
//    //callback

//    var template = $('#quote').html();
//         var html = Mustache.to_html(template, data);
//         $('#quotes').html(html);


// });

$(document).ready(function() {

    $("#getMessage").on("click", function() {
        // Only change code below this line.
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
            var html = "";          
		console.log('data',data);


 data.forEach(function(val) {

          html += "<div class = 'cat'>";

          // Only change code below this line.
          
          html += "<blockquote class='blockquote-reverse'>" + "<p>" + val.content + "<footer>" + val.title + "</footer>" + "</p>" + "<blockquote>";


          
          // Only change code above this line.

          html += "</div>";

        });

        $(".message").html(html);

        });

    });

});
