
function TurnOnOff() {
    
    var image = document.getElementById('image');

    if (image.src.match('OFFlampada')) {
        image.src = 'images/ONlampada.jpg';

    } else {
        image.src = 'images/OFFlampada.jpg'
        
    }
}
