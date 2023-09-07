var gizi = [
    {
        id : "TG1",
        nama : "Gizi Buruk Kwashiokor"
    },
    {
        id : "TG2",
        nama : "Gizi Buruk Marasmus"
    },
    {
        id : "TG3",
        nama : "Gizi Buruk Marasmus - Kwashiokor"
    },
    {
        id : "TG4",
        nama : "Gizi Kurang"
    },
    {
        id : "TG5",
        nama : "Gizi Baik"
    },
    {
        id : "TG6",
        nama : "Gizi Lebih"
    }
]

var rules = [
    {
        id : "G01",
        ciri : "Edema (pembengkakan) "
    },
    {
        id : "G02",
        ciri : "Muka bulat dan sembap (moon face) "
    },
    {
        id : "G03",
        ciri : "Pandangan Mata kuyu dan sayu"
    },
    {
        id : "G04",
        ciri : "Rambut tipis, jarang, dan mudah dicabut"
    },
    {
        id : "G05",
        ciri : "Terdapat bercak merah-hitam pada kulit, kadang terkelupas "
    },
    {
        id : "G06",
        ciri : "Cengeng, rewel, dan apatis"
    },
    {
        id : "G07",
        ciri : "Anemia dan diare"
    },
    {
        id : "G08",
        ciri : "Terjadi pembesaran hati"
    },
    {
        id : "G09",
        ciri : "Otot mengecil (hipotrofi) "
    },
    {
        id : "G10",
        ciri : "Badan nampak sangat kurus seolah-olah tulang hanya terbungkus kulit"
    },
    {
        id : "G11",
        ciri : "Wajah seperti orang tua"
    },
    {
        id : "G12",
        ciri : "Kulit menjadi keriput"
    },
    {
        id : "G13",
        ciri : "Jaringan lemak subkutis sangat sedikit sampai tidak ada (baggy pant/pakai celana longgar)"
    },
    {
        id : "G14",
        ciri : "Perut cekung, dan iga gambang"
    },
    {
        id : "G15",
        ciri : "Sering disertai penyakit infeksi (umumnya kronis berulang)."
    },
    {
        id : "G16",
        ciri : "Tubuh mengandung lebih banyak cairan"
    },
    {
        id : "G17",
        ciri : "Mineral lain dalam tubuh pun mengalami gangguan, seperti meningkatnya kadar natrium dan fosfor inorganic serta menurunnya kadar magnesium "
    },
    {
        id : "G18",
        ciri : "Kalium dalam tubuh menurun drastic sehingga menyebabkan gangguan metabolic seperti gangguan pada ginjal dan pancreas"
    },
    {
        id : "G19",
        ciri : "Berat badan penderita hanya berkisar di angka 60% dari berat normal"
    },
    {
        id : "P01",
        ciri : "Kwashiorkor"
    },
    {
        id : "P02",
        ciri : "Marasmus"
    },
    {
        id : "P03",
        ciri : "Marasmus-Kwashiorkor"
    },
]

function saran(tipeGizi){
    if(tipeGizi == "P01" || tipeGizi == "P02" || tipeGizi == "P03")
        return "Berikan ASI eksklusif, MPASI sesuai dengan umur, berikan makanan bervariasi dan seimbang.";
    if(tipeGizi == "TG4")
        return "Pemberian makanan dengan gizi seimbang, berikan makanan dalam porsi kecil tetapi sering, berikan ASI ekslusif, berikan imunisasi lengkap, rutin melakukan penimbangan berat badan.";
    if(tipeGizi == "TG5")
        return "Ajarkan gaya hidup sehat, ajak anak melakukan aktifitas fisik, terapkan pola makan teratur/gizi seimbang, hindari makanan instan dan junk food";
    else
        return "Maaf saat ini solusi belum tersedia"
    }

var rule = new Array(19)

function checkGizi(rule){
    if (rule.includes("G01")) 
    {
        if (rule.includes("G02")) 
        {
            if (rule.includes("G03")) 
            {
                if (rule.includes("G04")) 
                {
                    if (rule.includes("G05")) 
                    {
                        if (rule.includes("G06")) 
                        {
                            if (rule.includes("G07")) 
                            {
                                if (rule.includes("G08")) 
                                {
                                    if (rule.includes("G09")) 
                                    {
                                        return "P01"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (rule.includes("G10")) 
        {
            if (rule.includes("G06"))
            {
                if (rule.includes("G07"))
                {
                    if (rule.includes("G11"))
                    {
                        if (rule.includes("G12"))
                        {
                            if (rule.includes("G13"))
                            {
                                if (rule.includes("G14"))
                                {
                                    if (rule.includes("G15"))
                                    {
                                        return "P02"
                                    }
                                }
                            }
                        }
                    }
                }
                if (rule.includes("G16"))
                {
                    if (rule.includes("G17"))
                    {
                        if (rule.includes("G18"))
                        {
                            if (rule.includes("G19"))
                            {
                                return "P03"
                            }
                        }
                    }
                }
            }
        }
    }
}

// console.log(saran("TG1"));


// function keputusan1 (rule){
//     if (rule.includes("G01")) 
//     {
//         if (rule.includes("G02")) 
//         {
//             if (rule.includes("G03")) 
//             {
//                 if (rule.includes("G04")) 
//                 {
//                     if (rule.includes("G05")) 
//                     {
//                         if (rule.includes("G06")) 
//                         {
//                             if (rule.includes("G07")) 
//                             {
//                                 if (rule.includes("G08")) 
//                                 {
//                                     if (rule.includes("G09")) 
//                                     {
//                                         return "P01"
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         } else {
//             keputusan2(rule)
//         }
//     }
// }

// function keputusan2 (rule){
// if (rule.includes("G10")) 
//     {
//         if (rule.includes("G06"))
//         {
//             if (rule.includes("G07"))
//             {
//                 if (rule.includes("G11"))
//                 {
//                     if (rule.includes("G12"))
//                     {
//                         if (rule.includes("G13"))
//                         {
//                             if (rule.includes("G14"))
//                             {
//                                 if (rule.includes("G15"))
//                                 {
//                                     return "P02"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }else{
//                 keputusan3(rule)
//             }
//         }
//     }
// }

// function keputusan3 (rule){
//     if (rule.includes("G16"))
//     {
//         if (rule.includes("G17"))
//         {
//             if (rule.includes("G18"))
//             {
//                 if (rule.includes("G19"))
//                 {
//                     return "P03"
//                 }
//             }
//         }
//     }
// }

// document.getElementById("G01").addEventListener("click",function(){
//     rule.push("G01");
//     console.log(rule);
// })
// document.getElementById("G02").addEventListener("click",function(){
//     rule.push("G02");
//     console.log(rule);
// })

// document.getElementById("G03").addEventListener("click",function(){
//     rule.push("G03");
//     console.log(rule);
// })

// document.getElementById("G04").addEventListener("click",function(){
//     rule.push("G04");
//     console.log(rule);
// })

// document.getElementById("G05").addEventListener("click",function(){
//     rule.push("G05");
//     console.log(rule);
// })

// document.getElementById("G06").addEventListener("click",function(){
//     rule.push("G06");
//     console.log(rule);
// })

// document.getElementById("G07").addEventListener("click",function(){
//     rule.push("G07");
//     console.log(rule);
// })

// document.getElementById("G08").addEventListener("click",function(){
//     rule.push("G08");
//     console.log(rule);
// })

// document.getElementById("G09").addEventListener("click",function(){
//     rule.push("G09");
//     console.log(rule);
// })

// document.getElementById("G10").addEventListener("click",function(){
//     rule.push("G10");
//     console.log(rule);
// })

// document.getElementById("G11").addEventListener("click",function(){
//     rule.push("G11");
//     console.log(rule);
// })

// document.getElementById("G12").addEventListener("click",function(){
//     rule.push("G12");
//     console.log(rule);
// })

// document.getElementById("G13").addEventListener("click",function(){
//     rule.push("G13");
//     console.log(rule);
// })

// document.getElementById("G14").addEventListener("click",function(){
//     rule.push("G14");
//     console.log(rule);
// })

// document.getElementById("G15").addEventListener("click",function(){
//     rule.push("G15");
//     console.log(rule);
// })

// document.getElementById("G16").addEventListener("click",function(){
//     rule.push("G16");
//     console.log(rule);
// })

// document.getElementById("G17").addEventListener("click",function(){
//     rule.push("G17");
//     console.log(rule);
// })

// document.getElementById("G18").addEventListener("click",function(){
//     rule.push("G18");
//     console.log(rule);
// })

// document.getElementById("G19").addEventListener("click",function(){
//     rule.push("G19");
//     console.log(rule);
// })

function checkBox(){
    if(document.getElementById("G01").checked){
        rule.push("G01");
    }
    if(document.getElementById("G02").checked){
        rule.push("G02");
    }
    if(document.getElementById("G03").checked){
        rule.push("G03");
    }
    if(document.getElementById("G04").checked){
        rule.push("G04");
    }
    if(document.getElementById("G05").checked){
        rule.push("G05");
    }
    if(document.getElementById("G06").checked){
        rule.push("G06");
    }
    if(document.getElementById("G07").checked){
        rule.push("G07");
    }
    if(document.getElementById("G08").checked){
        rule.push("G08");
    }
    if(document.getElementById("G09").checked){
        rule.push("G09");
    }
    if(document.getElementById("G10").checked){
        rule.push("G10");
    }
    if(document.getElementById("G11").checked){
        rule.push("G11");
    }
    if(document.getElementById("G12").checked){
        rule.push("G12");
    }
    if(document.getElementById("G13").checked){
        rule.push("G13");
    }
    if(document.getElementById("G14").checked){
        rule.push("G14");
    }
    if(document.getElementById("G15").checked){
        rule.push("G15");
    }
    if(document.getElementById("G16").checked){
        rule.push("G16");
    }
    if(document.getElementById("G17").checked){
        rule.push("G17");
    }
    if(document.getElementById("G18").checked){
        rule.push("G18");
    }
    if(document.getElementById("G19").checked){
        rule.push("G19");
    }
}

var hasil;

var tipeGizi;

var dapatHasil;

document.getElementById("submitRule").addEventListener("click",()=>{
    if(formname.diagnosis.value == '') {
        alert("Error: Tolong diisi semua!");
        return false;
    }else{
    checkBox();
    console.log(rule);
    dapatHasil = checkGizi(rule);
    document.getElementById("Hasil").innerHTML = "Hasil : <br>" + hasilText(dapatHasil);
    document.getElementById("Solusi").innerHTML = "Solusi : <br>" + saran(dapatHasil);
    }
})

function hasilText(getHasil){
    if(getHasil == "P01"){
        hasil = "Diagnosa pertama menunjukan kamu memiliki gizi buruk Kwashiorkor"
    }   
    else if(getHasil == "P02"){
        hasil = "Diagnosa pertama menunjukan kamu memiliki gizi buruk Marasmus"
    }   
    else if(getHasil == "P03"){
        hasil = "Diagnosa pertama menunjukan kamu memiliki gizi buruk Marasmus-Kwashiorkor"
    }
    else
        hasil = "Maaf, saat ini hasil diagnosa belum diketahui. Silahkan kunjungi dokter atau ahli untuk diagnosa lebih lanjut."

    return hasil;
}  

//function passnama(){
    // var name = document.getElementById("Name").value;
    // localStorage.setItem("textvalue", name);
    // return false;
//}

//document.getElementById("result").innerHTML = localStorage.getItem("textvalue");

//Identitas.addEventListener('submit',(e) => {
    if (identitas.value === '' || identitas.value == null){
        alert("Error: Masukan Nama dan Umur Anda!")
    }else{
        window.location.href = "questions.html";
    }
//})