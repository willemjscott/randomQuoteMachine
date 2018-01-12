var savedQuote;
var savedQuoteAuthor
$(document).ready(function () {
  $("#get-quote").on("click", function () {
    $.getJSON("https://talaikis.com/api/quotes/random/", function (json) {
      savedQuote = json.quote;
      savedQuoteAuthor = json.author;
      $("#quote").html(json.quote);
      $("#quote-author").html("- " + json.author);
    });
  });

  $("#twitter-button").on("click", function () {
    var tweet = [savedQuote];
    let url = `https://twitter.com/intent/tweet?text=${tweet}`
    return window.location = url;

  });
});
/*$("#get-quote").on("click", function () {
  $.getJSON("https://talaikis.com/api/quotes/random/", function (json) {
    savedQuote = json.quote;
    savedQuoteAuthor = json.author;
    $("#quote").html(json.quote);
    $("#quote-author").html("- " + json.author);
  });
});

$("#twitter-button").on("click", function () {
  var tweet = [savedQuote];
  let url = `https://twitter.com/intent/tweet?${tweet}`
  return window.location = url;

});*/