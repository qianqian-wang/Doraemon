let string=`*{box-sizing: border-box;margin: 0;padding: 0;}
.all{
    background: rgb(212,236,249);
    // min-height: 100vh;
}
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
   
}
@keyframes slidein{
    from{
        transform:translateY(0px);
    }
    to{
        transform:translateY(100px);
    }
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.top1{
    border: 1px solid;
    width: 30px;
    height: 15px;
    background: rgb(252,193,54);
    border-radius:100px 100px 0 0;
}
.top2{
    border: 1px solid;
    width:80px;
    height: 1px;
    animation-duration: 0.1s;
    animation-name: rotar;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    z-index: 100;
}
@keyframes rotar {
    from{transform:rotate3D(0,1,0,0deg);}
    to{transform:rotate3D(0,1,0,360deg);}
}
.top3{
    border: 1px solid;
    width: 10px;
    height: 15px;
    background: rgb(252,193,54);
}
.face{
    border: 1px solid;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgb(53,161,201);
    position: relative;
}
.face2{
    border: 1px solid;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    background: white;

}
.eye1{ 
    display: flex;
    justify-content: center;
}
.eye{
    border: 1px solid;
    border-radius: 50%;
    width: 40px;
    height:40px;
    background: white;
}

.eyes{
    border: 1px solid;
    border-radius: 50%;
    width: 12px;
    height:18px;
    margin-left:20px;
    margin-top: 12px;
    background: #000;
}
.eyes::before{
    content:'';
    display: block;
    border-radius: 50%;
    width: 5px;
    height:6px;
    margin-top: 5px;
    margin-left:2px;
    background: #fff;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -6px;
}
.line{
    border: 1px solid;
    width: 65px;
    background: #000;
}
.line1{
    margin-top: -2px;
    transform: rotate(20deg)
}
.line2{
    margin-top: 18px;
}
.line3{
    margin-top: 12px;
    transform: rotate(-10deg)
}
.line4{
    margin-top: -2px;
    transform: rotate(-20deg)
}
.line5{
    margin-top: 12px;
    transform: rotate(10deg)
}
.bitou{
    border: 1px solid;
    border-radius: 50%;
    width: 30px;
    height:30px;
    background: rgb(177,22,53);
}
.bitou::after{
    content: '';
    display: block;
    height:10px;
    width: 10px;
    border-radius: 50%;
    margin-top: 5px;
    margin-left: 5px;
    background: #fff;
}
.bidi{
    border: 1px solid;
    height:13px;
    width: 1px;
    margin:auto;
    background: #000;
}
.mouse{
    border: 1px solid;
    border-radius:0 0 100px 100px ;
    height:70px;
    width: 125px;
    margin:auto;
    background: rgb(177,22,53);
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.tongue{
    width: 50px;
    height: 50px;
    margin-top: 25px;
    border-radius: 100px 90px 0 0;
    background: rgb(202,37,51);
}
`
let n=0

setInterval(()=>{
    if(n>string.length){
        return
    }  
    demo.innerHTML=string.substr(0,n)
    hljs.highlightAll()
    demo2.innerHTML=string.substr(0,n)
    demo.scrollTop=demo.scrollHeight
    n+=1
},10)