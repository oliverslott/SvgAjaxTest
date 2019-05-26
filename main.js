$(function(){
    //https://stackoverflow.com/questions/38344612/ajax-request-to-local-file-system-not-working-in-chrome
    //Chrome bliver meget fornærmet hvis man henter filer via file://protocol, så man er nød til at starte en localserver,
    //visual studio codes extension: "Live Server" virker fint. Har ikke testet Brackets alternativ.

    $.ajax({
        method: "GET",
        url: "svg/circle.svg",
        dataType: 'html', //Skal sættes til html, 
        //ellers tror Jquery at det er en XML vi har med at gøre. 
        //Hvis man vælger at hente det som xml, så brug: "new XMLSerializer().serializeToString(data)" for at hente html.

        success: function(data){
            console.log(data);
            $("body").append(data);
        }
    });
});