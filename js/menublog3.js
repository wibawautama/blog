function disqusThread(){
var d = document, s = d.createElement('script');
s.src = 'https://wibawautama-github-io-blog.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
}

function startUp(){
var div0 = document.createElement("div");
div0.setAttribute("class", "tabs-inner"); 
div0.setAttribute('id', "menutab"); //id =menutab class=tabs-inner>
var div1  = document.createElement("div");
div1.setAttribute("class", "widget"); //<div class=widget>
var div2  = document.createElement("div");
div2.setAttribute("style", "float:left;width:100%;"); //<div style="float:left;width:100%;">
var chk = document.createElement('input');
chk.setAttribute('type','checkbox');
chk.setAttribute('id', "toggle"); //<input type="checkbox" id="toggle" />
var lbl = document.createElement('label');
lbl.setAttribute("for", "toggle"); //<label class="toggle" for="toggle">
lbl.setAttribute("class", "toggle"); //<label class="toggle" for="toggle">
var spn1 = document.createElement('span');
spn1.setAttribute('style','font-size:1.5em;position:relative;top:0px'); //<span style="font-size:1.5em;position:relative;top:0px">
			var chr1 = document.createTextNode('≡');
			spn1.appendChild(chr1);//&equiv;</span> 
var spn2 = document.createElement('span');
spn2.setAttribute('style','position:relative;top:-2px'); //<span style="position:relative;top:-2px">
			var chr2 = document.createTextNode("Menu");
			spn2.appendChild(chr2);// Menu </span>
lbl.appendChild(spn1);
lbl.appendChild(spn2); //</label>
div2.appendChild(chk);
div2.appendChild(lbl);

var ul = document.createElement("ul");
ul.setAttribute("id", "blogmenu"); //<ul id="blogmenu" class="egmenu">
ul.setAttribute("class", "egmenu"); 
div2.appendChild(ul);//</ul>
div1.appendChild(div2); //</div>
var bb = document.createElement("br");
div1.appendChild(bb);//<br>
div0.appendChild(div1); //</div> <!--tab-inner-->
var obj = document.getElementById('hdr');
obj.appendChild(div0);
var smenu = stringMenu03();
document.getElementById('blogmenu').innerHTML = smenu;
settap(); //fn7
document.getElementById('side').innerHTML = "<ul style='list-style:none;margin:0;padding:0;line-height:24px;'>" + smenu+ "</ul>";

if (window.location.protocol=="https:" || window.location.protocol=="http:"){
var wrapdiv = document.getElementById('wrp');
var disqusdiv = document.createElement("div");
disqusdiv.setAttribute("id", "disqus_thread");
disqusdiv.setAttribute("style", "background-color:yellow;border:1px solid black");
var txt = document.createTextNode("Disquss Thread");
disqusdiv.appendChild(txt);
wrapdiv.parentNode.insertBefore(disqusdiv, wrapdiv.nextSibling)

var text = document.createTextNode("Please enable JavaScript to view the comments powered by Disqus.");
var noscr = document.createElement("noscript");
noscr.appendChild(text);
var dthread = document.getElementById("disqus_thread");
dthread.parentNode.insertBefore(noscr, dthread.nextSibling)
disqusThread();
}//if
}//function startUp

function addClass(element, classToAdd) { 
    var currentClassValue = element.className;
	if (currentClassValue.indexOf(classToAdd) == -1) {
	if ((currentClassValue == null) || (currentClassValue === "")) {
      element.className = classToAdd;
	} else {
      element.className += " " + classToAdd;
	}
	}
}

function removeClass(element, classToRemove) {
 var currentClassValue = element.className;
 if (currentClassValue == classToRemove) {
 element.className = "";
 return;
 }
 var classValues = currentClassValue.split(" ");
 var filteredList = [];
 for (var i = 0 ; i < classValues.length; i++) {
 if (classToRemove != classValues[i]) {             filteredList.push(classValues[i]);
 }
 }
 element.className = filteredList.join(" ");
}
function togleClass(element, classToAdd) { 
    var currentClassValue = element.className;
	if (currentClassValue.indexOf(classToAdd) == -1) { //notfound
	if ((currentClassValue == null) || (currentClassValue === "")) {
      element.className = classToAdd;
	} else {
      removeClass(element,currentClassValue);
	}
	}
}

// shim for older browsers:
if (!document.getElementsByClassName) {
    document.getElementsByClassName = (function(){
        // Utility function to traverse the DOM:
        function traverse (node, callback) {
            callback(node);
            for (var i=0;i < node.childNodes.length; i++) {
                traverse(node.childNodes[i],callback);
            }
        }

        // Actual definition of getElementsByClassName
        return function (name) {
            var result = [];
            traverse(document.body,function(node){
                if (node.className == name) {
                    result.push(node);
                }
            });
            return result;
        }
    })()
}

function ISXBAddHandler(target,eventName,handler){
  if (target.addEventListener){
    target.addEventListener(eventName, function(e){handler.apply(target,[e])}, false);
  }else if(target.attachEvent){
    target.attachEvent("on" + eventName, function(e){handler.apply(target,[e]);});
  }else{
    var originalHandler = target["on" + eventName];
    if(originalHandler){
      target["on" + eventName] = function(e){originalHandler(e);handler.apply(target,[e]);};
    }else{
      target["on" + eventName] = handler;
    }
  }
}

var tap = function(e){
  e = e || window.event;  
 if(e.preventDefault)
   e.preventDefault(); 
 else
   e.returnValue = false; 

 if (this.parentNode.classList){
  if (this.parentNode.classList.toggle)
   this.parentNode.classList.toggle('tap');
  }
 else
   togleClass(this.parentNode ,'tap');
};
function settap(){
var obj = document.getElementsByTagName('A');
for (var i=0; i<obj.length; i++){
if (obj[i].className=='has_sub'){
ISXBAddHandler(obj[i],"click", tap);  
} 
}
}

//<script type='text/javascript'>
//<![CDATA[ 

function stringMenu03(){
var pil = (window.location.protocol=="file:"?0:1);
var arrBaseUrl = ["file:///D:/DNLOADS/New%20folder/githubblog/", "https://wibawautama.github.io/blog/"];
var ar = new Array(
"",
"#",
"-",
"post/HHST.html",
"post/Legge_IChing_PartOne.html",
"post/Legge_IChing_PartTwo.html",
//"@",
//"#",
//"-",
//"p/kalkulator-ceit-capgo.html", 
//"p/kalkulator-bazi.html", 
//"p/kalkulator-24-solar-terms.html", 
//"@",
//"#",
//"-",
//"p/kalkulator-nikah-jawa.html",
//"p/pindah-jawa.html",
//"p/empat-musim.html", 
//"p/berat-tulang.html", 
"@",
"about.html"
//"p/hubungi-saya.html",
//"p/kebijakan-privasi.html"
);
var sr = new Array(
"Home", 
"-",
"Post",
"Hari-hari Suci Tridharma",
"I Ching Bagian Pertama",
"I Ching Bagian Kedua",
//"@",
//"-",
//"Kalkulator",
//"Ceit Capgo (Uposatha)",
//"Bazi (Empat Pilar)",
//"24 Solar Terms",
//"@",
//"-",
//"Numerologi",
//"Hari Baik Nikah Jawa", 
//"Hari Baik Pindah Jawa", 
//"Syair Empat Musim",
//"Berat Tulang Spiritual",
"@",
"About"
//"Contact Us", 
//"Privacy Policy"
);

var st="";

for (var i=0; i<sr.length; i++){

if (sr[i]=="-"){
i++;
st = st + "<li> <a class='has_sub' onclick='void(0)'>" + sr[i] + "&#x25BC;</a>";
st = st + "<ul>";
i++;
do{

    st = st + "<li><a href=\""+ arrBaseUrl[pil] + ar[i]+"\" >"+sr[i] + "</a></li>"; 
	//target='target_iframe'
	//console.log("<li><a href=\""+ arrBaseUrl[pil] + ar[i]+"\" >"+sr[i] + "</a></li>");
i++;
} while (sr[i]!="@");
st = st + "</ul>";
//i++;
}//if

   
  if (sr[i]!='@') {
        st = st + "<li><a href=\""+ arrBaseUrl[pil] +  (sr[i]=="Home"?"index.html":ar[i])+"\" >"+sr[i] + "</a></li>"; //target='target_iframe'
	//console.log("<li><a href=\""+ arrBaseUrl[pil] + (sr[i]=="Home"?"index.html":ar[i])+"\" >"+sr[i] + "</a></li>");
		}
}//for



return st;

}//funct

