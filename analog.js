setInterval(()=>
{
a = new Date()
h = a.getHours();
m = a.getMinutes();
s = a.getSeconds();
 
hr = h*30 + m*0.5 + s*(1/3600) ;
mr = m*6;
sr = s*6;

    hour.style.transform = `rotate(${hr}deg)`;
    seconds.style.transform = `rotate(${sr}deg)`;
    min.style.transform = `rotate(${mr}deg)`;

},1000);
