function MenuSpace(e){var t=document.createElement("div");t.setAttribute("class","tabs-inner"),t.setAttribute("id","menutab");var a=document.createElement("div");a.setAttribute("class","widget");var n=document.createElement("div");n.setAttribute("style","float:left;width:100%;");var l=document.createElement("input");l.setAttribute("type","checkbox"),l.setAttribute("id","toggle");var i=document.createElement("label");i.setAttribute("for","toggle"),i.setAttribute("class","toggle");var s=document.createElement("span");s.setAttribute("style","font-size:1.5em;position:relative;top:0px");var o=document.createTextNode("≡");s.appendChild(o);var r=document.createElement("span");r.setAttribute("style","position:relative;top:-2px");var d=document.createTextNode("Menu");r.appendChild(d),i.appendChild(s),i.appendChild(r),n.appendChild(l),n.appendChild(i);var c=document.createElement("ul");c.setAttribute("id","blogmenu"),c.setAttribute("class","egmenu"),n.appendChild(c),a.appendChild(n);var u=document.createElement("br");a.appendChild(u),t.appendChild(a),e.appendChild(t),document.getElementById("blogmenu").innerHTML=stringMenu03(),settap()}function addClass(e,t){var a=e.className;-1==a.indexOf(t)&&(null==a||""===a?e.className=t:e.className+=" "+t)}function removeClass(e,t){var a=e.className;if(a!=t){for(var n=a.split(" "),l=[],i=0;i<n.length;i++)t!=n[i]&&l.push(n[i]);e.className=l.join(" ")}else e.className=""}function togleClass(e,t){var a=e.className;-1==a.indexOf(t)&&(null==a||""===a?e.className=t:removeClass(e,a))}function ISXBAddHandler(t,e,a){if(t.addEventListener)t.addEventListener(e,function(e){a.apply(t,[e])},!1);else if(t.attachEvent)t.attachEvent("on"+e,function(e){a.apply(t,[e])});else{var n=t["on"+e];t["on"+e]=n?function(e){n(e),a.apply(t,[e])}:a}}document.getElementsByClassName||(document.getElementsByClassName=function(t){var a=[];return function e(t,a){a(t);for(var n=0;n<t.childNodes.length;n++)e(t.childNodes[n],a)}(document.body,function(e){e.className==t&&a.push(e)}),a});var tap=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1,this.parentNode.classList?this.parentNode.classList.toggle&&this.parentNode.classList.toggle("tap"):togleClass(this.parentNode,"tap")};function settap(){for(var e=document.getElementsByTagName("A"),t=0;t<e.length;t++)"has_sub"==e[t].className&&ISXBAddHandler(e[t],"click",tap)}
function stringMenu03(){var e=1;"file:"==window.location.protocol&&(e=0);for(var t=["file:///D:/DNLOADS/New%20folder/githubblog/","https://wibawautama.github.io/blog/"],
a=new Array(
"",
"#",
"-",
"post/HHST.html",
"post/Legge_IChing_PartOne.html",
"post/Legge_IChing_PartTwo.html",
"@",
"about.html"),
n=new Array(
"Home",
"-",
"Post",
"Hari-hari Suci Tridharma",
"I Ching Bagian Pertama",
"I Ching Bagian Kedua",
"@",
"About"),
l="",i=0;i<n.length;i++){if("-"==n[i]){for(l=l+"<li> <a class='has_sub' onclick='void(0)'>"+n[++i]+"▼</a>",l+="<ul>",i++;l=l+'<li><a href="'+t[e]+a[i]+'" >'+n[i]+"</a></li>","@"!=n[++i];);l+="</ul>"}"@"!=n[i]&&(l=l+'<li><a href="'+t[e]+("Home"==n[i]?"index.html":a[i])+'" >'+n[i]+"</a></li>")}return l}
