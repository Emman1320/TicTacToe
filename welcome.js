document.addEventListener("DOMContentLoaded",() => {
    //Wrapper animation
    anime({
     targets: '.welcome',
     easing:'easeOutExpo',
        width:['0vw','100vw'],
        opacity:1,
        duration:1200,
    })  
    
    anime({
        targets:'div',
        duration:8000,
        
        complete:function(anime){
        window.open("tictactoe.html", "_top");
    }
    })
 anime({
     delay:4000,
     targets:'#pl',
     opacity:1
 })
 anime({
     duration:2000,
     easing:'easeInOutQuad',
     delay:4000,
     targets:'#xo',
     opacity:1,
     direction:'alternate'
 })
 anime({
     targets:'#player1 path',
     strokeDashoffset:[anime.setDashoffset,400],
     duration: 2000,
     delay:4000,
     easing:'easeInOutQuad',
     direction:'alternate',
     loop:true
 });
 anime({
    targets:'#player2 path',
    strokeDashoffset:[anime.setDashoffset,400],
    duration: 2000,
    delay:4000,
    easing:'easeInOutQuad',
    direction:'alternate',
     loop:true
});
    anime({
     targets:'.sub-heading',
     delay:600,
     opacity:1,
     duration:1800,
     translateY:['-38px','0px'],
     easing:'easeOutExpo',
 });
 anime({
     targets:'.loader-wrapper',
     opacity:1,
     easing:'easeOutExpo',
     duration:1800,
     delay:1500,
 });
 anime({
     targets:'.loader',
     opacity:1,
     easing:'easeOutExpo',
     duration:10000,
     delay:2000,
     width:['0%','100%'],
     
 });
 anime({
     targets:'#tic path',
     strokeDashoffset:[anime.setDashoffset,2400],
     duration:2000,
     direction:'alternate',
     easing:'easeInOutQuad',
 
 })
})
