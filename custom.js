var randomQuote =  [
' “Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.”',
 '“Do your own thing on your own terms and get what you came here for.” .',
 '“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”',
'“I will not let anyone walk through my mind with their dirty feet.”'];
var qou = document.getElementById('quote');
function newQuote() {
var random= Math.floor(Math.random() *( randomQuote.length));
 qou.innerHTML = randomQuote[random];
}

function shareQuote() {
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(qou.innerHTML + '-- #Quotes #smr_a93' ))
}