import{Q as c,R as f,T as p,W as z,t as y,x as E}from"./chunk-27H5APBL.mjs";function m(l){let{patternType:n,front:t,back:a,radius:b,scale:e,shouldAnimate:$,direction:x,diagonal:V,duration:k}=l,L=f.current()===f.canvas,r,d,i,u,C,H,g,o,M=c.toHexString(c(t)),T=c.toHexString(c(a)),s=M.replace("#",""),A=T.replace("#",""),w=x==="left"||x==="top"?-1:1,h=x==="left"||x==="right"?w*e:0,v=x==="top"||x==="bottom"?w*e:0;return n==="wave"&&(r=`radial-gradient(circle at center center, ${t}, ${a}), repeating-radial-gradient(circle at center center, ${t}, ${t}, ${e}px, transparent ${e*2}px, transparent ${e}px)`,C="multiply"),n==="zigzag"&&(r=`linear-gradient(135deg, ${t} 25%, transparent 25%), linear-gradient(225deg, ${t} 25%, transparent 25%), linear-gradient(45deg, ${t} 25%, transparent 25%), linear-gradient(315deg, ${t} 25%, ${a} 25%)`,d=`${e}px 0, ${e}px 0, 0 0, 0 0`,i=`${e*2}px ${e*2}px`,u="repeat"),n==="diagonal"&&(r=`repeating-linear-gradient(45deg, ${t}, ${t} ${e/2}px, ${a} ${e/2}px, ${a} ${e*2}px )`),n==="diagonal-two"&&(r=`repeating-linear-gradient( 135deg, ${t}, ${t} ${e/2}px, ${a} ${e/2}px, ${a} ${e*2}px )`),n==="blocks"&&(r=`linear-gradient(30deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(150deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(30deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(150deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(60deg, ${a} 25%, transparent 25.5%, transparent 75%, ${a} 75%, ${a}), linear-gradient(60deg, ${a} 25%, transparent 25.5%, transparent 75%, ${a} 75%, ${a})`,i=`${e*8}px ${e*14}px`,d=`0 0, 0 0, ${e*4}px ${e*7}px, ${e*4}px ${e*7}px, 0 0, ${e*4}px ${e*7}px`),n==="polka"&&(r=`radial-gradient(${t} 1px, transparent 1px), radial-gradient(${t} 1px, ${a} 1px)`,i=`${e*2}px ${e*2}px`,d=`0 0, ${e}px ${e}px`),n==="rhombus"&&(r=`linear-gradient(135deg, ${t} 25%, transparent 25%), linear-gradient(225deg, ${t} 25%, transparent 25%), linear-gradient(45deg, ${t} 25%, transparent 25%), linear-gradient(315deg, ${t} 25%, ${a} 25%)`,d=`${e}px 0, ${e}px 0, 0 0, 0 0`,i=`${e}px ${e}px`,u="repeat"),n==="stars"&&(r=`radial-gradient(ellipse ${e}px ${e}px, ${t}, ${t} 25%, ${a} 25%)`,i=`${e/2}px ${e/2}px`,$&&(o=`${h}px ${v}px`)),n==="circles"&&(r=`radial-gradient(circle at 100% 50%, ${a} 20%, ${t} 21%, ${t} 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, ${a} 20%, ${t} 21%, ${t} 34%, ${a} 35%, ${a})`,i=`${e*2}px ${e*2}px`),n==="rectangles"&&(r=`repeating-linear-gradient(45deg, ${t} 25%, transparent 25%, transparent 75%, ${t} 75%, ${t}), repeating-linear-gradient(45deg, ${t} 25%, ${a} 25%, ${a} 75%, ${t} 75%, ${t})`,d=`0 0, ${e}px ${e}px`,i=`${e*2}px ${e*2}px`),n==="lines"&&(r=`linear-gradient(0deg, ${t} 50%, ${a} 50%)`,i=`${e}px ${e}px`),n==="lines-vertical"&&(r=`linear-gradient(to right, ${t} 50%, ${a} 50%)`,i=`${e}px ${e}px`),n==="paper"&&(r=`linear-gradient(${t} 2px, transparent 2px), linear-gradient(90deg, ${t} 2px, transparent 2px), linear-gradient(${t} 1px, transparent 1px), linear-gradient(90deg, ${t} 1px, ${a} 1px)`,i=`${e*5}px ${e*5}px, ${e*5}px ${e*5}px, ${e}px ${e}px, ${e}px ${e}px`,d="-2px -2px, -2px -2px, -1px -1px, -1px -1px"),n==="crosses"&&(r=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' %3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${s}' %3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,i=`${e*4}px ${e*4}px`,g=a),n==="wave-lines"&&(r=`url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23${s}' fill-rule='evenodd'/%3E%3C/svg%3E")`,i=`${e*10}px ${e*2}px`,g=a,$&&(o=`${h*10}px ${v*2}px`)),n==="clouds"&&(r=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='28'%3E%3Cpath fill='%23${s}' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,i=`${e*5.6}px ${e*2.8}px`,g=a,$&&(o=`${h*5.6}px ${v*2.8}px`)),n==="stars-two"&&(r=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath fill='%23${s}' d='m16 8.764 2.351 4.764 5.257.764L19.804 18l.898 5.236L16 20.764l-4.702 2.472.898-5.236-3.804-3.708 5.257-.764Z'%3E%3C/path%3E%3C/svg%3E")`,i=`${e*3.2}px ${e*3.2}px`,g=a),n==="wiggle"&&(r=`url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${s}' %3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,g=a,i=`${e*5.2}px ${e*2.6}px`,$&&(V?o=`-${e*5.2}px -${e*5.2}px`:o=`${e*5.2}px ${e*5.2}px`)),n==="groovy"&&(r=`url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23${s}' fill-rule='evenodd'/%3E%3C/svg%3E")`,g=a,i=`${e*2.4}px ${e*4}px`,$&&(o=`${h*2.4}px ${v*4}px`)),n==="plus"&&(r=`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${s}' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,g=a,i=`${e*6}px ${e*6}px`),y(E.div,{style:{width:"100%",height:"100%",backgroundColor:g||"transparent",backgroundImage:r,backgroundPosition:d,backgroundSize:i,backgroundRepeat:u,backgroundBlendMode:C,borderRadius:b,filter:H},animate:$&&{backgroundPosition:o},transition:{type:"tween",ease:"linear",duration:k,repeat:1/0,repeatType:"loop"}})}m.displayName="Pattern";z(m,{patternType:{type:p.Enum,defaultValue:"wave-lines",options:["wave-lines","clouds","wiggle","groovy","plus","circles","rectangles","lines","lines-vertical","diagonal","diagonal-two","blocks","wave","zigzag","polka","rhombus","stars","stars-two","paper","crosses"],optionTitles:["Wave Lines","Clouds","Wiggle","Groovy","Plus","Circles","Rectangles","Lines","Lines Vertical","Diagonal","Diagonal 2","Blocks","Wave","ZigZag","Polka","Rhombus","Stars","Stars 2","Paper","Crosses"],title:"Type"},front:{type:p.Color,title:"Front",defaultValue:"#FFF"},back:{type:p.Color,title:"Back",defaultValue:"#2DD"},scale:{type:p.Number,min:1,max:100,step:1,defaultValue:10},radius:{type:p.Number,min:0,max:100,step:1,defaultValue:0},shouldAnimate:{type:p.Boolean,title:"Animate",defaultValue:!1,hidden(l){return l.patternType!=="wave-lines"&&l.patternType!=="wiggle"&&l.patternType!=="clouds"&&l.patternType!=="stars"&&l.patternType!=="groovy"}},direction:{type:p.Enum,title:"Direction",options:["left","right","top","bottom"],optionIcons:["direction-left","direction-right","direction-up","direction-down"],optionTitles:["Left","Right","Top","Bottom"],defaultValue:"left",displaySegmentedControl:!0,hidden(l){return l.patternType==="wiggle"||l.shouldAnimate===!1}},diagonal:{type:p.Boolean,title:"Direction",defaultValue:!0,enabledTitle:"TL",disabledTitle:"BR",hidden(l){return l.patternType!=="wiggle"}},duration:{type:p.Number,min:0,max:50,step:.1,defaultValue:5,hidden(l){return l.shouldAnimate===!1}}});export{m as a};
//# sourceMappingURL=chunk-SNGS4CU5.mjs.map
