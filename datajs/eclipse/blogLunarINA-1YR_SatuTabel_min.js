if(gonline)var cities=new Array,provinces=["INDONESIA","Aceh","Bali","BangkaBelitung","Banten","Bengkulu","DIYogyakarta","DKIJakarta","Gorontalo","Jambi","JawaBarat","JawaTengah","JawaTimur","KalimantanBarat","KalimantanSelatan","KalimantanTengah","KalimantanTimur","KalimantanUtara","KepulauanRiau","Lampung","Maluku","MalukuUtara","NusaTenggaraBarat","NusaTenggaraTimur","Papua","PapuaBarat","Riau","SulawesiBarat","SulawesiSelatan","SulawesiTengah","SulawesiTenggara","SulawesiUtara","SumateraBarat","SumateraSelatan","SumateraUtara"];var eng_mo_short=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),yearlistL=[1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9,10,10,11,11,12,12,13,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,27,28,28,28,29,29,30,30,31,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,48,49,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,56,56,57,57,58,58,59,59,60,60,60,61,61,62,62,63,63,64,64,65,65,66,66,66,67,67,67,68,68,69,69,70,70,71,71,72,72,73,73,74,74,74,75,75,75,76,76,77,77,78,78,78,79,79,80,80,81,81,82,82,83,83,84,84,85,85,85,85,86,86,87,87,88,88,89,89,90,90,91,91,92,92,92,93,93,94,94,94,95,95,96,96,96,96,97,97,98,98,99,99,100,100];function deltatpoly2004(e,t){var a,d,l,n,o=e+(t-.5)/12;e<500&&(a=32*(d=(e-1820)/100)*d-20),500<=e&&e<500&&(a=10583.6,a-=1014.41*(n=d=o/100),a+=33.78311*(n*=d),a-=5.952053*(n*=d),a-=.1798452*(n*=d),a+=.022174192*(n*=d),a+=.0090316521*(n*=d)),500<=e&&e<1600&&(a=1574.2,a-=556.01*(n=d=(o-1e3)/100),a+=71.23472*(n*=d),a+=.319781*(n*=d),a-=.8503463*(n*=d),a-=.005050998*(n*=d),a+=.0083572073*(n*=d)),1600<=e&&e<1700&&(a=120,a-=.9808*(n=l=o-1600),a-=.01532*(n*=l),a+=(n*=l)/7129),1700<=e&&e<1800&&(a=8.83,a+=.1603*(n=l=o-1700),a-=.0059285*(n*=l),a+=13336e-8*(n*=l),a-=(n*=l)/1174e3),1800<=e&&e<1860&&(a=13.72,a-=.332447*(n=l=o-1800),a+=.0068612*(n*=l),a+=.0041116*(n*=l),a-=37436e-8*(n*=l),a+=121272e-10*(n*=l),a-=1.699e-7*(n*=l),a+=8.75e-10*(n*=l)),1860<=e&&e<1900&&(a=7.62,a+=.5737*(n=l=o-1860),a-=.251754*(n*=l),a+=.01680668*(n*=l),a-=.0004473624*(n*=l),a+=(n*=l)/233174),1900<=e&&e<1920&&(a=-2.79,a+=1.494119*(n=l=o-1900),a-=.0598939*(n*=l),a+=.0061966*(n*=l),a-=197e-6*(n*=l)),1920<=e&&e<1941&&(a=21.2,a+=.84493*(n=l=o-1920),a-=.0761*(n*=l),a+=.0020936*(n*=l)),1941<=e&&e<1961&&(a=29.07,a+=.407*(n=l=o-1950),a-=(n*=l)/233,a+=(n*=l)/2547),1961<=e&&e<1986&&(a=45.45,a+=1.067*(n=l=o-1975),a-=(n*=l)/260,a-=(n*=l)/718),1986<=e&&e<2005&&(a=63.86,a+=.3345*(n=l=o-2e3),a-=.060374*(n*=l),a+=.0017275*(n*=l),a+=651814e-9*(n*=l),a+=2373599e-11*(n*=l)),2005<=e&&e<2050&&(a=62.92,a+=.32217*(n=l=o-2e3),a-=.005589*(n*=l)),2050<=e&&e<2150&&(a=(o-1820)/100*32*((o-1820)/100)-20-.5628*(2150-o)),2150<=e&&(a=32*(d=(e-1820)/100)*d-20),e<1955&&2005<e&&(a+=-12932e-9*(o-1955)*(o-1955));return a}function jd_to_cal_retarr(e){var t,a,d,l,n,o=Math.floor(e),r=e-o;if(2299161<=o){var c=Math.floor((o-1867216-.25)/36524.25);t=o+1+c-Math.floor(.25*c)}else t=o;var i=.5+r;1<=i&&(i-=1,++t),a=t+1524,d=Math.floor(6680+(a-2439870-122.1)/365.25),l=Math.floor(365.25*d),n=Math.floor((a-l)/30.6001);var p=Math.floor(a-l-Math.floor(30.6001*n)),s=Math.floor(n-1);12<s&&(s-=12);var u=Math.floor(d-4715);2<s&&--u;var m=Math.floor(24*i),h=Math.floor(60*(24*i-m));f=60*(60*(24*i-m)-h);var v=Math.floor(f);return f-=v,.5<f&&++v,new Array(u,s,p,m,h,v)}function YearSelect(e,t,a,d){var l=document.createElement("select");l.name="yr_"+t,l.id=t,l.title="Year title",l.style.fontWeight="bold",l.size=1,e.appendChild(l);for(var n=a;n<=a+d;n++){var o=document.createElement("option");o.value=n,o.appendChild(document.createTextNode(n)),l.appendChild(o)}}function recursiveRemoveDivChild_smallscreen(e){var t=e.getElementsByTagName("div");if(0<t.length){for(var a=0;a<t.length;a++)e.removeChild(t[a]);recursiveRemoveDivChild_smallscreen(e)}}function recursiveRemoveTableChild_smallscreen(e){var t=e.getElementsByTagName("table");if(0<t.length){for(var a=0;a<t.length;a++)e.removeChild(t[a]);recursiveRemoveTableChild_smallscreen(e)}}function clearoldresults(e){for(var t=e.getElementsByTagName("div"),a=0;a<t.length;a++)recursiveRemoveTableChild_smallscreen(t[a]);recursiveRemoveDivChild_smallscreen(e)}var ob,obsvconstL=new Array,p1=new Array,u1=new Array,u2=new Array,midL=new Array,u3=new Array,u4=new Array,p4=new Array;function populatecircumstances(e,t){var a,d,l,n,o;a=obsvconstL[4],d=t[1],l=(l=e[18+a]*d+e[17+a])*d+e[16+a],n=(n=(n=e[21+a]*d+e[20+a])*d+e[19+a])*Math.PI/180,t[3]=n,o=(o=15*(e[6+a]+1.00273791*(d-e[2+a]/3600))-l)*Math.PI/180-obsvconstL[1],t[2]=o,t[4]=Math.asin(Math.sin(obsvconstL[0])*Math.sin(n)+Math.cos(obsvconstL[0])*Math.cos(n)*Math.cos(o)),t[4]-=Math.asin(Math.sin(e[7+a]*Math.PI/180)*Math.cos(t[4])),180*t[4]/Math.PI<e[8+a]-.5667?t[5]=2:(t[4]<0&&(t[4]=0),t[5]=0)}function getallL(e){var t;t=obsvconstL[4],p1[1]=e[t+9],populatecircumstances(e,p1),midL[1]=e[t+12],populatecircumstances(e,midL),p4[1]=e[t+15],populatecircumstances(e,p4),e[t+5]<3?(u1[1]=e[t+10],populatecircumstances(e,u1),u4[1]=e[t+14],populatecircumstances(e,u4),e[t+5]<2?(u2[1]=e[t+11],u3[1]=e[t+13],populatecircumstances(e,u2),populatecircumstances(e,u3)):(u2[5]=1,u3[5]=1)):(u1[5]=1,u2[5]=1,u3[5]=1,u4[5]=1),0!=p1[5]&&0!=u1[5]&&0!=u2[5]&&0!=midL[5]&&0!=u3[5]&&0!=u4[5]&&0!=p4[5]&&(midL[5]=1)}function readformL(){var e;for(""==ob.latdL.value&&(ob.latdL.value="0"),""==ob.latmL.value&&(ob.latmL.value="0"),""==ob.latsL.value&&(ob.latsL.value="0"),""==ob.londL.value&&(ob.londL.value="0"),""==ob.lonmL.value&&(ob.lonmL.value="0"),""==ob.lonsL.value&&(ob.lonsL.value="0"),""==ob.altL.value&&(ob.altL.value="0"),ob.latdL.value=Math.abs(parseFloat(ob.latdL.value)),ob.latmL.value=Math.abs(parseFloat(ob.latmL.value)),ob.latsL.value=Math.abs(parseFloat(ob.latsL.value)),ob.londL.value=Math.abs(parseFloat(ob.londL.value)),ob.lonmL.value=Math.abs(parseFloat(ob.lonmL.value)),ob.lonsL.value=Math.abs(parseFloat(ob.lonsL.value)),ob.altL.value=Math.abs(parseFloat(ob.altL.value)),obsvconstL[0]=parseFloat(ob.latdL.value)+parseFloat(ob.latmL.value)/60+parseFloat(ob.latsL.value)/3600,obsvconstL[0]=obsvconstL[0]*parseFloat(ob.latxL.options[ob.latxL.selectedIndex].value),obsvconstL[0]=obsvconstL[0]*Math.PI/180,obsvconstL[1]=parseFloat(ob.londL.value)+parseFloat(ob.lonmL.value)/60+parseFloat(ob.lonsL.value)/3600,obsvconstL[1]=obsvconstL[1]*parseFloat(ob.lonxL.options[ob.lonxL.selectedIndex].value),obsvconstL[1]=obsvconstL[1]*Math.PI/180,obsvconstL[2]=parseFloat(ob.altL.value),obsvconstL[3]=parseFloat(ob.tzmL.options[ob.tzmL.selectedIndex].value),obsvconstL[3]=parseFloat(ob.tzhL.options[ob.tzhL.selectedIndex].value)+obsvconstL[3]/60,obsvconstL[3]=parseFloat(ob.tzxL.options[ob.tzxL.selectedIndex].value)*obsvconstL[3],e=obsvconstL[4]=0;e<3;e++)ob.ecltypeL[e].checked&&(obsvconstL[5]=ob.ecltypeL[e].value)}function getdateL(e,t){var a,d,l;l=obsvconstL[4],d=Math.floor(e[l]-e[1+l]/24),(a=t[1]+e[1+l]-obsvconstL[3]-(e[2+l]-30)/3600)<0&&d--,24<=a&&d++;var n,o=(n=jd_to_cal_retarr(d+.5))[0]+"-"+eng_mo_short[n[1]-1]+"-";return o+=n[2]<10?"0"+n[2]:n[2]}function gettimeL(e,t){var a,d,l,n,o;return d="",l=obsvconstL[4],(a=t[1]+e[1+l]-obsvconstL[3]-(e[2+l]-30)/3600)<0&&(a+=24),24<=a&&(a-=24),a<10&&(d+="0"),d=d+Math.floor(a)+":",(a=60*a-60*Math.floor(a))<10&&(d+="0"),d+=Math.floor(a),2==t[5]?((n=document.createElement("font")).setAttribute("color","red"),(o=document.createElement("i")).appendChild(document.createTextNode(d)),n.appendChild(o),n):document.createTextNode(d)}function getaltL(e){var t,a,d,l;return t=180*e[4]/Math.PI,(t=Math.floor(t+.5))<0?(a="-",t=-t):a="+",t<10&&(a+="0"),a+=t,2==e[5]?((d=document.createElement("font")).setAttribute("color","red"),(l=document.createElement("i")).appendChild(document.createTextNode(a)),d.appendChild(l),d):document.createTextNode(a)}function createTableHeaderL_smallscreen(e,t){var a=document.createElement("tr");a.setAttribute("class","TblEclipseHdrRow");var d=document.createElement("td");d.appendChild(document.createTextNode("City")),a.appendChild(d),d=document.createElement("td");var l=document.createTextNode("Penumbral"),n=document.createTextNode("Mag."),o=document.createElement("br");d.appendChild(l),d.appendChild(o),d.appendChild(n),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Umbral"),n=document.createTextNode("Mag."),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Penumbral"),n=document.createTextNode("Eclipse");var r=document.createTextNode("Begins");return o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Partial"),n=document.createTextNode("Eclipse"),r=document.createTextNode("Begins"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Totall"),n=document.createTextNode("Eclipse"),r=document.createTextNode("Begins"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Mid."),n=document.createTextNode("Eclipse"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Total"),n=document.createTextNode("Eclipse"),r=document.createTextNode("Ends"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Partial"),n=document.createTextNode("Eclipse"),r=document.createTextNode("Ends"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),d=document.createElement("td"),l=document.createTextNode("Penumbral"),n=document.createTextNode("Eclipse"),r=document.createTextNode("Ends"),o=document.createElement("br"),d.appendChild(l),d.appendChild(o),d.appendChild(n),o=document.createElement("br"),d.appendChild(o),d.appendChild(r),a.appendChild(d),(d=document.createElement("td")).appendChild(document.createTextNode("Alt.")),a.appendChild(d),a}function createTableL_smallscreen(e,t){obsvconstL[4]=t;for(var a=getdateL(e,p1),d=parseInt(a.substr(0,4)),l=0;l<eng_mo_short.length&&a.substr(5,3)!=eng_mo_short[l];l++);e[t+2]=deltatpoly2004(d,l+1);for(var n=document.createElement("tbody"),o=0;o<cities.length;o+=9)if(gantikota(o),readformL(),e[5+t]<=obsvconstL[5]){if(obsvconstL[4]=t,getallL(e),1==e[5+t])var r="(T)otal";else if(2==e[5+t])r="(P)artial";else r="Pe(n)umbral";if(1!=midL[5]){rows=[document.createElement("tr")],rows[0].setAttribute("class","nobreak"),td=document.createElement("td");var c=ob.loc_nameL.value,i=document.createTextNode(c);td.appendChild(i),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode(e[3+t])),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode(e[4+t])),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(gettimeL(e,p1)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(p1)),rows[0].appendChild(td),1==u1[5]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("-"))):(td=document.createElement("td"),td.appendChild(gettimeL(e,u1)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(u1))),rows[0].appendChild(td),1==u2[5]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("-"))):(td=document.createElement("td"),td.appendChild(gettimeL(e,u2)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(u2))),rows[0].appendChild(td),1==u2[5]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-"))):(td=document.createElement("td"),td.appendChild(getaltL(u2))),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(gettimeL(e,midL)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(midL)),rows[0].appendChild(td),1==u3[5]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("-"))):(td=document.createElement("td"),td.appendChild(gettimeL(e,u3)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(u3))),rows[0].appendChild(td),1==u4[5]?(td=document.createElement("td"),td.appendChild(document.createTextNode("-")),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(document.createTextNode("-"))):(td=document.createElement("td"),td.appendChild(gettimeL(e,u4)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(u4))),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(gettimeL(e,p4)),rows[0].appendChild(td),td=document.createElement("td"),td.appendChild(getaltL(p4)),rows[0].appendChild(td),n.appendChild(rows[0])}}if(""!=n.innerHTML){var p=document.createElement("table"),s=document.createElement("tr"),u=document.createElement("th");u.setAttribute("colspan","18"),u.setAttribute("style","text-align:left;font-size:120%");i=document.createTextNode(r+" Lunar Eclipse "+a);u.appendChild(i),s.appendChild(u),n.insertBefore(s,n.rows[0]);var m=createTableHeaderL_smallscreen(a,r);p.setAttribute("class","TblEclipse"),n.insertBefore(m,n.rows[1]),p.appendChild(n),(h=document.createElement("div")).setAttribute("class","satutabel"),h.appendChild(p)}else{p=document.createElement("table");var h,v=document.createElement("tbody"),b=document.createElement("tr"),L=document.createElement("td");i=document.createTextNode("Lunar eclipse "+a+". Event is not visible to Indonesia");L.appendChild(i),b.appendChild(L),v.appendChild(b),p.appendChild(v),(h=document.createElement("div")).setAttribute("class","xsatutable"),h.appendChild(p)}return h}function calculateforL_smallscreen(e){for(var t=document.getElementById("el_resultsL"),a=1;a<e.length;a+=22){var d=createTableL_smallscreen(e,a);t.appendChild(d)}}function initlunarEclipse(){ob=document.eclipseformL;for(var e=document.getElementById("el_regionL"),t=0;t<provinces.length;t++)city=document.createElement("option"),city.setAttribute("value",t),cityName=document.createTextNode(provinces[t]),city.appendChild(cityName),e.appendChild(city);e.options.selectedIndex=0,YearSelect(document.getElementById("span_yearindexL"),"yrndx",2001,99);var a=(new Date).getFullYear();2096<a&&(a=2096),document.getElementById("yrndx").options.selectedIndex=19;for(t=0;t<yearlistL.length;t++)yearlistL[t]=2e3+yearlistL[t]}function gantikota(e){e<0||(hemisphere=0,ob.loc_nameL.value=cities[e++],val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.latdL.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.latmL.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.latsL.value=val,ob.latxL.selectedIndex=hemisphere,hemisphere=0,val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.londL.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.lonmL.value=val,val=cities[e++],val<0&&(val=-val,hemisphere=1),ob.lonsL.value=val,ob.lonxL.selectedIndex=hemisphere,ob.altL.value=cities[e++],val=cities[e],val<0?(ob.tzxL.selectedIndex=1,val=-val):ob.tzxL.selectedIndex=0,ob.tzhL.selectedIndex=Math.floor(val),ob.tzmL.selectedIndex=Math.floor(4*(val-ob.tzhL.selectedIndex)+.5))}function regionchangeL(){for(opt=document.getElementById("el_citiesL");opt.options.remove(1),1<opt.length;);opt.removeChild(opt.options[0]);var e=Number(document.eclipseform.regionndxL.value);cities=[];for(var t=0;t<inacities[e].length;t++)cities.push(inacities[e][t]);for(t=0;t<cities.length;t+=9)city=document.createElement("option"),city.setAttribute("value",t),cityName=document.createTextNode(cities[t]),city.appendChild(cityName),opt.appendChild(city)}function citychangeL(){clearoldresults(document.getElementById("el_resultsL")),index=Number(ob.cityndxL.value),index<=0||(hemisphere=0,ob.loc_nameL.value=cities[index++],val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.latdL.value=val,val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.latmL.value=val,val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.latsL.value=val,ob.latxL.selectedIndex=hemisphere,hemisphere=0,val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.londL.value=val,val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.lonmL.value=val,val=cities[index++],val<0&&(val=-val,hemisphere=1),ob.lonsL.value=val,ob.lonxL.selectedIndex=hemisphere,ob.altL.value=cities[index++],val=cities[index],val<0?(ob.tzxL.selectedIndex=1,val=-val):ob.tzxL.selectedIndex=0,ob.tzhL.selectedIndex=Math.floor(val),ob.tzmL.selectedIndex=Math.floor(4*(val-ob.tzhL.selectedIndex)+.5))}function newlocL(){ob.cityndxL.selectedIndex=0,clearoldresults(document.getElementById("el_resultsL"))}function findStartIndexL(e){for(var t=e,a=0;a<yearlistL.length&&t!=yearlistL[a];a++);return 22*a}function findEndIndexL(e){for(var t=e,a=yearlistL.length-1;0<=a&&t!=yearlistL[a];a--);return 22*a}function settimeperiodL(e){for(var t=new Array,a=parseInt(ob.yrndx.options[ob.yrndx.selectedIndex].value),d=findStartIndexL(a),l=findEndIndexL(a),n=d;n<=l;n++)t.push(LE2001INA[n]);var o=Number(ob.regionndxL.value);cities=[];for(n=0;n<inacities[o].length;n++)cities.push(inacities[o][n]);clearoldresults(document.getElementById("el_resultsL")),calculateforL_smallscreen(t)}