const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


try {
    const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();


    recognition.onstart = function(){
        readOutLoud("choose any colour")
        console.log('voice is active')
    };

    recognition.onresult =function(event){
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        readOutLoud("changing colour")
        if(transcript.includes('colour')){

            if(transcript.includes('red')){
                document.body.style.backgroundColor = "red";
                readOutLoud('colour changed to red')
            }
            
            else if(transcript.includes('orange')){
                document.body.style.backgroundColor = "orange";
                readOutLoud('colour changed to orange')
            }

            else if(transcript.includes('yellow')){
                document.body.style.backgroundColor = "yellow";
                readOutLoud('colour changed to yellow')
            }

            else if(transcript.includes('Green')){
                document.body.style.backgroundColor = "green";
                readOutLoud('colour changed to green')
            }

            else if(transcript.includes('blue')){
                document.body.style.backgroundColor = "blue";
                readOutLoud('colour changed to blue')
            }

            else if(transcript.includes('Indigo')){
                document.body.style.backgroundColor = "indigo";
                readOutLoud('colour changed to indigo')
            }

            else if(transcript.includes('violet')){
                document.body.style.backgroundColor = "violet";
                readOutLoud('colour changed to violet')
            }

            else{
                document.body.style.backgroundColor = "white";
                readOutLoud('The colour is not in scope therefore changing to white')
            }
        }
    };

    btn.addEventListener('click',() => {
        recognition.start();
    });

    function readOutLoud(message){
        const speech = new SpeechSynthesisUtterance(message);
        speech.volume =1;
        speech.pitch = 0;
        speech.rate =1;
        window.speechSynthesis.speak(speech);
    }

  }
  catch(e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
  }