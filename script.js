//javascript//

const Gallery = document.getElementById("gallery");

let emojis = [];
let startEmoji = 128512;

for ( let  i = startEmoji; i <=startEmoji + 50; i++){
    emojis.push(`<div class="emoji">
    <p style="text-align: center;">
    <span style="font-size: 5rem;">&#${i};</span><br>
    <code>${i}</code>
    </p>
    </div>`);
}

Gallery.innerHTML += emojis.join('');
