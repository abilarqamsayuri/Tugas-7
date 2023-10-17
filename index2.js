//  ini adalah sebuah objek*
const sul_ut = {
    "nama": "sulwaesi utara",
    "ibu kota": "Kota Manado",
    "juluka": "Kota Tinutu'an",
    "jumlah penduduk": 2507,
}

const sul_teng = {
    "nama": "sulwaesi tengah",
    "ibu kota": "Kota Palu",
    "julukan": "kota lima dimensi",
    "jumlah penduduk": 3042,

}

const sul_sel = {
    "nama": "Sulawesi Selatan",
    "ibu kota": "Kota Makassar",
    "julukan": "Kota Anging Mammiri",
    "jumlah penduduk": 8851,
}

const sul_bar = {
    "nama": "Sulawesi Barat",
    "ibu kota": "Kota Mamuju",
    "julukan": "Bumi Manakarra",
    "jumlah penduduk": 1536,
}

const sul_tngr = {
    "nama": "Sulawesi Tenggara",
    "ibu kota": "Kota Kendari",
    "julukan": "Kota Kulo",
    "jumlah penduduk": 2705,
}

const Gorontalo = {
    "nama": "Gorontalo",
    "ibu kota": "Kota Gorontalo",
    "julukan": "Serambi Madinah",
    "jumlah penduduk": 210,
}


// panggil array menggunakan 
const Prov_Sulawesi = [sul_ut,sul_sel,sul_bar,sul_teng,sul_tngr,Gorontalo]

// panggil array menggunakan for of
for (Prov of Prov_Sulawesi) {
    console.log(Prov);
}

// panggil objek sul_ut menggunakan for in
for (let data in sul_ut) {
    console.log(data + ' = ' + sul_ut [data]);
}

// panggil objek sul_sel menggunakan for in
for (let data in sul_sel) {
    console.log(data + ' = ' + sul_sel [data]);
}

// panggil objek sul_bar menggunakan for in
for (let data in sul_bar) {
    console.log(data + ' = ' + sul_bar [data]);
}

// panggil objek sul_teng menggunakan for in
for (let data in sul_teng) {
    console.log(data + ' = ' + sul_teng [data]);
}

// panggil objek sul_tengr menggunakan for in
for (let data in sul_tngr) {
    console.log(data + ' = ' + sul_tngr [data]);
}

// panggil objek Gorontalo menggunakan for in
for (let data in Gorontalo) {
    console.log(data + ' = ' + Gorontalo [data]);
}