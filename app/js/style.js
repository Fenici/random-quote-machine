// $.getJSON('', 

// 	function(data) {
//    //callback

//    var template = $('#quote').html();
//         var html = Mustache.to_html(template, data);
//         $('#quotes').html(html);


// });


// function tweetIt () {
//   var tweetUrl = 'https://twitter.com/share?text=' +
//     encodeURIComponent(phrase) +
//     '.' +

//   window.open(tweetUrl);
// }
   var Quotes = "";
            var title = "";
function getQuote () {
 // Only change code below this line.
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
            var html = "";
            console.log('data', data);
         
            data.forEach(function(val) {
                Quotes = val.content;

                title = val.title;
                html += "<div class = 'quotes'>";

                html += "<blockquote class='blockquote-reverse'>" + "<p>" + Quotes + "<footer>" + title + "</footer>" + "</p>" + "<blockquote>";

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

    $("#twitter-share-button").on("click",function(){
        var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(Quotes) + 
    encodeURIComponent(title) +
    '.' +
console.log(tweetUrl);
  window.open(tweetUrl);

    });



});
