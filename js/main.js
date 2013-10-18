$(function () {
   $('.loader').click(function() {
        var rel = $(this).attr('rel');
        loadContent(rel);
   });
   $('#mapLoader').click(function () {
        loadContent("map.html");
        getLocation();
   });
}); 
function loadContent(myPage) {
    $('#myTitle').load(myPage + ' #pageTitle');
    $('#myContent').load(myPage + ' #pageContent');
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(positionSuccess, onError);
}
function positionSuccess(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var srcString = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=11&size=200x200&sensor=false";
    srcString += "&markers=color:red%7Clabel:A%7C" + latitude + "," + longitude;
    try {
        $('#myMap').attr( {
            src: srcString,
            height: 200,
            width: 200
        });
    }
    catch(ex)
    {
        alert('Error: ' + ex);
    }
}
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}