function showtime(){
    let date = new Date() ;
    let h = date.getHours() ;
    let m = date.getMinutes() ;
    let s = date.getSeconds() ;
    if ( h < 10 ){
        h = "0" + h ;
    }
    if ( m < 10 ){
        m = "0" + m ;
    }
    if ( s < 10 ){
        s = "0" + s ;
    }
    let Time = h + ":" + m + ":" + s ;
    setTimeout( showtime , 1)
    document.getElementById("clock").innerText = Time ;
    document.getElementById("clock").textContent = Time ;
    }
    showtime()