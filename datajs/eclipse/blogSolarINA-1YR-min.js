if(gonline)var cities=new Array,provinces=["INDONESIA","Aceh","Bali","BangkaBelitung","Banten","Bengkulu","DIYogyakarta","DKIJakarta","Gorontalo","Jambi","JawaBarat","JawaTengah","JawaTimur","KalimantanBarat","KalimantanSelatan","KalimantanTengah","KalimantanTimur","KalimantanUtara","KepulauanRiau","Lampung","Maluku","MalukuUtara","NusaTenggaraBarat","NusaTenggaraTimur","Papua","PapuaBarat","Riau","SulawesiBarat","SulawesiSelatan","SulawesiTengah","SulawesiTenggara","SulawesiUtara","SumateraBarat","SumateraSelatan","SumateraUtara"];var eng_mo_short=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),yearlist=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,18,19,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,36,37,37,38,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54,54,55,55,56,56,57,57,57,58,58,58,59,59,60,60,61,61,62,62,63,63,64,64,65,65,65,65,66,66,67,67,68,68,69,69,69,70,70,71,71,72,72,73,73,74,74,75,75,76,76,76,76,77,77,78,78,79,79,80,80,81,81,82,82,83,83,83,84,84,84,85,85,86,86,87,87,87,88,88,89,89,90,90,91,91,92,92,93,93,94,94,94,94,95,95,96,96,97,97,98,98,98,99,99,100,100];

function recursiveRemoveDivChild_smallscreen(e){var t=e.getElementsByTagName("div");if(0<t.length){for(var a=0;a<t.length;a++)e.removeChild(t[a]);recursiveRemoveDivChild_smallscreen(e)}}
function recursiveRemoveTableChild_smallscreen(e){var t=e.getElementsByTagName("table");if(0<t.length){for(var a=0;a<t.length;a++)e.removeChild(t[a]);recursiveRemoveTableChild_smallscreen(e)}}
function clearoldresults(e){for(var t=e.getElementsByTagName("div"),a=0;a<t.length;a++)recursiveRemoveTableChild_smallscreen(t[a]);recursiveRemoveDivChild_smallscreen(e)}var eclform,obsvconst=new Array,c1=new Array,c2=new Array,mid=new Array,c3=new Array,c4=new Array;

function timedependent(e,t){var a,d,n,l;return n=t[1],l=(l=(l=e[9+(d=obsvconst[6])]*n+e[8+d])*n+e[7+d])*n+e[6+d],t[2]=l,l=(l=3*e[9+d]*n+2*e[8+d])*n+e[7+d],t[10]=l,l=(l=(l=e[13+d]*n+e[12+d])*n+e[11+d])*n+e[10+d],t[3]=l,l=(l=3*e[13+d]*n+2*e[12+d])*n+e[11+d],t[11]=l,l=(l=(l=e[16+d]*n+e[15+d])*n+e[14+d])*Math.PI/180,t[4]=l,t[5]=Math.sin(l),t[6]=Math.cos(l),l=(l=2*e[16+d]*n+e[15+d])*Math.PI/180,t[12]=l,360<=(l=(l=e[19+d]*n+e[18+d])*n+e[17+d])&&(l-=360),l=l*Math.PI/180,t[7]=l,l=(l=2*e[19+d]*n+e[18+d])*Math.PI/180,t[13]=l,-2!=(a=t[0])&&0!=a&&2!=a||(l=(l=e[22+d]*n+e[21+d])*n+e[20+d],t[8]=l,t[14]=2*e[22+d]*n+e[21+d]),-1!=a&&0!=a&&1!=a||(l=(l=e[25+d]*n+e[24+d])*n+e[23+d],t[9]=l,t[15]=2*e[25+d]*n+e[24+d]),t}function timelocdependent(e,t){var a,d;return timedependent(e,t),a=obsvconst[6],t[16]=t[7]-obsvconst[1]-e[a+5]/13713.44,t[17]=Math.sin(t[16]),t[18]=Math.cos(t[16]),t[19]=obsvconst[5]*t[17],t[20]=obsvconst[4]*t[6]-obsvconst[5]*t[18]*t[5],t[21]=obsvconst[4]*t[5]+obsvconst[5]*t[18]*t[6],t[22]=t[13]*obsvconst[5]*t[18],t[23]=t[13]*t[19]*t[5]-t[21]*t[12],t[24]=t[2]-t[19],t[25]=t[3]-t[20],t[26]=t[10]-t[22],t[27]=t[11]-t[23],-2!=(d=t[0])&&0!=d&&2!=d||(t[28]=t[8]-t[21]*e[26+a]),-1!=d&&0!=d&&1!=d||(t[29]=t[9]-t[21]*e[27+a]),t[30]=t[26]*t[26]+t[27]*t[27],t}function c1c4iterate(e,t){var a,d,n,l;for(timelocdependent(e,t),a=t[0]<0?-1:1,n=1,d=0;(1e-6<n||n<-1e-6)&&d<50;)l=Math.sqrt(t[30]),n=(n=t[26]*t[25]-t[24]*t[27])/l/t[28],n=Math.abs(n)<=1?a*Math.sqrt(1-n*n)*t[28]/l:0,n=(t[24]*t[26]+t[25]*t[27])/t[30]-n,t[1]=t[1]-n,timelocdependent(e,t),d++;return t}function getc1c4(e){var t,a;a=Math.sqrt(mid[30]),t=(t=mid[26]*mid[25]-mid[24]*mid[27])/a/mid[28],t=Math.sqrt(1-t*t)*mid[28]/a,c1[0]=-2,c4[0]=2,c1[1]=mid[1]-t,c4[1]=mid[1]+t,c1c4iterate(e,c1),c1c4iterate(e,c4)}function c2c3iterate(e,t){var a,d,n,l;for(timelocdependent(e,t),a=t[0]<0?-1:1,mid[29]<0&&(a=-a),n=1,d=0;(1e-6<n||n<-1e-6)&&d<50;)l=Math.sqrt(t[30]),n=(n=t[26]*t[25]-t[24]*t[27])/l/t[29],n=Math.abs(n)<=1?a*Math.sqrt(1-n*n)*t[29]/l:0,n=(t[24]*t[26]+t[25]*t[27])/t[30]-n,t[1]=t[1]-n,timelocdependent(e,t),d++;return t}function getc2c3(e){var t,a;a=Math.sqrt(mid[30]),t=(t=mid[26]*mid[25]-mid[24]*mid[27])/a/mid[29],t=Math.sqrt(1-t*t)*mid[29]/a,c2[0]=-1,c3[0]=1,mid[29]<0?(c2[1]=mid[1]+t,c3[1]=mid[1]-t):(c2[1]=mid[1]-t,c3[1]=mid[1]+t),c2c3iterate(e,c2),c2c3iterate(e,c3)}function observational(e){var t,a,d;t=0==e[0]?1:3!=mid[39]||-1!=e[0]&&1!=e[0]?1:-1,e[31]=Math.atan2(t*e[24],t*e[25]),d=Math.sin(obsvconst[0]),a=Math.cos(obsvconst[0]),e[32]=Math.asin(e[5]*d+e[6]*a*e[18]),e[33]=Math.asin(a*e[17]/Math.cos(e[32])),e[20]<0&&(e[33]=Math.PI-e[33]),e[34]=e[31]-e[33],e[35]=Math.atan2(-1*e[17]*e[6],e[5]*a-e[18]*d*e[6]),-.00524<e[32]?e[40]=0:e[40]=1}function midobservational(){observational(mid),mid[36]=Math.sqrt(mid[24]*mid[24]+mid[25]*mid[25]),mid[37]=(mid[28]-mid[36])/(mid[28]+mid[29]),mid[38]=(mid[28]-mid[29])/(mid[28]+mid[29])}function getmid(e){var t,a;for(mid[0]=0,t=mid[1]=0,a=1,timelocdependent(e,mid);(1e-6<a||a<-1e-6)&&t<50;)a=(mid[24]*mid[26]+mid[25]*mid[27])/mid[30],mid[1]=mid[1]-a,t++,timelocdependent(e,mid)}function getsunriset(e,t,a){var d,n;for(d=1,n=0;1e-5<d||d<-1e-5;){if(4==++n)return;for(d=(a*Math.acos((Math.sin(-.00524)-Math.sin(obsvconst[0])*t[5])/Math.cos(obsvconst[0])/t[6])-t[16])/t[13];12<=d;)d-=24;for(;d<=-12;)d+=24;t[1]+=d,timelocdependent(e,t)}}function getsunrise(e,t){getsunriset(e,t,-1)}function getsunset(e,t){getsunriset(e,t,1)}function copycircumstances(e,t){var a;for(a=1;a<41;a++)t[a]=e[a]}function getall(e){var t;getmid(e),midobservational(),0<mid[37]?(getc1c4(e),mid[36]<mid[29]||mid[36]<-mid[29]?(getc2c3(e),mid[29]<0?mid[39]=3:mid[39]=2,observational(c1),observational(c2),observational(c3),observational(c4),c2[36]=999.9,c3[36]=999.9,(t=0)==c1[40]&&(t+=1e4),0==c2[40]&&(t+=1e3),0==mid[40]&&(t+=100),0==c3[40]&&(t+=10),0==c4[40]&&(t+=1),11110==t?(getsunset(e,c4),observational(c4),c4[40]=3):11100==t?(getsunset(e,c3),observational(c3),c3[40]=3,copycircumstances(c3,c4)):11e3==t?(c3[40]=4,getsunset(e,mid),midobservational(),mid[40]=3,copycircumstances(mid,c4)):1e4==t?(mid[39]=1,getsunset(e,mid),midobservational(),mid[40]=3,copycircumstances(mid,c4)):1111==t?(getsunrise(e,c1),observational(c1),c1[40]=2):111==t?(getsunrise(e,c2),observational(c2),c2[40]=2,copycircumstances(c2,c1)):11==t?(c2[40]=4,getsunrise(e,mid),midobservational(),mid[40]=2,copycircumstances(mid,c1)):1==t?(mid[39]=1,getsunrise(e,mid),midobservational(),mid[40]=2,copycircumstances(mid,c1)):0==t&&(mid[39]=0)):(mid[39]=1,t=0,observational(c1),observational(c4),0==c1[40]&&(t+=100),0==mid[40]&&(t+=10),0==c4[40]&&(t+=1),110==t?(getsunset(e,c4),observational(c4),c4[40]=3):100==t?(getsunset(e,mid),midobservational(),mid[40]=3,copycircumstances(mid,c4)):11==t?(getsunrise(e,c1),observational(c1),c1[40]=2):1==t?(getsunrise(e,mid),midobservational(),mid[40]=2,copycircumstances(mid,c1)):0==t&&(mid[39]=0))):mid[39]=0,2!=mid[39]&&3!=mid[39]||(mid[37]=mid[38])}function readform(){var e;""==eclform.latd.value&&(eclform.latd.value="0"),""==eclform.latm.value&&(eclform.latm.value="0"),""==eclform.lats.value&&(eclform.lats.value="0"),""==eclform.lond.value&&(eclform.lond.value="0"),""==eclform.lonm.value&&(eclform.lonm.value="0"),""==eclform.lons.value&&(eclform.lons.value="0"),""==eclform.alt.value&&(eclform.alt.value="0"),eclform.latd.value=Math.abs(parseFloat(eclform.latd.value)),eclform.latm.value=Math.abs(parseFloat(eclform.latm.value)),eclform.lats.value=Math.abs(parseFloat(eclform.lats.value)),eclform.lond.value=Math.abs(parseFloat(eclform.lond.value)),eclform.lonm.value=Math.abs(parseFloat(eclform.lonm.value)),eclform.lons.value=Math.abs(parseFloat(eclform.lons.value)),eclform.alt.value=Math.abs(parseFloat(eclform.alt.value)),obsvconst[0]=parseFloat(eclform.latd.value)+parseFloat(eclform.latm.value)/60+parseFloat(eclform.lats.value)/3600,obsvconst[0]=obsvconst[0]*parseFloat(eclform.latx.options[eclform.latx.selectedIndex].value),obsvconst[0]=obsvconst[0]*Math.PI/180,obsvconst[1]=parseFloat(eclform.lond.value)+parseFloat(eclform.lonm.value)/60+parseFloat(eclform.lons.value)/3600,obsvconst[1]=obsvconst[1]*parseFloat(eclform.lonx.options[eclform.lonx.selectedIndex].value),obsvconst[1]=obsvconst[1]*Math.PI/180,obsvconst[2]=parseFloat(eclform.alt.value),obsvconst[3]=parseFloat(eclform.tzm.options[eclform.tzm.selectedIndex].value),obsvconst[3]=parseFloat(eclform.tzh.options[eclform.tzh.selectedIndex].value)+obsvconst[3]/60,obsvconst[3]=parseFloat(eclform.tzx.options[eclform.tzx.selectedIndex].value)*obsvconst[3],e=Math.atan(.99664719*Math.tan(obsvconst[0])),obsvconst[4]=.99664719*Math.sin(e)+obsvconst[2]/6378140*Math.sin(obsvconst[0]),obsvconst[5]=Math.cos(e)+obsvconst[2]/6378140*Math.cos(obsvconst[0])}function getdate(e,t){var a,d,n;n=obsvconst[6],d=Math.floor(e[n]-e[1+n]/24),(a=t[1]+e[1+n]-obsvconst[3]-(e[4+n]-.5)/3600)<0&&d--,24<=a&&d++;var l,o=(l=fn13_retarr(d+.5))[0]+"-"+eng_mo_short[l[1]-1]+"-";return o+=l[2]<10?"0"+l[2]:l[2]}function gettime(e,t){var a,d,n;return d="",n=obsvconst[6],(a=t[1]+e[1+n]-obsvconst[3]-(e[4+n]-.5)/3600)<0&&(a+=24),24<=a&&(a-=24),a<10&&(d+="0"),d=d+Math.floor(a)+":",(a=60*a-60*Math.floor(a))<10&&(d+="0"),d+=Math.floor(a),t[40]<=1&&(d+=":",(a=60*a-60*Math.floor(a))<10&&(d+="0"),d+=Math.floor(a)),1==t[40]?(html=document.createElement("font"),html.setAttribute("color","#808080"),ital=document.createElement("i"),ital.appendChild(document.createTextNode(d)),html.appendChild(ital),html):2==t[40]?document.createTextNode(d+"(r)"):3==t[40]?document.createTextNode(d+"(s)"):document.createTextNode(d)}function getalt(e){var t,a;return 2==e[40]?document.createTextNode("0(r)"):3==e[40]?document.createTextNode("0(s)"):((t=e[32]<0&&-.00524<=e[32]?0:180*e[32]/Math.PI)<0?(a="-",t=-t):a="",(t=Math.floor(t+.5))<10&&(a+="0"),a+=t,1==e[40]?(html=document.createElement("font"),html.setAttribute("color","#808080"),ital=document.createElement("i"),ital.appendChild(document.createTextNode(a)),html.appendChild(ital),html):document.createTextNode(a))}function getazi(e){var t,a;return a="",(t=180*e[35]/Math.PI)<0&&(t+=360),360<=t&&(t-=360),(t=Math.floor(t+.5))<100&&(a+="0"),t<10&&(a+="0"),a+=t,1==e[40]?(html=document.createElement("font"),html.setAttribute("color","#808080"),ital=document.createElement("i"),ital.appendChild(document.createTextNode(a)),html.appendChild(ital),html):document.createTextNode(a)}function getduration(){var e,t;return(e=4==c3[40]?mid[1]-c2[1]:4==c2[40]?c3[1]-mid[1]:c3[1]-c2[1])<0?e+=24:24<=e&&(e-=24),e=60*e-60*Math.floor(e)+.05/60,t=Math.floor(e)+"m",(e=60*e-60*Math.floor(e))<10&&(t+="0"),t+=Math.floor(e)+"s"}function getmagnitude(){var e;return e=Math.floor(1e3*mid[37]+.5)/1e3,1==mid[40]?(html=document.createElement("font"),html.setAttribute("color","#808080"),ital=document.createElement("i"),ital.appendChild(document.createTextNode(e)),html.appendChild(ital),html):(2==mid[40]&&(e+="(r)"),3==mid[40]&&(e+="(s)"),document.createTextNode(e))}function getcoverage(){var e,t,a;return e=mid[37]<=0?"0.0":1<=mid[37]?"1.000":(a=2==mid[39]?mid[38]*mid[38]:(a=Math.acos((mid[28]*mid[28]+mid[29]*mid[29]-2*mid[36]*mid[36])/(mid[28]*mid[28]-mid[29]*mid[29])),t=Math.acos((mid[28]*mid[29]+mid[36]*mid[36])/mid[36]/(mid[28]+mid[29])),e=Math.PI-t-a,(mid[38]*mid[38]*e+t-mid[38]*Math.sin(a))/Math.PI),Math.floor(1e3*a+.5)/1e3),1==mid[40]?(html=document.createElement("font"),html.setAttribute("color","#808080"),ital=document.createElement("i"),ital.appendChild(document.createTextNode(e)),html.appendChild(ital),html):(2==mid[40]&&(e+="(r)"),3==mid[40]&&(e+="(s)"),document.createTextNode(e))}function createTableHeader_smallscreen(e){var t=document.createElement("tr");t.setAttribute("class","TblEclipseHdrRow");var a=document.createElement("td");a.setAttribute("style", "white-space:nowrap"),a.appendChild(document.createTextNode(e)),a.appendChild(document.createElement("br")),a.appendChild(document.createTextNode("City")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Type")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Partial Eclipse Begins")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Alt")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("A or T Eclipse Begins")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Max. Eclipse")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Alt")),t.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Azi")),t.appendChild(a);var d=document.createElement("tr");return d.setAttribute("class","TblEclipseHdrRow"),(a=document.createElement("td")).appendChild(document.createTextNode(e)),a.appendChild(document.createElement("br")),a.appendChild(document.createTextNode("City")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("A or T Eclipse Ends")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Partial Eclipse Ends")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Sun Alt")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Eclipse Mag.")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("Eclipse Obs.")),d.appendChild(a),(a=document.createElement("td")).appendChild(document.createTextNode("A or T Eclipse Duration")),d.appendChild(a),[t,d]}function createTable_smallscreen(e,t){for(var a=[document.createElement("tbody"),document.createElement("tbody")],d=0;d<cities.length;d+=9){initcity(d),readform(),obsvconst[6]=t;var n=[];n[1]=0;for(var l=getdate(e,n),o=parseInt(l.substr(0,4)),c=0;c<eng_mo_short.length&&l.substr(5,3)!=eng_mo_short[c];c++);e[t+4]=fn33(o,c+1),e[t+5]=e[t+4],getall(e);var r=Math.floor(1e3*mid[37]+.5)/1e3;if(0<mid[39]&&0<r){var i=document.createElement("tr");td=document.createElement("td"),td.setAttribute("class","nobreak");var m=eclform.loc_name.value,s=document.createTextNode(m);td.appendChild(s),i.appendChild(td),td=document.createElement("td"),s=1==mid[39]?document.createTextNode("P"):2==mid[39]?document.createTextNode("A"):document.createTextNode("T"),td.appendChild(s),i.appendChild(td),4==c1[40]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),i.appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("Â "))):(td=document.createElement("td"),td.appendChild(gettime(e,c1)),i.appendChild(td),td=document.createElement("td"),td.appendChild(getalt(c1))),i.appendChild(td),td=document.createElement("td"),1<mid[39]&&4!=c2[40]?td.appendChild(gettime(e,c2)):td.appendChild(document.createTextNode("-")),i.appendChild(td),td=document.createElement("td"),td.appendChild(gettime(e,mid)),i.appendChild(td),td=document.createElement("td"),td.appendChild(getalt(mid)),i.appendChild(td),td=document.createElement("td"),td.appendChild(getazi(mid)),i.appendChild(td);var u=document.createElement("tr");td=document.createElement("td"),m=eclform.loc_name.value;var p=document.createTextNode(m);td.appendChild(p),u.appendChild(td),td=document.createElement("td"),1<mid[39]&&4!=c3[40]?td.appendChild(gettime(e,c3)):td.appendChild(document.createTextNode("-")),u.appendChild(td),4==c4[40]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),u.appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("Â "))):(td=document.createElement("td"),td.appendChild(gettime(e,c4)),u.appendChild(td),td=document.createElement("td"),td.appendChild(getalt(c4))),u.appendChild(td),td=document.createElement("td"),td.appendChild(getmagnitude()),u.appendChild(td),td=document.createElement("td"),td.appendChild(getcoverage()),u.appendChild(td),td=document.createElement("td"),s=1<mid[39]?document.createTextNode(getduration()):document.createTextNode("-"),td.appendChild(s),u.appendChild(td),a[0].appendChild(i),a[1].appendChild(u)}}if(""!=a[0].innerHTML){(f=[document.createElement("table"),document.createElement("table")])[0].setAttribute("class","TblEclipse"),f[1].setAttribute("class","TblEclipse TblEclipseKanan");var h=createTableHeader_smallscreen(l);a[0].insertBefore(h[0],a[0].rows[0]),a[1].insertBefore(h[1],a[1].rows[0]),f[0].appendChild(a[0]),f[1].appendChild(a[1]),(v=[document.createElement("div"),document.createElement("div"),document.createElement("div")])[0].setAttribute("class","kiri"),v[0].appendChild(f[0]),v[1].setAttribute("class","kanan"),v[1].appendChild(f[1]),v[2].setAttribute("style","clear:both;")}else{var v,f=[document.createElement("table"),document.createElement("table")],b=[document.createElement("tbody"),document.createElement("tbody")],C=[document.createElement("tr"),document.createElement("tr")],g=[document.createElement("td"),document.createElement("td")];s=[document.createTextNode("Solar eclipse "+l+". Event is not visible to Indonesia"),document.createTextNode(" ")];g[0].appendChild(s[0]),g[1].appendChild(s[1]),C[0].appendChild(g[0]),C[1].appendChild(g[1]),b[0].appendChild(C[0]),b[1].appendChild(C[1]),f[0].appendChild(b[0]),f[1].appendChild(b[1]),(v=[document.createElement("div"),document.createElement("div"),document.createElement("div")])[0].setAttribute("class","xkiri"),v[0].appendChild(f[0]),v[1].setAttribute("class","xkanan"),v[1].appendChild(f[1]),v[2].setAttribute("style","clear:both;")}return v}function calculatefor_smallscreen(e){for(var t=document.getElementById("el_results"),a=0;a<e.length;a+=28){var d=createTable_smallscreen(e,a);t.appendChild(d[0]),t.appendChild(d[1]),t.appendChild(d[2])}}function initsolarEclipse(){eclform=document.eclipseform;for(var e=document.getElementById("el_region"),t=0;t<provinces.length;t++)city=document.createElement("option"),city.setAttribute("value",t),cityName=document.createTextNode(provinces[t]),city.appendChild(cityName),e.appendChild(city);e.options.selectedIndex=0,fn112(document.getElementById("span_yearindex"),"yrndx",2001,99);var a=(new Date).getFullYear();2096<a&&(a=2096),document.getElementById("yrndx").options.selectedIndex=18;for(t=0;t<yearlist.length;t++)yearlist[t]=2e3+yearlist[t]}function initcity(e){hemisphere=0,eclform.loc_name.value=cities[e++],val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.latd.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.latm.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.lats.value=val,eclform.latx.selectedIndex=hemisphere,hemisphere=0,val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.lond.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.lonm.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),eclform.lons.value=val,eclform.lonx.selectedIndex=hemisphere,eclform.alt.value=cities[e++],val=cities[e],val<0?(eclform.tzx.selectedIndex=1,val=-val):eclform.tzx.selectedIndex=0,eclform.tzh.selectedIndex=Math.floor(val),eclform.tzm.selectedIndex=Math.floor(4*(val-eclform.tzh.selectedIndex)+.5)}function newloc(){eclform.cityndx.selectedIndex=0,clearoldresults(document.getElementById("el_results"))}function findStartIndex(e){for(var t=e,a=0;a<yearlist.length&&t!=yearlist[a];a++);return 28*a}function findEndIndex(e){for(var t=e,a=yearlist.length-1;0<=a&&t!=yearlist[a];a--);return 28*a}function settimeperiodSE(e){if(gonline){var t=Number(eclform.regionndx.value),a=findStartIndex(n=parseInt(eclform.yr_yrndx.options[eclform.yr_yrndx.selectedIndex].value)),d=findEndIndex(n);document.getElementById("solecl_loaderimg").style.display="table",postReqEclipseData(a,d,t)}else{for(var n,l=new Array,o=(a=findStartIndex(n=parseInt(eclform.yrndx.options[eclform.yrndx.selectedIndex].value)),d=findEndIndex(n),a);o<d+28;o++)l.push(SE2001INA[o]);t=Number(eclform.regionndx.value);cities=[];for(o=0;o<inacities[t].length;o++)cities.push(inacities[t][o]);clearoldresults(document.getElementById("el_results")),calculatefor_smallscreen(l)}}function postReqEclipseData(e,t,a){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&(200==n.status||0==n.status)){var e=JSON.parse(n.responseText),t=e.ctyData,a=e.solEclData;cities=[];for(var d=0;d<t.length;d++)cities.push(t[d]);clearoldresults(document.getElementById("el_results")),calculatefor_smallscreen(a),document.getElementById("solecl_loaderimg").style.display="none"}};var d="begyrindex="+e+"&endyrindex="+t+"&cityindex="+a;n.open("GET","https://foamless-linkages.000webhostapp.com/SolEclDataFeed.php?"+d,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send()}
