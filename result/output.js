$(document).ready(function GameResult() {

    $(document).on("click", ":submit", function(event) {
        
        if ($(this).val() != " ") {
            $("#Form").attr("action", "/play/" + $(this).val());
            $("#Form").submit();
        }
    });
    $.ajax({
        url: "/output",
        dataType: "json",
        success: function(data) {
           
            $("#result").empty();
            $("#result").append("<h2> Outcome: " + data.outcome + "</h2>");
            $("#result").append("<br><h3>Wins:" + data.wins + "<br><br>  Losses:" +
                data.losses + "<br><br>  Ties:" + data.ties + "</h3>");
        },
        type: "POST"
    });
});