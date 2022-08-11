Object.defineProperty({},"__esModule",{value:!0});var t,e={},n=e&&e.__extends||(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0}),e.Asteroid=e.Ship=e.DIRECTIONS=e.Controller=e.EntityTypes=e.Entity=void 0;var i,o,s=function(){function t(t,e,n,o,s){void 0===o&&(o=0),void 0===s&&(s=0),this.type=i.ENTITY,this.radius=50,this.ctx=t,this._xPos=e,this._yPos=n,this._vel=[o,s]}return t.prototype.updatePosition=function(){this.xPos+=this._vel[0],this.yPos+=this._vel[1]},Object.defineProperty(t.prototype,"xPos",{get:function(){return this._xPos},set:function(t){if(void 0===t)throw new Error("tried to set NaN or undefined");this._xPos=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"yPos",{get:function(){return this._yPos},set:function(t){if(void 0===t)throw new Error("tried to set NaN or undefined");this._yPos=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vel",{get:function(){return this._vel},set:function(t){this._vel=t},enumerable:!1,configurable:!0}),t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.strokeStyle="red",this.ctx.arc(this.xPos,this.yPos,this.radius,0,Math.PI),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.strokeStyle="blue",this.ctx.arc(this.xPos,this.yPos,this.radius,Math.PI,2*Math.PI),this.ctx.stroke()},t}();e.Entity=s,(o=i=e.EntityTypes||(e.EntityTypes={}))[o.ASTEROID=0]="ASTEROID",o[o.SHIP=1]="SHIP",o[o.BULLET=2]="BULLET",o[o.ENTITY=3]="ENTITY";var r,a,c=function(){};e.Controller=c,(a=r=e.DIRECTIONS||(e.DIRECTIONS={}))[a.UP=0]="UP",a[a.DOWN=1]="DOWN",a[a.LEFT=2]="LEFT",a[a.RIGHT=3]="RIGHT";var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=i.SHIP,e.radius=15,e}return n(e,t),e.prototype.power=function(t){var e=this.vel,n=e[0],i=e[1],o=[n,i];t===r.UP?o=[n,i-1]:t===r.DOWN?o=[n,i+1]:t===r.LEFT?o=[n-1,i]:t===r.RIGHT&&(o=[n+1,i]),this.vel=[Math.abs(o[0])<=1.5?o[0]:o[0]/Math.abs(o[0]||1)*1.5,Math.abs(o[1])<=1.5?o[1]:o[1]/Math.abs(o[1]||1)*1.5]},e.prototype.fireBullet=function(t){if(-1!==t.getInstance().entities.indexOf(this)){var e=this,n=e.ctx,i=e.xPos,o=e.yPos,s=e.vel,r=e.radius,a=new h(n,i+2.25*r*(s[0]/Math.abs(s[0]||1)),o+2.25*r*(s[1]/Math.abs(s[1]||1)),s[0]/Math.abs(s[0]||1)*3,s[1]/Math.abs(s[1]||1)*3);t.getInstance().entities.push(a)}},e}(s);e.Ship=u;var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=i.BULLET,e.radius=5,e}return n(e,t),e}(s),l=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=t.call(this,e[0],e[1],e[2],1.2*Math.random(),1.2*Math.random())||this;return o.type=i.ASTEROID,o}return n(e,t),e}(s);e.Asteroid=l;var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.setupControls=void 0,d.setupControls=function(t,n){document.onkeydown=function(i){37===i.keyCode?t.power(e.DIRECTIONS.LEFT):38===i.keyCode?t.power(e.DIRECTIONS.UP):39===i.keyCode?t.power(e.DIRECTIONS.RIGHT):40===i.keyCode?t.power(e.DIRECTIONS.DOWN):32===i.keyCode&&t.fireBullet(n)}};var f={};function p(t,e){return Math.sqrt(Math.pow(Math.abs(t[0]-e[0]),2)+Math.pow(Math.abs(t[1]-e[1]),2))}function y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],i=t[1],o=t[2],s=t[3];return p(n,i)<o+s}Object.defineProperty(f,"__esModule",{value:!0}),f.calculatePhysics=void 0,f.calculatePhysics=function(t){for(var e,n,i=t.getInstance().entities,o=0;o<i.length;o++)for(var s=o+1;s<i.length;s++)if(e=i[o],n=i[s],e.type!==n.type&&y([e.xPos,e.yPos],[n.xPos,n.yPos],e.radius,n.radius)){var r=t.getInstance().entities,a=r.slice(0,o);a=a.concat(r.slice(o+1,s)).concat(r.slice(s+1)),t.getInstance().entities=a}else console.log("nothing collided")};var P=document.getElementsByTagName("canvas")[0],v=P.getContext("2d");(function(){function t(n){if(this.entities=[],this.maximumSpeed=1,this.isGameRunning=!0,t._instance)throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");t._instance=this;var i=document.getElementsByTagName("canvas")[0],o=i.height,s=i.width,r=new e.Ship(n,s/2,o/2,0,0);this.ctx=n,t._instance.entities=[r];for(var a=0;a<5;a++)t._instance.entities.push(new e.Asteroid(n,Math.random()*P.width,Math.random()*P.height));(0,d.setupControls)(r,t);var c=document.getElementById("startButton"),u=document.getElementById("stopButton");c&&c.addEventListener("click",(function(){t._instance.isGameRunning=!0,requestAnimationFrame(t._instance.requestGameAnimationFrame)})),u&&u.addEventListener("click",(function(){t._instance.isGameRunning=!1,t._instance.ctx.clearRect(0,0,P.width,P.height)}))}return t.getInstance=function(){return t._instance||(t._instance=new t(v)),t._instance},t.prototype.checkIfOutOfBounds=function(t){return t.xPos<-50?t.xPos=770:t.xPos>770&&(t.xPos=-50),t.yPos<-50?t.yPos=850:t.yPos>850&&(t.yPos=-50),!0},t.prototype.updatePositionOfEntity=function(t){},t.prototype.drawMap=function(){t._instance.ctx.clearRect(0,0,P.width,P.height),t._instance.entities.forEach((function(e){t._instance.checkIfOutOfBounds(e),e.draw(),e.updatePosition()}))},t.prototype.requestGameAnimationFrame=function(){!0===t._instance.isGameRunning&&((0,f.calculatePhysics)(t),t._instance.drawMap(),requestAnimationFrame(t._instance.requestGameAnimationFrame))},t._instance=new t(v),t})().getInstance();
//# sourceMappingURL=index.5abee68d.js.map
