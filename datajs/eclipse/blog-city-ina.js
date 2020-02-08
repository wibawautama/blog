//Perhatian! Wajib untuk mencantumkan BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) sebagai sumber data
//http://data.bmkg.go.id/prakiraan-cuaca/

if (!gonline){

var cities = new Array();

var provinces = [ 
 "INDONESIA",
 "Aceh",
 "Bali",
 "BangkaBelitung",
 "Banten",
 "Bengkulu",
 "DIYogyakarta",
 "DKIJakarta",
 "Gorontalo",
 "Jambi",
 "JawaBarat",
 "JawaTengah",
 "JawaTimur",
 "KalimantanBarat",
 "KalimantanSelatan",
 "KalimantanTengah",
 "KalimantanTimur",
 "KalimantanUtara",
 "KepulauanRiau",
 "Lampung",
 "Maluku",
 "MalukuUtara",
 "NusaTenggaraBarat",
 "NusaTenggaraTimur",
 "Papua",
 "PapuaBarat",
 "Riau",
 "SulawesiBarat",
 "SulawesiSelatan",
 "SulawesiTengah",
 "SulawesiTenggara",
 "SulawesiUtara",
 "SumateraBarat",
 "SumateraSelatan",
 "SumateraUtara"
];


var inacities = [
[
//"- - - CAP. CITY OF INDONESIA PROV - - -",  0,  0,  0,  0,  0,  0,  0,  0,
"Banda Aceh",5,32,42,-95,-20,-35,0.0, 7.0,
"Medan",3,40,1,-98,-40,-16,0.0, 7.0,
"Padang",0,-52,-48,-100,-24,0,0.0, 7.0,
"Pekanbaru",0,33,27,-101,-27,-44,0.0, 7.0,
"Bengkulu",-3,-47,-40,-102,-18,-17,0.0, 7.0,
"Jambi",-1,-36,-36,-103,-35,-24,0.0, 7.0,
"Tanjung Pinang",0,54,23,-104,-33,-45,0.0, 7.0,
"Palembang",-2,-58,-43,-104,-45,-7,0.0, 7.0,
"Bandar Lampung",-5,-25,-26,-105,-15,-4,0.0, 7.0,
"Serang",-6,-8,0,-106,-10,0,0.0, 7.0,
"Jakarta Pusat",-6,-10,-35,-106,-49,-36,0.0, 7.0,
"Pangkal Pinang",-2,-11,-32,-106,-7,-41,0.0, 7.0,
"Bandung",-6,-54,-36,-107,-38,-49,0.0, 7.0,
"Pontianak",0,-5,-20,-109,-21,-5,0.0, 7.0,
"Yogyakarta",-7,-48,-10,-110,-22,-34,0.0, 7.0,
"Semarang",-6,-57,-33,-110,-26,-19,0.0, 7.0,
"Surabaya",-7,-16,-47,-112,-42,-40,0.0, 7.0,
"Palangkaraya",-2,-12,-36,-113,-55,-12,0.0, 7.0,
"Banjarmasin",-3,-19,-42,-114,-34,-23,0.0, 8.0,
"Denpasar",-8,-38,-37,-115,-13,-29,0.0, 8.0,
"Mataram",-8,-34,-53,-116,-7,-3,0.0, 8.0,
"Samarinda",0,-25,-49,-117,-10,-28,0.0, 8.0,
"Tarakan",3,19,45,-117,-34,-16,0.0, 8.0,
"Mamuju",-2,-41,0,-118,-50,0,0.0, 8.0,
"Makassar",-5,-7,-17,-119,-25,-8,0.0, 8.0,
"Kendari",-3,-57,-58,-122,-36,0,0.0, 8.0,
"Gorontalo",0,31,54,-123,-5,-17,0.0, 8.0,
"Kupang",-10,-13,-30,-123,-36,-13,0.0, 8.0,
"Manado",1,30,8,-124,-51,-8,0.0, 8.0,
"Ternate",0,50,0,-127,-21,-56,0.0, 9.0,
"Ambon",-3,-40,-22,-128,-14,-2,0.0, 9.0,
"Manokwari",0,-54,0,-134,0,0,0.0, 9.0,
"Jayapura",-2,-33,-22,-140,-42,-12,0.0, 9.0],

["Aceh Besar",5,17,53,-95,-35,-49,0.0,7.0,
"Aceh Jaya",4,37,0,-95,-37,0,0.0,7.0,
"Banda Aceh",5,32,42,-95,-20,-35,0.0,7.0,
"Pidie",5,22,39,-95,-57,-29,0.0,7.0,
"Sabang",5,50,20,-95,-17,-43,0.0,7.0,
"Aceh Barat",4,10,36,-96,-7,-30,0.0,7.0,
"Aceh Barat Daya",3,44,24,-96,-51,-36,0.0,7.0,
"Aceh Tengah",4,34,1,-96,-48,-53,0.0,7.0,
"Bener Meriah",4,46,9,-96,-59,-25,0.0,7.0,
"Bireun",5,13,48,-96,-43,-12,0.0,7.0,
"Nagan Raya",4,1,4,-96,-20,-41,0.0,7.0,
"Pidie Jaya",5,15,1,-96,-10,-28,0.0,7.0,
"Simeulue",2,29,38,-96,-11,-4,0.0,7.0,
"Aceh Selatan",3,16,48,-97,-13,-12,0.0,7.0,
"Aceh Singkil",2,18,36,-97,-51,0,0.0,7.0,
"Aceh Tenggara",3,30,29,-97,-48,-1,0.0,7.0,
"Aceh Timur",4,56,26,-97,-45,-23,0.0,7.0,
"Aceh Utara",5,1,36,-97,-19,-6,0.0,7.0,
"Gayo Lues",3,58,41,-97,-19,-23,0.0,7.0,
"Langsa",4,29,4,-97,-55,-17,0.0,7.0,
"Lhokseumawe",5,10,48,-97,-7,-12,0.0,7.0,
"Aceh Tamiang",4,17,5,-98,-3,-55,0.0,7.0,
"Subulussalam",2,38,43,-98,-1,-34,0.0,7.0],

["Negara",-8,-18,0,-114,-40,0,0.0,8.0,
"Amplapura",-8,-25,-12,-115,-36,-36,0.0,8.0,
"Bangli",-8,-25,-48,-115,-21,0,0.0,8.0,
"Denpasar",-8,-38,-37,-115,-13,-29,0.0,8.0,
"Gianyar",-8,-32,-24,-115,-19,-48,0.0,8.0,
"Mengwi",-8,-31,-48,-115,-12,0,0.0,8.0,
"Semarapura",-8,-32,-24,-115,-23,-24,0.0,8.0,
"Singaraja",-8,-6,-59,-115,-5,-9,0.0,8.0,
"Tabanan",-8,-32,-13,-115,-7,-25,0.0,8.0],

["Jebus",-1,-45,-54,-105,-27,-55,0.0,7.0,
"Mentok",-2,-3,-54,-105,-9,-55,0.0,7.0,
"Sungai Liat",-1,-56,-5,-105,-57,-6,0.0,7.0,
"Sungai Selan",-2,-23,-59,-105,-51,-17,0.0,7.0,
"Plbh. Belinyu",-1,-26,-55,-105,-39,-15,0.0,7.0,
"Koba",-2,-29,-56,-106,-18,-49,0.0,7.0,
"Pangkal Pinang",-2,-11,-32,-106,-7,-41,0.0,7.0,
"Toboali",-2,-47,-32,-106,-29,-43,0.0,7.0,
"Selat Nasik",-2,-50,-19,-107,-25,-17,0.0,7.0,
"Tanjung Pandan",-2,-54,0,-107,-33,-53,0.0,7.0,
"Manggar",-2,-56,-10,-108,-1,-44,0.0,7.0],

["Anyer",-6,-5,-38,-105,-53,-13,0.0,7.0,
"Binuangen",-6,-50,-15,-105,-53,-21,0.0,7.0,
"Carita",-6,-18,-54,-105,-50,-37,0.0,7.0,
"Labuan",-6,-23,-35,-105,-49,-46,0.0,7.0,
"Malingping",-6,-46,-29,-105,-57,-5,0.0,7.0,
"Ujung Kulon",-6,-45,-44,-105,-20,-18,0.0,7.0,
"Plbh. Merak",-5,-54,-15,-105,-53,-50,0.0,7.0,
"Bayah",-6,-55,-59,-106,-14,-38,0.0,7.0,
"Bojonegara",-5,-58,-47,-106,-5,-34,0.0,7.0,
"Kota Cilegon",-6,-1,-22,-106,-3,-10,0.0,7.0,
"Ciruas",-6,-6,-45,-106,-13,-29,0.0,7.0,
"Gunung kencana",-6,-35,-8,-106,-4,-43,0.0,7.0,
"Kab. Lebak",-6,-31,-34,-106,-11,-50,0.0,7.0,
"Plbh. Merak",-5,-56,0,-106,0,-4,0.0,7.0,
"Pandeglang",-6,-18,-14,-106,-5,-24,0.0,7.0,
"Rangkasbitung",-6,-21,-21,-106,-14,-56,0.0,7.0,
"Serang",-6,-8,0,-106,-10,0,0.0,7.0,
"Kota Tangerang",-6,-10,-32,-106,-38,-10,0.0,7.0,
"Tigaraksa",-6,-16,-29,-106,-28,-49,0.0,7.0],

["Mukomuko",-2,-30,0,-101,-10,0,0.0,7.0,
"Bengkulu",-3,-47,-40,-102,-18,-17,0.0,7.0,
"Bengkulu Selatan",-4,-23,-54,-102,-59,-9,0.0,7.0,
"Bengkulu Tengah",-3,-44,-17,-102,-27,-31,0.0,7.0,
"Bengkulu Utara",-3,-26,-30,-102,-11,-45,0.0,7.0,
"Kepahiang",-3,-37,-18,-102,-34,-11,0.0,7.0,
"Lebong",-3,-3,-6,-102,-13,-9,0.0,7.0,
"Rejang Lebong",-3,-26,-22,-102,-31,-18,0.0,7.0,
"Seluma",-4,-5,-20,-102,-36,-44,0.0,7.0,
"Kaur",-4,-43,-57,-103,-23,-52,0.0,7.0],

["Bantul",-7,-55,0,-110,-19,0,0.0,7.0,
"Sleman",-7,-43,-12,-110,-22,-48,0.0,7.0,
"Wates",-7,-51,0,-110,-9,0,0.0,7.0,
"Gunung Kidul",-7,-58,0,-110,-36,0,0.0,7.0,
"Yogyakarta",-7,-48,-10,-110,-22,-34,0.0,7.0],

["Jakarta Barat",-6,-12,-11,-106,-43,-53,0.0,7.0,
"Jakarta Pusat",-6,-10,-35,-106,-49,-36,0.0,7.0,
"Jakarta Selatan",-6,-17,-35,-106,-51,-24,0.0,7.0,
"Jakarta Timur",-6,-12,-49,-106,-54,-4,0.0,7.0,
"Jakarta Utara",-6,-7,-34,-106,-51,-56,0.0,7.0,
"Kepulauan Seribu",-5,-59,-15,-106,-49,-32,0.0,7.0],

["Marisa",0,28,48,-121,-55,-48,0.0,8.0,
"Kwandang",0,48,0,-122,-52,-31,0.0,8.0,
"Limboto",0,38,24,-122,-59,-24,0.0,8.0,
"Tilamuta",0,32,0,-122,-23,0,0.0,8.0,
"Gorontalo",0,31,54,-123,-5,-17,0.0,8.0,
"Suwawa",0,31,38,-123,-12,-7,0.0,8.0,
"Plbh. Gorontalo",0,25,57,-123,-2,-59,0.0,8.0],

["Bungo",-1,-30,-34,-101,-57,-30,0.0,7.0,
"Siulak",-1,-59,-37,-101,-17,-18,0.0,7.0,
"Sungai Penuh",-2,-2,-9,-101,-26,-44,0.0,7.0,
"Bangko",-2,-5,0,-102,-9,0,0.0,7.0,
"Sarolangun",-2,-19,-48,-102,-38,-58,0.0,7.0,
"Tebo",-1,-23,-38,-102,-19,0,0.0,7.0,
"Bulian",-1,-43,-14,-103,-14,-49,0.0,7.0,
"Jambi",-1,-36,-36,-103,-35,-24,0.0,7.0,
"Kuala Tungkal",0,-49,-12,-103,-29,-24,0.0,7.0,
"Sabak",-1,-4,-12,-103,-51,0,0.0,7.0,
"Sakernan",-1,-28,-48,-103,-31,-48,0.0,7.0],

["Bekasi",-6,-14,-5,-106,-59,-40,0.0,7.0,
"Cibinong",-6,-29,-39,-106,-49,-51,0.0,7.0,
"Cisarua",-6,-41,-26,-106,-55,-53,0.0,7.0,
"Depok",-6,-24,-29,-106,-48,-52,0.0,7.0,
"Gadog",-6,-39,-24,-106,-51,-49,0.0,7.0,
"Kota Bogor",-6,-35,-54,-106,-47,-51,0.0,7.0,
"Plbh. Ratu",-6,-59,-6,-106,-33,0,0.0,7.0,
"Sukabumi",-6,-55,-50,-106,-55,-16,0.0,7.0,
"Plbh. Ratu",-6,-58,-54,-106,-32,-26,0.0,7.0,
"Bandung",-6,-54,-36,-107,-38,-49,0.0,7.0,
"Cianjur",-6,-49,0,-107,-8,0,0.0,7.0,
"Cikarang",-6,-15,-19,-107,-8,-59,0.0,7.0,
"Cimahi",-6,-52,-55,-107,-32,-55,0.0,7.0,
"Cipanas",-6,-42,-37,-107,-12,-2,0.0,7.0,
"Garut",-7,-14,0,-107,-53,0,0.0,7.0,
"Karawang",-6,-18,-33,-107,-18,-22,0.0,7.0,
"Lembang",-6,-49,0,-107,-37,-59,0.0,7.0,
"Purwakarta",-6,-33,-54,-107,-26,-22,0.0,7.0,
"Soreang",-7,-1,-33,-107,-31,-28,0.0,7.0,
"Subang",-6,-33,-59,-107,-45,-39,0.0,7.0,
"Sumedang",-6,-51,0,-107,-55,-37,0.0,7.0,
"Banjar",-7,-22,-12,-108,-33,-32,0.0,7.0,
"Ciamis",-7,-21,-36,-108,-28,-48,0.0,7.0,
"Cirebon",-6,-43,-12,-108,-34,-32,0.0,7.0,
"Indramayu",-6,-20,0,-108,-19,0,0.0,7.0,
"Kuningan",-6,-59,0,-108,-29,0,0.0,7.0,
"Majalengka",-6,-49,-3,-108,-13,-40,0.0,7.0,
"Parigi",-7,-41,-4,-108,-32,-19,0.0,7.0,
"Singaparna",-7,-20,-56,-108,-7,-19,0.0,7.0,
"Sumber",-6,-45,-1,-108,-33,-9,0.0,7.0,
"Tasikmalaya",-7,-21,-37,-108,-13,-3,0.0,7.0],

["Banjarnegara",-7,-21,-10,-109,-38,-21,0.0,7.0,
"Batang",-6,-55,-30,-109,-49,-57,0.0,7.0,
"Brebes",-6,-52,0,-109,-3,0,0.0,7.0,
"Cilacap",-7,-43,0,-109,0,0,0.0,7.0,
"Kajen",-7,-2,-27,-109,-39,-25,0.0,7.0,
"Kebumen",-7,-42,0,-109,-40,0,0.0,7.0,
"Pekalongan",-6,-54,-3,-109,-41,-20,0.0,7.0,
"Pemalang",-7,0,-35,-109,-23,-31,0.0,7.0,
"Purbalingga",-7,-19,-40,-109,-24,-32,0.0,7.0,
"Purwokerto",-7,-25,0,-109,-14,0,0.0,7.0,
"Slawi",-7,-2,-59,-109,-9,-27,0.0,7.0,
"Tegal",-6,-51,-39,-109,-9,-9,0.0,7.0,
"Wonosobo",-7,-23,-51,-109,-54,-11,0.0,7.0,
"Boyolali",-7,-32,0,-110,-35,0,0.0,7.0,
"Demak",-6,-53,0,-110,-38,0,0.0,7.0,
"Jepara",-6,-37,-48,-110,-39,-36,0.0,7.0,
"Karanganyar",-7,-36,-47,-110,-57,-44,0.0,7.0,
"Kendal",-6,-56,-54,-110,-8,-17,0.0,7.0,
"Klaten",-7,-42,-22,-110,-36,-15,0.0,7.0,
"Kudus",-6,-47,-53,-110,-52,-13,0.0,7.0,
"Magelang",-7,-27,-36,-110,-13,-12,0.0,7.0,
"Mungkid",-7,-37,-11,-110,-14,0,0.0,7.0,
"Purwodadi",-7,-6,-25,-110,-53,-40,0.0,7.0,
"Purworejo",-7,-43,-12,-110,-1,-48,0.0,7.0,
"Salatiga",-7,-20,-35,-110,-29,-59,0.0,7.0,
"Semarang",-6,-57,-33,-110,-26,-19,0.0,7.0,
"Sukoharjo",-7,-40,-58,-110,-49,-53,0.0,7.0,
"Surakarta",-7,-33,-33,-110,-49,-26,0.0,7.0,
"Temanggung",-7,-14,-45,-110,-8,-14,0.0,7.0,
"Ungaran",-7,-8,-24,-110,-27,0,0.0,7.0,
"Wonogiri",-7,-48,0,-110,-54,-36,0.0,7.0,
"Plbh. Semarang",-6,-43,-24,-110,-20,-48,0.0,7.0,
"Blora",-6,-57,0,-111,-25,0,0.0,7.0,
"Pati",-6,-42,-27,-111,-2,-2,0.0,7.0,
"Rembang",-6,-42,0,-111,-21,0,0.0,7.0,
"Sragen",-7,-25,-48,-111,-1,-30,0.0,7.0],

["Bojonegoro",-7,-11,0,-111,-54,0,0.0,7.0,
"Kab. Madiun",-7,-36,-45,-111,-38,-50,0.0,7.0,
"Kota Madiun",-7,-37,-53,-111,-31,-49,0.0,7.0,
"Magetan",-7,-39,-16,-111,-20,-48,0.0,7.0,
"Nganjuk",-7,-33,-22,-111,-54,0,0.0,7.0,
"Ngawi",-7,-24,0,-111,-26,0,0.0,7.0,
"Pacitan",-8,-12,0,-111,-7,0,0.0,7.0,
"Ponorogo",-7,-52,0,-111,-27,0,0.0,7.0,
"Trenggalek",-8,-3,0,-111,-43,0,0.0,7.0,
"Tulungagung",-8,-4,-32,-111,-54,-57,0.0,7.0,
"Bangkalan",-7,-2,0,-112,-46,0,0.0,7.0,
"Batu",-7,-50,-13,-112,-31,-53,0.0,7.0,
"Gresik",-7,-9,-29,-112,-39,-4,0.0,7.0,
"Jombang",-7,-33,-36,-112,-15,-26,0.0,7.0,
"Kab. Blitar",-8,-7,-48,-112,-15,-10,0.0,7.0,
"Kab. Kediri",-7,-48,-22,-112,-10,-48,0.0,7.0,
"Kab. Malang",-8,-7,-52,-112,-34,-12,0.0,7.0,
"Kab. Mojokerto",-7,-37,-14,-112,-30,-38,0.0,7.0,
"Kab. Pasuruan",-7,-45,-1,-112,-49,-13,0.0,7.0,
"Kota Blitar",-8,-5,-50,-112,-8,-15,0.0,7.0,
"Kota Kediri",-7,-48,-42,-112,-1,0,0.0,7.0,
"Kota Malang",-7,-58,-35,-112,-37,-38,0.0,7.0,
"Kota Mojokerto",-7,-28,-5,-112,-26,-16,0.0,7.0,
"Kota Pasuruan",-7,-38,-24,-112,-52,-48,0.0,7.0,
"Lamongan",-7,-7,-48,-112,-23,-24,0.0,7.0,
"Sidoarjo",-7,-26,-24,-112,-46,-12,0.0,7.0,
"Surabaya",-7,-16,-47,-112,-42,-40,0.0,7.0,
"Tuban",-6,-54,0,-112,-3,0,0.0,7.0,
"Plbh. Surabaya",-7,-18,-34,-112,-57,-56,0.0,7.0,
"Bondowoso",-7,-55,0,-113,-49,0,0.0,7.0,
"Jember",-8,-11,0,-113,-41,0,0.0,7.0,
"Kab. Probolinggo",-7,-51,-1,-113,-18,-37,0.0,7.0,
"Kota Probolinggo",-7,-46,-53,-113,-12,-33,0.0,7.0,
"Lumajang",-8,-8,0,-113,-13,0,0.0,7.0,
"Pamekasan",-7,-9,-36,-113,-28,-48,0.0,7.0,
"Sampang",-7,-11,0,-113,-13,0,0.0,7.0,
"Sumenep",-7,0,-1,-113,-51,-7,0.0,7.0,
"Banyuwangi",-8,-13,0,-114,-21,0,0.0,7.0,
"Situbondo",-7,-41,-24,-114,0,-36,0.0,7.0],

["Bengkayang",0,57,1,-109,-39,-16,0.0,7.0,
"Kayong Utara",-1,-14,-13,-109,-57,-20,0.0,7.0,
"Ketapang",-1,-48,-35,-109,-58,-38,0.0,7.0,
"Kubu Raya",0,-29,-30,-109,-42,-14,0.0,7.0,
"Landak",0,35,55,-109,-55,-6,0.0,7.0,
"Mempawah",0,21,55,-109,0,-13,0.0,7.0,
"Pontianak",0,-5,-20,-109,-21,-5,0.0,7.0,
"Sambas",1,30,58,-109,-19,-44,0.0,7.0,
"Singkawang",0,52,45,-109,-1,-9,0.0,7.0,
"Sungai Raya",0,-14,-15,-109,-34,-35,0.0,7.0,
"Sanggau",0,12,36,-110,-27,-36,0.0,7.0,
"Sekadau",0,3,21,-110,-57,-12,0.0,7.0,
"Melawi",0,-20,-34,-111,-46,-31,0.0,7.0,
"Sintang",0,5,0,-111,-35,0,0.0,7.0,
"Kapuas Hulu",0,50,3,-112,-56,-11,0.0,7.0],

["Banjarbaru",-3,-27,-41,-114,-46,-7,0.0,8.0,
"Banjarmasin",-3,-19,-42,-114,-34,-23,0.0,8.0,
"Marabahan",-2,-56,-24,-114,-44,-24,0.0,8.0,
"Martapura",-3,-24,-23,-114,-49,-45,0.0,8.0,
"Pelaihari",-3,-55,0,-114,-45,0,0.0,8.0,
"Amuntai",-2,-25,-12,-115,-9,0,0.0,8.0,
"Barabai",-2,-37,-52,-115,-25,-17,0.0,8.0,
"Batulicin",-3,-28,-1,-115,-57,-38,0.0,8.0,
"Kandangan",-2,-50,0,-115,-20,0,0.0,8.0,
"Paringin",-2,-24,0,-115,-24,-36,0.0,8.0,
"Rantau",-2,-55,-12,-115,-6,-36,0.0,8.0,
"Tanjung",-1,-49,-48,-115,-26,-52,0.0,8.0,
"Kotabaru",-3,-15,-36,-116,-13,-48,0.0,8.0],

["Nanga Bulik",-2,-10,-48,-111,-22,-48,0.0,7.0,
"Pangkalan Bun",-2,-41,0,-111,-37,0,0.0,7.0,
"Sukamara",-2,-36,-25,-111,-18,-44,0.0,7.0,
"Kuala Pembuang",-3,-20,-14,-112,-32,-27,0.0,7.0,
"Kasongan",-2,0,0,-113,-30,0,0.0,7.0,
"Kuala Kurun",-1,-11,-24,-113,-54,0,0.0,7.0,
"Palangkaraya",-2,-12,-36,-113,-55,-12,0.0,7.0,
"Sampit",-2,-34,0,-113,0,0,0.0,7.0,
"Plbh. Sampit",-3,-17,-29,-113,-5,-36,0.0,7.0,
"Buntok",-1,-40,0,-114,-58,0,0.0,7.0,
"Kuala Kapuas",-2,-55,0,-114,-20,0,0.0,7.0,
"Muarateweh",0,-58,0,-114,-52,0,0.0,7.0,
"Pulangpisau",-2,-47,-54,-114,-12,-1,0.0,7.0,
"Puruk Cahu",0,-35,0,-114,-35,0,0.0,7.0,
"Tamiang Layang",-2,-4,-48,-115,-10,-48,0.0,7.0],

["Sendawar",0,-5,0,-115,-45,0,0.0,8.0,
"Balikpapan",-1,-5,-38,-116,-51,-2,0.0,8.0,
"Penajam",-1,-13,-7,-116,-36,-43,0.0,8.0,
"Tanah Grogot",-1,-55,0,-116,-15,0,0.0,8.0,
"Tenggarong",0,-24,0,-116,-58,0,0.0,8.0,
"Plbh. Balikpapan",-1,-21,-19,-116,-53,-6,0.0,8.0,
"Bontang",0,10,0,-117,-30,0,0.0,8.0,
"Samarinda",0,-25,-49,-117,-10,-28,0.0,8.0,
"Sengata",0,27,36,-117,-31,-48,0.0,8.0,
"Tanjung Redeb",2,10,12,-117,-37,-12,0.0,8.0,
"Plbh. Tarakan",3,13,42,-117,-58,-16,0.0,8.0,
"Plbh. Nunukan",3,51,51,-118,-1,-34,0.0,8.0],

["Malinau",3,35,5,-116,-40,-10,0.0,8.0,
"Tana Tidung",3,51,51,-116,-50,-3,0.0,8.0,
"Plbh. Balikpapan",-1,-21,-19,-116,-53,-6,0.0,8.0,
"Nunukan",4,7,39,-117,-38,-18,0.0,8.0,
"Tanjung Selor",2,43,45,-117,-28,-46,0.0,8.0,
"Tarakan",3,19,45,-117,-34,-16,0.0,8.0,
"Plbh. Tarakan",3,13,42,-117,-58,-16,0.0,8.0,
"Plbh. Nunukan",3,51,51,-118,-1,-34,0.0,8.0],

["Tjg. Balai Karimun",0,59,57,-103,-25,-53,0.0,7.0,
"Plbh. Batam",1,9,26,-103,-59,-12,0.0,7.0,
"Batam",1,8,0,-104,0,0,0.0,7.0,
"Bintan",1,4,56,-104,-25,-50,0.0,7.0,
"Daik Lingga",0,-4,-17,-104,-35,-43,0.0,7.0,
"Tanjung Pinang",0,54,23,-104,-33,-45,0.0,7.0,
"Tarempa",3,14,21,-106,-15,-15,0.0,7.0,
"Plbh. Tarempa",3,15,20,-106,-11,-38,0.0,7.0,
"Ranai",3,54,49,-108,-12,-35,0.0,7.0],

["Blambangan Umpu",-4,-34,-32,-104,-38,-51,0.0,7.0,
"Kota Agung",-5,-29,-15,-104,-37,-2,0.0,7.0,
"Kotabumi",-4,-49,0,-104,-54,0,0.0,7.0,
"Krui",-5,-17,-46,-104,-6,-43,0.0,7.0,
"Liwa",-5,-1,-12,-104,-4,-12,0.0,7.0,
"Pringsewu",-5,-12,-36,-104,-34,-48,0.0,7.0,
"Bandar Lampung",-5,-25,-26,-105,-15,-4,0.0,7.0,
"Gedong Tataan",-5,-30,-14,-105,-8,-11,0.0,7.0,
"Gunung Sugih",-4,-55,-46,-105,-13,-17,0.0,7.0,
"Kalianda",-5,-42,0,-105,-34,-12,0.0,7.0,
"Menggala",-4,-30,0,-105,-15,0,0.0,7.0,
"Metro",-5,-6,0,-105,-19,-48,0.0,7.0,
"Panaragan Jaya",-4,-24,-44,-105,-3,-14,0.0,7.0,
"Sukadana",-5,-3,-59,-105,-30,-6,0.0,7.0,
"Wiralaga Mulya",-3,-59,-5,-105,-18,-34,0.0,7.0],

["Leksula",-3,-36,-44,-126,-21,-33,0.0,9.0,
"Kisar",-8,-1,-4,-127,-11,-54,0.0,9.0,
"Namlea",-3,-15,-36,-127,-6,0,0.0,9.0,
"Plbh. Namlea",-3,-16,-5,-127,-9,-36,0.0,9.0,
"Ambon",-3,-40,-22,-128,-14,-2,0.0,9.0,
"Masohi",-3,-20,-49,-128,-55,-46,0.0,9.0,
"Piru",-3,-4,0,-128,-12,0,0.0,9.0,
"Plbh. Ambon",-3,-42,-1,-128,-10,-9,0.0,9.0,
"Bula",-3,-6,0,-130,-30,0,0.0,9.0,
"Plbh. Bula",-3,-3,-10,-130,-30,-48,0.0,9.0,
"Saumlaki",-7,-55,0,-131,-20,0,0.0,9.0,
"Plbh. Saumlaki",-8,-4,-56,-131,-15,-18,0.0,9.0,
"Tual",-5,-38,0,-132,-44,0,0.0,9.0,
"Plbh. Tual",-5,-32,-7,-132,-39,-1,0.0,9.0,
"Dobo",-5,-45,-10,-134,-15,-30,0.0,9.0,
"Plbh. Dobo",-5,-43,-31,-134,-11,-3,0.0,9.0],

["Sanana",-2,-3,-45,-125,-57,-42,0.0,9.0,
"Taliabu",-1,-50,-7,-125,-29,-21,0.0,9.0,
"Jailolo",1,5,15,-127,-28,-29,0.0,9.0,
"Labuha",0,-38,-18,-127,-30,-4,0.0,9.0,
"Sofifi",0,46,3,-127,-36,-30,0.0,9.0,
"Ternate",0,50,0,-127,-21,-56,0.0,9.0,
"Tidore",0,42,27,-127,-22,-55,0.0,9.0,
"Weda",0,21,2,-127,-51,-21,0.0,9.0,
"Maba",0,43,16,-128,-15,-37,0.0,9.0,
"Morotai",2,4,4,-128,-19,-13,0.0,9.0,
"Tobelo",1,44,7,-128,0,-25,0.0,9.0],

["Gerung",-8,-40,-56,-116,-9,-23,0.0,8.0,
"Mataram",-8,-34,-53,-116,-7,-3,0.0,8.0,
"Praya",-8,-40,-52,-116,-16,-58,0.0,8.0,
"Selong",-8,-35,-1,-116,-34,-23,0.0,8.0,
"Taliwang",-8,-47,-49,-116,-53,-24,0.0,8.0,
"Tanjung",-8,-21,-29,-116,-9,-22,0.0,8.0,
"Sumbawa Besar",-8,-29,-24,-117,-24,-36,0.0,8.0,
"Dompu",-8,-32,-10,-118,-27,-51,0.0,8.0,
"Kota Bima",-8,-27,-36,-118,-43,-12,0.0,8.0,
"Plbh. Bima",-8,-15,-47,-118,-42,-26,0.0,8.0,
"Sape",-8,-34,-39,-119,0,-41,0.0,8.0],

["Labuan Bajo",-8,-28,0,-119,-54,0,0.0,8.0,
"Waibakul",-9,-35,-24,-119,-34,-29,0.0,8.0,
"Waikabubak",-9,-35,-27,-119,-26,-2,0.0,8.0,
"Weetabula",-9,-38,-26,-119,-42,-3,0.0,8.0,
"Borong",-8,-51,0,-120,-39,0,0.0,8.0,
"Ruteng",-8,-34,-3,-120,-34,-19,0.0,8.0,
"Waingapu",-9,-39,-36,-120,-15,0,0.0,8.0,
"Plbh. Waingapu",-9,-33,-27,-120,-15,-3,0.0,8.0,
"Bajawa",-8,-48,-36,-121,0,-36,0.0,8.0,
"Ende",-8,-44,-37,-121,-30,-19,0.0,8.0,
"Mbay",-8,-33,-21,-121,-16,-23,0.0,8.0,
"Sabu",-10,-27,-41,-121,-52,-47,0.0,8.0,
"Plbh. Ende",-8,-51,-4,-121,-37,-12,0.0,8.0,
"Larantuka",-8,-20,-6,-122,-59,-38,0.0,8.0,
"Maumere",-8,-37,-48,-122,-11,-24,0.0,8.0,
"Plbh. Larantuka",-8,-24,-40,-122,-55,-39,0.0,8.0,
"Plbh. Maumere",-8,-32,-30,-122,-14,-51,0.0,8.0,
"Ba a",-10,-44,-24,-123,-3,-36,0.0,8.0,
"Kupang",-10,-13,-30,-123,-36,-13,0.0,8.0,
"Lewoleba",-8,-23,-24,-123,-24,0,0.0,8.0,
"Oelamasi",-10,-4,-37,-123,-51,-36,0.0,8.0,
"Plbh. Kupang",-10,-8,-21,-123,-31,-44,0.0,8.0,
"Plbh. Lewoleba",-8,-23,-22,-123,-19,0,0.0,8.0,
"Atambua",-9,-6,0,-124,-57,-36,0.0,8.0,
"Betun",-9,-33,-46,-124,-54,-13,0.0,8.0,
"Kalabahi",-8,-13,0,-124,-31,0,0.0,8.0,
"Kefamenanu",-9,-28,0,-124,-29,0,0.0,8.0,
"Soe",-9,-49,-37,-124,-25,-32,0.0,8.0,
"Plbh. Kalabahi",-8,-18,-14,-124,-23,-14,0.0,8.0],

["Nabire",-3,-26,-26,-135,-18,-7,0.0,9.0,
"Sorendiweri",0,-42,-36,-135,-43,-48,0.0,9.0,
"Plbh. Nabire",-3,-9,0,-135,-15,-36,0.0,9.0,
"Biak",-1,-10,0,-136,-6,0,0.0,9.0,
"Botawa",-2,-13,-48,-136,-31,-12,0.0,9.0,
"Enarotali",-3,-55,-45,-136,-22,-46,0.0,9.0,
"Serui",-1,-43,-15,-136,-4,-39,0.0,9.0,
"Timika",-4,-57,-15,-136,-48,-46,0.0,9.0,
"Plbh. Biak",-1,-12,-1,-136,-5,-40,0.0,9.0,
"Plbh. Serui",-2,-3,-54,-136,-1,-58,0.0,9.0,
"Mulia",-3,-42,-44,-137,-58,-38,0.0,9.0,
"Agats",-5,-34,0,-138,-5,-19,0.0,9.0,
"Burmeso",-2,-26,-8,-138,-12,-49,0.0,9.0,
"Karubaga",-3,-41,-4,-138,-28,-46,0.0,9.0,
"Sarmi",-1,-49,0,-138,-44,0,0.0,9.0,
"Wamena",-4,-2,-56,-138,-49,-46,0.0,9.0,
"Plbh. Agats",-5,-33,-46,-138,0,-27,0.0,9.0,
"Kepi",-6,-32,0,-139,-19,0,0.0,9.0,
"Sumohai",-4,-26,-48,-139,-27,-48,0.0,9.0,
"Genyem",-2,-35,-46,-140,-10,-4,0.0,9.0,
"Jayapura",-2,-33,-22,-140,-42,-12,0.0,9.0,
"Merauke",-8,-29,0,-140,-24,0,0.0,9.0,
"Oksibil",-4,-59,0,-140,-35,0,0.0,9.0,
"Sentani",-2,-33,-59,-140,-31,-10,0.0,9.0,
"Tanah Merah",-6,-11,-14,-140,-22,-40,0.0,9.0,
"Waris",-3,-19,-11,-140,-53,-49,0.0,9.0,
"Plbh. Jayapura",-2,-31,-4,-140,-48,-3,0.0,9.0,
"Plbh. Merauke",-8,-33,-46,-140,-14,-1,0.0,9.0],

["Waisai",0,-16,-48,-130,-43,-48,0.0,9.0,
"Aimas",-1,0,-28,-131,-19,-13,0.0,9.0,
"Sorong",0,-55,-38,-131,-20,-46,0.0,9.0,
"Plbh. Sorong",0,-47,-8,-131,-6,-59,0.0,9.0,
"Fakfak",-2,-55,0,-132,-18,0,0.0,9.0,
"Kumurkek",-1,-16,-47,-132,-29,-53,0.0,9.0,
"Teminabuan",-1,-26,0,-132,-1,0,0.0,9.0,
"Bintuni",-2,-7,0,-133,-32,0,0.0,9.0,
"Kaimana",-3,-39,0,-133,-45,0,0.0,9.0,
"Plbh. Kaimana",-3,-41,-5,-133,-44,-12,0.0,9.0,
"Manokwari",0,-54,0,-134,0,0,0.0,9.0,
"Ransiki",-1,-30,-54,-134,-11,-59,0.0,9.0,
"Wasior",-2,-43,0,-134,-30,0,0.0,9.0,
"Plbh. Manokwari",0,-54,-48,-134,-11,-18,0.0,9.0,
"Plbh. Wasior",-2,-25,-13,-134,-22,-55,0.0,9.0],

["Bagan Siapiapi",2,12,0,-100,-50,0,0.0,7.0,
"Pasir Pengarairan",0,52,12,-100,-21,0,0.0,7.0,
"Bangkinang",0,16,16,-101,-5,-22,0.0,7.0,
"Dumai",1,35,0,-101,-28,0,0.0,7.0,
"Pangkalan Kerinci",0,23,34,-101,-51,-28,0.0,7.0,
"Pekanbaru",0,33,27,-101,-27,-44,0.0,7.0,
"Teluk Kuantan",0,-29,-31,-101,-28,-11,0.0,7.0,
"Bengkalis",1,30,0,-102,-10,0,0.0,7.0,
"Rengat",0,-31,-12,-102,-36,0,0.0,7.0,
"Selat panjang",0,58,0,-102,-43,-30,0.0,7.0,
"Siak Sri Indrapura",0,49,48,-102,-1,-48,0.0,7.0,
"Tembilahan",0,-17,-16,-103,-10,-58,0.0,7.0],

["Majene",-3,-31,-12,-118,-57,-36,0.0,8.0,
"Mamuju",-2,-41,0,-118,-50,0,0.0,8.0,
"Mamasa",-2,-59,-35,-119,-20,-37,0.0,8.0,
"Mamuju Tengah",-2,-3,-27,-119,-16,-13,0.0,8.0,
"Mamuju Utara",-1,-20,-31,-119,-22,-36,0.0,8.0,
"Polewali Mandar",-3,-24,0,-119,-20,-24,0.0,8.0],

["Plbh. Barru",-4,-32,-57,-119,-32,-52,0.0,8.0,
"Bantaeng",-5,-32,0,-119,-56,-2,0.0,8.0,
"Barru",-4,-27,0,-119,-37,-48,0.0,8.0,
"Enrekang",-3,-31,-48,-119,-46,-48,0.0,8.0,
"Jeneponto",-5,-40,-48,-119,-43,-48,0.0,8.0,
"Makale",-3,-6,0,-119,-51,0,0.0,8.0,
"Makassar",-5,-7,-17,-119,-25,-8,0.0,8.0,
"Maros",-4,-58,-12,-119,-36,0,0.0,8.0,
"Pangkajene & Kep.",-4,-51,-25,-119,-32,-27,0.0,8.0,
"Pare Pare",-4,-1,-19,-119,-38,-28,0.0,8.0,
"Pinrang",-3,-46,0,-119,-41,0,0.0,8.0,
"Rantepao",-2,-58,-16,-119,-53,-57,0.0,8.0,
"Sidenreng",-3,-56,-24,-119,-48,-36,0.0,8.0,
"Sungguminasa",-5,-12,-1,-119,-27,-5,0.0,8.0,
"Takalar",-5,-27,0,-119,-27,-36,0.0,8.0,
"Watan Soppeng",-4,-19,-48,-119,-49,-48,0.0,8.0,
"Benteng",-6,-8,-33,-120,-28,-45,0.0,8.0,
"Bulukumba",-5,-32,-24,-120,-10,-48,0.0,8.0,
"Masamba",-2,-30,0,-120,-15,0,0.0,8.0,
"Palopo",-2,-59,-41,-120,-11,-37,0.0,8.0,
"Sengkang",-4,-8,0,-120,-1,0,0.0,8.0,
"Sinjai",-5,-7,-12,-120,-13,-48,0.0,8.0,
"Watampone",-4,-31,-12,-120,-18,-36,0.0,8.0,
"Malili",-2,-35,-50,-121,-8,-52,0.0,8.0],

["Donggala",0,-42,-36,-119,-44,-24,0.0,8.0,
"Palu",0,-54,-18,-119,-52,-14,0.0,8.0,
"Sigi Biromaru",0,-57,-32,-119,-54,-52,0.0,8.0,
"Plbh. Poso",-1,-11,-36,-120,-44,-13,0.0,8.0,
"Parigi",0,-48,-36,-120,-7,-12,0.0,8.0,
"Poso",-1,-24,-36,-120,-45,-36,0.0,8.0,
"Toli Toli",0,58,6,-120,-52,-25,0.0,8.0,
"Kolonedale",-1,-59,-17,-121,-31,-36,0.0,8.0,
"Ampana",0,-52,-39,-121,-36,-16,0.0,8.0,
"Bungku",-2,-33,0,-121,-57,0,0.0,8.0,
"Buol",1,0,12,-121,-33,-30,0.0,8.0,
"Luwuk",0,-59,-39,-122,-51,-36,0.0,8.0,
"Luwuk",-1,-7,-12,-122,-37,-12,0.0,8.0,
"Banggai",-1,-35,-39,-123,-28,-46,0.0,8.0,
"Salakan",-1,-19,-48,-123,-17,-24,0.0,8.0],

["Kolaka Utara",-3,-28,-12,-120,-52,-48,0.0,8.0,
"Bombana",-4,-37,-38,-121,-48,-45,0.0,8.0,
"Kolaka",-4,-3,0,-121,-40,-12,0.0,8.0,
"Plbh. Kendari",-3,-58,-46,-122,-38,-45,0.0,8.0,
"Plbh. Raha",-4,-47,-4,-122,-46,-40,0.0,8.0,
"Bau Bau",-5,-28,-12,-122,-36,-36,0.0,8.0,
"Buranga",-4,-48,-57,-122,-59,-41,0.0,8.0,
"Buton",-5,-31,-48,-122,-50,-24,0.0,8.0,
"Konawe",-3,-51,-6,-122,-3,-1,0.0,8.0,
"Konawe Selatan",-4,-14,-33,-122,-23,-52,0.0,8.0,
"Kota Kendari",-4,0,-13,-122,-33,-9,0.0,8.0,
"Raha",-4,-47,-54,-122,-41,-42,0.0,8.0,
"Wanggudu",-3,-26,0,-122,-7,0,0.0,8.0,
"Wangi Wangi",-5,-19,-12,-123,-33,0,0.0,8.0],

["Boroko",0,49,5,-123,-46,-9,0.0,8.0,
"Air Madidi",1,25,6,-124,-58,-55,0.0,8.0,
"Amurang",1,9,36,-124,-35,-24,0.0,8.0,
"Kotamobagu",0,43,30,-124,-18,-57,0.0,8.0,
"Lolak",0,51,36,-124,-1,-48,0.0,8.0,
"Manado",1,30,8,-124,-51,-8,0.0,8.0,
"Ratahan",1,3,48,-124,-48,-27,0.0,8.0,
"Tomohon",1,19,28,-124,-50,-25,0.0,8.0,
"Tondano",1,18,6,-124,-54,-36,0.0,8.0,
"Plbh. Tahuna",3,34,16,-125,-24,-32,0.0,8.0,
"Bitung",1,28,40,-125,-9,-26,0.0,8.0,
"Ondong Siau",2,44,41,-125,-21,-54,0.0,8.0,
"Tahuna",3,35,0,-125,-30,0,0.0,8.0,
"Melongguane",4,2,24,-126,-40,-48,0.0,8.0],

["Simpang Empat",0,9,43,-99,-50,-18,0.0,7.0,
"Tuapejat",-2,-6,0,-99,-40,-12,0.0,7.0,
"Arosuka",0,-56,-1,-100,-49,-47,0.0,7.0,
"Batusangkar",0,-28,-12,-100,-34,-56,0.0,7.0,
"Bukittinggi",0,-18,-36,-100,-21,0,0.0,7.0,
"Lubuk Basung",0,-15,-58,-100,-9,-1,0.0,7.0,
"Lubuk Sikaping",0,9,58,-100,-9,-10,0.0,7.0,
"Padang",0,-52,-48,-100,-24,0,0.0,7.0,
"Padangpanjang",0,-28,-12,-100,-22,-48,0.0,7.0,
"Painan",-1,-20,-46,-100,-34,-56,0.0,7.0,
"Pariaman",0,-37,-34,-100,-8,-43,0.0,7.0,
"Parit Malintang",0,-35,-34,-100,-15,-25,0.0,7.0,
"Payakumbuh",0,-14,-22,-100,-38,-28,0.0,7.0,
"Sarilamak",0,-9,-24,-100,-39,-42,0.0,7.0,
"Sawahlunto",0,-40,-57,-100,-47,-49,0.0,7.0,
"Solok",0,-46,-48,-100,-37,-12,0.0,7.0,
"Muaro Sijunjung",0,-42,0,-101,-12,0,0.0,7.0,
"Padang Aro",-1,-21,-32,-101,-16,-32,0.0,7.0,
"Pulau Punjung",0,-57,0,-101,-24,-36,0.0,7.0],

["Lubuk Linggau",-3,-21,-16,-102,-37,-44,0.0,7.0,
"Muara Rumpit",-2,-42,-53,-102,-54,-3,0.0,7.0,
"Musirawas",-2,-57,-31,-102,-51,-38,0.0,7.0,
"Tebing Tinggi",-3,-36,-14,-102,-57,-30,0.0,7.0,
"Lahat",-3,-45,0,-103,-30,0,0.0,7.0,
"Muara Enim",-3,-39,-2,-103,-46,-56,0.0,7.0,
"Pagar Alam",-3,-55,-18,-103,-35,-24,0.0,7.0,
"Sekayu",-2,-51,0,-103,-51,0,0.0,7.0,
"Talang Ubi",-3,-15,-35,-103,-50,-4,0.0,7.0,
"Baturaja",-4,-6,-49,-104,-9,-31,0.0,7.0,
"Indralaya",-3,-14,-31,-104,-40,0,0.0,7.0,
"Kayu Agung",-3,-22,-25,-104,-49,-24,0.0,7.0,
"Martapura",-4,-15,-41,-104,-23,-54,0.0,7.0,
"Muaradua",-4,-32,-7,-104,-4,-44,0.0,7.0,
"Palembang",-2,-58,-43,-104,-45,-7,0.0,7.0,
"Pangkalan Balai",-2,-53,-18,-104,-23,-42,0.0,7.0,
"Prabumulih",-3,-27,0,-104,-15,0,0.0,7.0,
"Martapura",-3,-24,-23,-114,-49,-45,0.0,7.0],

["Gunung Sitoli",1,12,40,-97,-36,-9,0.0,7.0,
"Lahomi",1,0,24,-97,-27,-50,0.0,7.0,
"Lotu",1,26,2,-97,-21,-20,0.0,7.0,
"Teluk Dalam",0,35,24,-97,-46,-48,0.0,7.0,
"Binjai Kota",3,37,9,-98,-29,-5,0.0,7.0,
"Dolok Sanggul",2,13,50,-98,-34,-24,0.0,7.0,
"Kabanjahe",3,6,0,-98,-30,0,0.0,7.0,
"Lubuk Pakam",3,34,12,-98,-51,0,0.0,7.0,
"Medan",3,40,1,-98,-40,-16,0.0,7.0,
"Pandan",1,41,24,-98,-49,-48,0.0,7.0,
"Pangururan",2,30,32,-98,-37,-35,0.0,7.0,
"Pematang Raya",2,57,59,-98,-50,-45,0.0,7.0,
"Salak",2,33,17,-98,-16,-34,0.0,7.0,
"Sibolga",1,47,50,-98,-46,-2,0.0,7.0,
"Sidikalang",2,49,38,-98,-16,-42,0.0,7.0,
"Stabat",3,45,36,-98,-24,-36,0.0,7.0,
"Tarutung",2,0,0,-98,-54,0,0.0,7.0,
"Aek Kanopan",2,42,11,-99,-37,-17,0.0,7.0,
"Balige",2,22,49,-99,-14,-47,0.0,7.0,
"Gunung Tua",1,30,23,-99,-37,-29,0.0,7.0,
"Kisaran",2,58,22,-99,-37,-41,0.0,7.0,
"Kota Pinang",2,2,55,-99,-59,-51,0.0,7.0,
"Lima Puluh",3,10,22,-99,-25,-10,0.0,7.0,
"Pdng. Sidempuan",1,30,0,-99,-15,0,0.0,7.0,
"Panyabungan",0,42,59,-99,-25,-6,0.0,7.0,
"Pematang Siantar",2,58,3,-99,-3,-5,0.0,7.0,
"Rantau Prapat",2,15,0,-99,-50,0,0.0,7.0,
"Sei Rampah",3,30,0,-99,-7,-48,0.0,7.0,
"Sibuhuan",1,28,34,-99,-4,-31,0.0,7.0,
"Sipirok",1,36,11,-99,-16,-5,0.0,7.0,
"Tanjung Balai",2,56,30,-99,-46,-42,0.0,7.0]
];


}//if
