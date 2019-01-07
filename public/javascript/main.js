$(document).ready(function() {
    // First URL points to Simpsons Quotes API (Frinkiac).
    // Second URL points to Futurama Quotes API (Morbotron).
    var endpoint = [
      "https://frinkiac.com/api/random",
      "https://morbotron.com/api/random"
    ],
      baseGifURL = ["https://frinkiac.com/gif/", "https://morbotron.com/gif/"],
      proxyURL = "https://cors-anywhere.herokuapp.com/";
  
    function getQuote() {
      $(".card-img-top").ready(function() {
        $(".fa-spinner").hide();
      });
  
      // Hardcoded with `endpoint[0]` by now...
      $.getJSON(proxyURL + endpoint[0], function(data) {
        var key = data.Episode.Key,
          season = data.Episode.Season,
          episode = data.Episode.EpisodeNumber,
          title = data.Episode.Title,
          aired = data.Episode.OriginalAirDate,
          wikiLink = data.Episode.WikiLink,
          gifStart = data.Subtitles[0].StartTimestamp,
          gifEnd = data.Subtitles[2].EndTimestamp,
          sub0 = data.Subtitles[0].Content,
          sub1 = data.Subtitles[1].Content,
          sub2 = data.Subtitles[2].Content;
  
        var GifURL =
          baseGifURL[0] + key + "/" + gifStart + "/" + gifEnd + ".gif?b64lines=";
  
        // Now let's fill our HTML
        $("img").attr({
          id: "gif",
          src: GifURL,
          width: "400px",
          height: "300px"
        });
  
        $("<img/>")
          .on("load", function() {
            console.log("image loaded correctly");
          })
          .on("error", function() {
            console.log("error loading image");
          });
  
        $("#sub0").text(sub0);      
        $("#sub1").text(sub1);
        $("#sub2").text(sub2);
        $("#key").text(key);
        $("#title").text(title);
        $("#title").attr("href", wikiLink);
        $("#title").attr("target", "_blank");
        $(".card-subtitle").text("Episode aired: " + aired);
      });
      // End of $.getJSON()
    }
    // End of getQuote()
  
    // First quote
    getQuote();
  
    $("img").change(function() {
      alert("Handler for .change() called.");
    });
    // This will get us another quote with a click
    $("#generator").click(getQuote);
  
  });
  
    $("img").ready(
      console.log("Image is ready")
    );