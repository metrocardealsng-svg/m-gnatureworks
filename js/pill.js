(()=>{const q=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,T=2100,sec=q('#pl'),pp=q('#pp'),hero=q('.plhero');
let s='';for(let i=0;i<15;i++){const y=140+i*46-Math.sin(i*1.7)*40,w=(1.2+((i*7)%10)*.27).toFixed(2),o=(.55+((i*3)%6)*.05).toFixed(2);s+=`<path d="M-80 ${y+460} C 280 ${y+430}, 520 ${y-60}, 900 ${y-20} S 1300 ${y-300}, 1540 ${y-240}" fill="none" stroke="#fff" stroke-width="${w}" opacity="${o}"/>`}q('.plbg svg').innerHTML=s;
const cv=q('#pp canvas'),cx=cv.getContext('2d'),im=new Image();let fi=0,pv=0,started=false,busy=false;im.onload=()=>cx.drawImage(im,0,0,1024,576);im.src=FP[0];
new IntersectionObserver(e=>pv=e[0].isIntersecting,{threshold:.01}).observe(sec);if(!RM)setInterval(()=>{if(pv){fi=(fi+1)%FP.length;im.src=FP[fi]}},125);
q('#spk').onclick=()=>{const w=q('#spw');w.style.display=w.style.display=='none'?'':'none'};
const A=[],E1='cubic-bezier(.5,0,.3,1)',E2='cubic-bezier(.45,0,.3,1)',E3='cubic-bezier(.4,0,.2,1)';
function add(el,kf){const a=el.animate(kf,{duration:T,fill:'both',easing:'linear'});a.pause();A.push(a)}
function build(){const mob=matchMedia('(max-width:720px)').matches,H=(innerWidth-40)/1.85;
add(pp,mob?[{height:'1.5px',offset:0},{height:'1.5px',offset:.14,easing:E1},{height:H*.1+'px',offset:.3,easing:E2},{height:H*.55+'px',offset:.58,easing:E3},{height:H+'px',offset:1}]:[{width:'.012em',offset:0},{width:'.012em',offset:.14,easing:E1},{width:'.16em',offset:.3,easing:E2},{width:'1.81em',offset:.58,easing:E3},{width:'3.62em',offset:1}]);
add(pp,[{clipPath:mob?'inset(0 50%)':'inset(50% 0)',offset:0,easing:E1},{clipPath:'inset(0)',offset:.14},{clipPath:'inset(0)',offset:1}]);
add(q('.plhl'),[{opacity:1,offset:0},{opacity:1,offset:.14},{opacity:0,offset:.3},{opacity:0,offset:1}]);
add(hero,mob?[{gap:'.03em',offset:0},{gap:'.03em',offset:.14},{gap:'.05em',offset:.58},{gap:'.1em',offset:1}]:[{gap:'.026em',offset:0},{gap:'.026em',offset:.14},{gap:'.05em',offset:.58},{gap:'.085em',offset:1}]);
add(q('.plbg'),[{opacity:0,offset:0},{opacity:0,offset:.45},{opacity:1,offset:.78},{opacity:1,offset:1}]);
add(q('.plnav'),[{transform:'translateY(-140%)',offset:0},{transform:'translateY(-140%)',offset:.5,easing:'cubic-bezier(.2,.8,.2,1)'},{transform:'none',offset:.86},{transform:'none',offset:1}]);
add(q('.plft p'),[{transform:'translateY(160%)',offset:0},{transform:'translateY(160%)',offset:.52,easing:'cubic-bezier(.2,.8,.2,1)'},{transform:'none',offset:.9},{transform:'none',offset:1}]);
add(q('.plbtn'),[{transform:'translateY(160%)',offset:0},{transform:'translateY(160%)',offset:.52,easing:'cubic-bezier(.2,.8,.2,1)'},{transform:'none',offset:.9},{transform:'none',offset:1}]);
add(q('.plrule'),[{transform:'scaleX(0)',offset:0},{transform:'scaleX(0)',offset:.4},{transform:'scaleX(1)',offset:.95},{transform:'scaleX(1)',offset:1}]);
document.querySelectorAll('.plic').forEach(el=>add(el,[{opacity:0,offset:0},{opacity:0,offset:.8},{opacity:.85,offset:1}]))}
if(!RM){build();new IntersectionObserver((e,o)=>{if(e[0].isIntersecting&&!started){started=true;A.forEach(a=>a.play());o.disconnect()}},{threshold:.35}).observe(sec)}
q('#plbtn').onclick=async()=>{if(RM||busy)return;busy=true;if(!A.length)build();started=true;A.forEach(a=>{a.pause();a.currentTime=T});A.forEach(a=>{a.playbackRate=-1;a.play()});await Promise.all(A.map(a=>a.finished)).catch(()=>{});A.forEach(a=>{a.playbackRate=1;a.currentTime=0;a.play()});busy=false};
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(RM||busy)return;A.forEach(a=>a.cancel());A.length=0;if(!started)build()},150)});
})();
