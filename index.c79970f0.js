var n=document.getElementsByTagName("canvas")[0].getContext("2d"),t=new(function(){function t(){}return t.prototype.draw=function(){n.beginPath(),n.arc(100,75,50,0,2*Math.PI),n.stroke()},t}());t.ctx=n,t.x=20,t.y=40,t.width=50,t.height=50,t.draw();(function(){function n(){if(n._instance)throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");n._instance=this}return n.getInstance=function(){return n._instance||(n._instance=new n),n._instance},n.prototype.updateGameLogic=function(){console.log("my logic!")},n.prototype.drawMap=function(){},n._instance=new n,n})().getInstance();
//# sourceMappingURL=index.c79970f0.js.map
