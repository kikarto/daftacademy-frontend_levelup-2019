
// funkcja dodająca 'zero' na początek liczby
let padStart = function(num){
    return num.toString(10).padStart(2, '0');
} 

// główna funkcja zegara
let clock = function(){
    // element wyświetlający godzinę
    var div = document.createElement('div');
    var container = document.body.appendChild(div);
    // pobranie aktualnej daty
    var date = new Date();
    // pobranie godziny z aktualnej daty
    var hour = date.getHours();
    if(hour > 12)
        hour -= 12;
    // pobranie minuty z aktualnej daty
    var minute = date.getMinutes();
    // pobranie sekundy z aktualnej daty
    var second = date.getSeconds();
    // pobranie milisekundy z aktualnej daty
    var millisecond = date.getMilliseconds();
    
    // testowy log daty
//    console.info(date, hour, minute, second, millisecond);
    
    // generator sekund
    function* gSec(){
        // inkrementacja sekund
        while(true){
            if(second == 59){
                second = -1;
                gMinute.next();
            }
            yield second++;
        }
    }
    
    // generator minut
    function* gMin(){
        // inkrementacja minut
        while(true){
            if(minute == 59){
                minute = -1;
                gHour.next();
            }
            yield minute++;
        }
    }
    
    // generator godzin
    function* gHo(){
        // inkrementacja godzin
        while(true){
            if(hour == 12)
                hour = 0;
            yield hour++;
        }
    }
    
    // inicjowanie generatorów
    var gSecond = gSec();
    var gMinute = gMin();
    var gHour = gHo();
    
    // funkcja wykonująca się co sekundę
    var clock_interval = function(){
        gSecond.next();
        container.innerHTML = `${padStart(hour)}:${padStart(minute)}:${padStart(second)}`;
    }
    
    // opóźnienie startu aby sekundy się zgadzały z zegarem systemowym
    var start_clock = null;
    setTimeout(()=>{
        gSecond.next();
        start_clock = setInterval(clock_interval,1000);
    },millisecond)
    
    // zwraca objekt z funkcją testującą zegar
    return {
        test: (h = 12, m = 59, s = 50)=>{
            clearInterval(start_clock); 
            second = s;
            minute = m;
            hour = h;
            start_clock = setInterval(clock_interval,1000);
        }
    }
    
}

export default clock;

