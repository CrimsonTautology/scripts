function seededRandom(seed) {
    var rnd = Math.sin(seed) * 10000;
    return rnd - Math.floor(rnd);
}

function daysBetween(date1, date2) {
    var ONE_DAY = 1000 * 60 * 60 * 24

    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    var difference_ms = Math.abs(date1_ms - date2_ms)

    return Math.round(difference_ms/ONE_DAY)
}


var images = [
    "img/vento/tumblr_ogf1vwTdfZ1s2kojso1_400.png",
    "img/vento/tumblr_ogl4jk1ofq1s2kojso1_1280.png",
    "img/vento/tumblr_oiwhvgF3Ho1s2kojso1_1280.png",
    "img/vento/tumblr_oj2ivawjUW1s2kojso1_540.png",
    "img/vento/tumblr_oj6b1dI4yr1s2kojso1_500.png",
    "img/vento/tumblr_ojc3j4DoJU1s2kojso1_500.png",
    "img/vento/tumblr_ojn6xni7KV1s2kojso1_500.png",
    "img/vento/tumblr_olvtw83pRr1s2kojso1_540.jpg",
    "img/vento/tumblr_omiuw9A8Kj1s2kojso1_640.png",
    "img/vento/tumblr_on0t02uhL11s2kojso1_1280.jpg",
    "img/vento/tumblr_on6yt7ISJq1s2kojso1_400.jpg",
    "img/vento/tumblr_oqv02dnDdl1s2kojso1_540.png",
    "img/vento/tumblr_os2ipp6SRB1s2kojso1_1280.jpg",
    "img/vento/tumblr_ost0qskWj11s2kojso1_500.png",
    "img/vento/tumblr_ot3rcrUguh1s2kojso1_1280.png",
    "img/vento/tumblr_ot8nm5gXcC1s2kojso1_400.png",
    "img/vento/tumblr_otbtzfNXEL1s2kojso1_1280.png",
    "img/vento/tumblr_othef4uPES1s2kojso1_500.png",
    "img/vento/tumblr_ou2j9vC71t1s2kojso1_400.jpg",
    "img/vento/tumblr_ou3a7xUrVN1s2kojso1_1280.jpg",
    "img/vento/tumblr_ouwokakLF81s2kojso1_640.jpg",
    "img/vento/tumblr_ouwtraNKB81s2kojso1_640.jpg",
    "img/vento/tumblr_ouyh5zdtm41s2kojso1_1280.png",
    "img/vento/tumblr_ouyhw1baR51s2kojso1_640.png",
    "img/vento/tumblr_ouyxidfOqw1s2kojso1_540.png",
    "img/vento/tumblr_ov19g0z4WX1s2kojso1_1280.png",
    "img/vento/tumblr_ov3qs2Izhz1s2kojso1_640.jpg",
    "img/vento/tumblr_ov7nz7JL2A1s2kojso1_1280.jpg",
    "img/vento/tumblr_ov9hvfDdIx1s2kojso1_1280.jpg",
    "img/vento/tumblr_ownzw2fajY1s2kojso1_500.jpg",
    "img/vento/tumblr_owz1jxZW9h1s2kojso1_500.png",
    "img/vento/tumblr_ox2thcbB8W1s2kojso1_400.png",
    "img/vento/tumblr_oxadslVMx21s2kojso1_400.jpg",
    "img/vento/tumblr_oxxqr8UNEO1s2kojso1_400.jpg",
    "img/vento/tumblr_oxxs5sLZYl1s2kojso1_400.jpg",
    "img/vento/tumblr_oyd34g195R1s2kojso1_400.png",
    "img/vento/tumblr_oydzdoJJIT1s2kojso1_1280.jpg",
    "img/vento/tumblr_oyjlb4O7G01s2kojso1_1280.png",
    "img/vento/tumblr_oyvgn7ToAh1s2kojso1_1280.png",
    "img/vento/tumblr_oyvgt0fRsP1s2kojso1_400.png",
    "img/vento/tumblr_oz2vmf4nwy1s2kojso1_400.png",
    "img/vento/tumblr_oz2vneUKIR1s2kojso1_1280.png",
    "img/vento/tumblr_oz87s7v0qX1s2kojso1_1280.png",
    "img/vento/tumblr_ozh617Ov5K1s2kojso1_1280.jpg",
    "img/vento/tumblr_p1qtlglfIO1s2kojso1_1280.jpg",
    "img/vento/tumblr_p20c95Hocz1s2kojso1_1280.png",
    "img/vento/tumblr_p2dq2mOROH1s2kojso1_540.jpg",
    "img/vento/tumblr_p2zxbvV7H41s2kojso1_1280.png",
    "img/vento/tumblr_p5yz6zpXWI1s2kojso1_1280.jpg",
    "img/vento/tumblr_p681a9KKdJ1s2kojso1_1280.jpg",
    "img/vento/tumblr_p681bwLLde1s2kojso1_1280.jpg",
    "img/vento/tumblr_p69gs5gKPz1s2kojso1_1280.jpg",
    "img/vento/tumblr_p9ang4PS8V1s2kojso1_640.png",
    "img/vento/tumblr_pbj1eh6i8m1s2kojso1_400.jpg",
    "img/vento/tumblr_pbnmzcQOqI1s2kojso1_500.png",
    "img/vento/tumblr_pbod8iDsL11s2kojso1_1280.png",
    "img/vento/tumblr_pcclvgb4Cu1s2kojso1_500.png",
    "img/vento/tumblr_pck87cZtEv1s2kojso1_500.png",
    "img/vento/tumblr_pclnd0NRhs1s2kojso1_400.png",
    "img/vento/tumblr_pede8dBo861s2kojso1_500.png",
    "img/vento/tumblr_pewn2osSyq1s2kojso1_640.png",
];


/*
var images = [
    "img/duwang/07b.jpg",
    "img/duwang/0b2434bf7473406c5bf89c71cc124d6d.jpg",
    "img/duwang/4W00lui.png",
    "img/duwang/ba5452471804c8207f6ed8c064a090c51bbebc55.png",
    "img/duwang/CQajJDSWcAAGApk.jpg",
    "img/duwang/dee.jpg",
    "img/duwang/dowang.png",
    "img/duwang/f41paw.png",
    "img/duwang/G8TxuEV.png",
    "img/duwang/hqdefault.jpg",
    "img/duwang/image.png",
    "img/duwang/IRj515U.png",
    "img/duwang/tumblr_inline_mi2jtrtOAS1qz4rgp.jpg",
    "img/duwang/tumblr_m6tj0lkK3F1r2vpn6o1_500.jpg",
    "img/duwang/tumblr_m9k5myyjB71r4cybgo1_500.jpg",
    "img/duwang/tumblr_mebsubcFUT1r29m9no2_500.jpg",
    "img/duwang/tumblr_nd7mtzb0Zc1qj3fvvo3_500.png",
    "img/duwang/tumblr_ndscozU7sU1qfffpyo1_500.png",
    "img/duwang/tumblr_ndtuxqrtz81qfffpyo1_500.png",
    "img/duwang/tumblr_nrnwgj54FQ1s2kojso1_1280.jpg",
    "img/duwang/tumblr_nub8fsr6hd1s2kojso1_500.png",
    "img/duwang/tumblr_nup8fhcDBM1s2kojso1_1280.png",
    "img/duwang/tumblr_nuyd3m4lSg1s2kojso1_1280.jpg",
    "img/duwang/tumblr_nv5pg29p3g1si0naco1_1443056403_cover.png",
    "img/duwang/tumblr_nwictp6ZsT1s2kojso1_1280.png",
    "img/duwang/tumblr_nwlb19aSnT1s2kojso1_1280.png",
    "img/duwang/tumblr_nwnidze5zB1s2kojso1_540.png",
    "img/duwang/tumblr_nyww9mePQ41s2kojso1_1280.png",
    "img/duwang/tumblr_nz49htM7ss1s2kojso1_1280.jpg",
    "img/duwang/tumblr_nz7bnkV2uM1s2kojso1_1280.jpg",
    "img/duwang/tumblr_nznxnt8XnO1s2kojso1_1280.jpg",
    "img/duwang/tumblr_nzw7n65eWE1s2kojso1_540.png",
    "img/duwang/tumblr_o0b89jWNhu1s2kojso1_1280.jpg",
    "img/duwang/tumblr_o0eoayUJt01s2kojso1_1280.jpg",
    "img/duwang/tumblr_o0gxb6WCq41s2kojso1_1280.jpg",
    "img/duwang/tumblr_o0rpxkUSTp1s2kojso1_540.png",
    "img/duwang/tumblr_o0xcvaZXPu1s2kojso1_1280.jpg",
    "img/duwang/tumblr_o1148mzwQ41s2kojso1_1280.jpg",
    "img/duwang/tumblr_o1150fYPQ71s2kojso1_1280.jpg",
    "img/duwang/tumblr_o1dz9t83lh1s2kojso1_1280.png",
    "img/duwang/tumblr_o1n2zxvyth1s2kojso1_1280.png",
    "img/duwang/tumblr_o1tz4q2xgM1s2kojso1_1280.jpg",
    "img/duwang/tumblr_o2xfam9pJe1s2kojso1_1280.jpg",
];
*/

/*
var images = [
    "img/skeleton/skeleton0.gif",
    "img/skeleton/skeleton10.gif",
    "img/skeleton/skeleton11.gif",
    "img/skeleton/skeleton12.gif",
    "img/skeleton/skeleton13.gif",
    "img/skeleton/skeleton14.gif",
    "img/skeleton/skeleton15.gif",
    "img/skeleton/skeleton16.gif",
    "img/skeleton/skeleton17.gif",
    "img/skeleton/skeleton18.gif",
    "img/skeleton/skeleton19.gif",
    "img/skeleton/skeleton1.gif",
    "img/skeleton/skeleton20.gif",
    "img/skeleton/skeleton21.gif",
    "img/skeleton/skeleton22.gif",
    "img/skeleton/skeleton23.gif",
    "img/skeleton/skeleton24.gif",
    "img/skeleton/skeleton25.gif",
    "img/skeleton/skeleton26.gif",
    "img/skeleton/skeleton27.gif",
    "img/skeleton/skeleton28.gif",
    "img/skeleton/skeleton29.gif",
    "img/skeleton/skeleton2.gif",
    "img/skeleton/skeleton30.gif",
    "img/skeleton/skeleton31.gif",
    "img/skeleton/skeleton32.gif",
    "img/skeleton/skeleton33.gif",
    "img/skeleton/skeleton34.gif",
    "img/skeleton/skeleton35.gif",
    "img/skeleton/skeleton36.gif",
    "img/skeleton/skeleton37.gif",
    "img/skeleton/skeleton38.gif",
    "img/skeleton/skeleton39.gif",
    "img/skeleton/skeleton3.gif",
    "img/skeleton/skeleton40.gif",
    "img/skeleton/skeleton41.gif",
    "img/skeleton/skeleton42.gif",
    "img/skeleton/skeleton43.gif",
    "img/skeleton/skeleton44.gif",
    "img/skeleton/skeleton45.gif",
    "img/skeleton/skeleton46.gif",
    "img/skeleton/skeleton47.gif",
    "img/skeleton/skeleton49.gif",
    "img/skeleton/skeleton48.gif",
    "img/skeleton/skeleton4.gif",
    "img/skeleton/skeleton50.gif",
    "img/skeleton/skeleton51.gif",
    "img/skeleton/skeleton52.gif",
    "img/skeleton/skeleton53.gif",
    "img/skeleton/skeleton54.gif",
    "img/skeleton/skeleton55.gif",
    "img/skeleton/skeleton5.gif",
    "img/skeleton/skeleton6.gif",
    "img/skeleton/skeleton7.gif",
    "img/skeleton/skeleton8.gif",
    "img/skeleton/skeleton9.gif",
];
*/

//var rnd = Math.floor(images.length * Math.random());
var seed = daysBetween(new Date(), new Date('December 17, 1995 03:24:00'));
//console.log(seed)
var rnd  = Math.floor(images.length * seededRandom(seed));

console.log(images[rnd]);

document.getElementById('random-image').src = images[rnd];
