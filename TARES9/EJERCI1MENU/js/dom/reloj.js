const d = document

export function digitalClock(clock,btnPlay,btnStop){
    let clolckTempo   ;   
 
 d.addEventListener("click", e=>{
     if (e.target.matches(btnPlay)){
       clolckTempo= setInterval(() => {
         let clockHour   =new Date().toLocaleTimeString();
         d.querySelector(clock).innerHTMLm=`<h3>${clockHour} </h3>`;
        },1000);

        e.target.disabled=true;
     } 


     if (e.target.matches(btnStop)){
         clearInterval(clolckTempo);
         d.querySelector(clock).innerHTMLm= null;
         d.querySelector(btnPlay).disabled=false;
        }

    })
}    
export function alarm(sound,btnPlay,btnStop){
    let alarmtempo;
    const $alarm =d.createElement("audio");

    d.addEventListener("click",e =>{
        if (e.target.matches(btnPlay)){
          alarmtempo   =setTimeout(()=> {
              $alarm.play();
          },2000);
          e.target.disabled =true;

        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmtempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled=false;

        }

    })

}