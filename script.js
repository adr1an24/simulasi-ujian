const quizData = [
  {
    question: "1. Berikut ini pengertian Administrasi Negara, kecuali . . .",
    choices: [
      "hal yang berkaitan dengan pengelolaan negara",
      "hal-hal yang berhubungan dengan pelayanan umum",
      "hal-hal yang berkaitan dengan pelayanan publik",
      "hal-hal yang berhubungan dengan pengelolaan CV"
    ],
    answer: 3
  },
  {
    question: "2. Berikut ini terdapat ruang lingkup yang dipelajari oleh Administrasi Negara, kecuali. . ..",
    choices: [
      "pemberontakan, perang dan revolusi",
      "tujuan negara",
      "posisi dan peran negara dan warga negara",
      "keseluruhan unsur dan interaksi antar unsur negara"
    ],
    answer: 0
  },
  {
    question: "3. Negara mempunyai unsur unsur utama yaitu ; Warga negara, Wilayah negara, Pengakuan internasional dan ........",
    choices: [
      "luas wilayah",
      "jumlah penduduk",
      "pemerintah yang berdaulat",
      "pendapatan perkapita"
    ],
    answer: 2
  },
  {
    question: "4. Pancasila sebagai sumber hukum dalam penyelenggaraan negara harus diterapkan secara utuh-menyeluruh (integral-komprehensif). Hal ini bermakna dalam mewujudkan kesejahteraan dan keamanan masyarakat harus memperhatikan juga . . .",
    choices: [
      "sila sila yang lain",
      "keragaman budaya Indonesia",
      "kondisi geografis Indonesia",
      "potensi kekayaan alam Indonesia"
    ],
    answer: 0
  },
  {
    question: "5. Negara Indonesia adalah negara hukum bukan negara yang berdasarkan atas kekuasaan belaka. Hal ini berarti . . .",
    choices: [
      "Kekuasaan yang dilandasi hukum",
      "Penyelenggaraan negara berdasarkan hukum",
      "Tindakan pemerintah dan negara berdasarkan hukum",
      "ABC betul semua"
    ],
    answer: 3
  },
  {
    question: "6. Mana yang paling tepat diantara pernyataan pernyataan berikut ini. . .",
    choices: [
      "MPR terdiri atas Anggota DPR , Presisden dan DPA",
      "MPR dan Presiden Pemegang Kekuasan Tertinggi",
      "MPR dapat meminta Pertanggungjawaban Presiden atas pelanggaran Undang Undang",
      "DPR dapat membuat UU bersama MA"
    ],
    answer: 2
  },
  {
    question: "7. Lembaga kekuasaan legislatif yaitu. . .",
    choices: [
      "MPR",
      "DPR",
      "MA",
      "BPD"
    ],
    answer: 1
  },
  {
    question: "8. Pernyataan yang paling tepat untuk lembaga lembaga negara berikut ini yaitu . . .",
    choices: [
      "DPD dipilih langsung oleh rakyat",
      "DPR memilih Presiden dan wakil Presiden",
      "BPK melaporkan hasil pemeriksaannya ke MPR",
      "Mahkamah Agung memegang kekuasaan legislatif"
    ],
    answer: 0
  },
  {
    question: "9. Lembaga kekuasaan legislatif pada Pemilu 2009 yang akan datang. . .",
    choices: [
      "DPD dipilih langsung oleh rakyat ,disetujui partai",
      "ditunjuk oleh partai dan persetujuan DPR",
      "dipilih langsung oleh rakyat di tiap dapil (daerah pemilihan )",
      "ditunjuk oleh partai"
    ],
    answer: 2
  },
  {
    question: "10. Berikut ini terdapat pernyataan tentang hubungan antar lembaga negara , pilihlah yang paling tepat . . .",
    choices: [
      "Anggota DPD ikut membicarakan undang yang berkaitan dengan Otda",
      "Anggota DPR dapat memasgulkan Presiden",
      "Presiden dapat memberhentikan Anggota DPR secara langsung",
      "Hasil audit BPK disampaikan ke Presiden"
    ],
    answer: 0
  },
  {
    question: "11. Tatanan organisasi pemerintah di suatu negara dipengaruhi oleh . . .",
    choices: [
      "kewenangan yang diperoleh",
      "pandangan falsafah yang dianut",
      "sistem pemerintahan yang dianut",
      "tatanan nilai yang dianut"
    ],
    answer: 2
  },
  {
    question: "12. Organisasi Kabinet bertugas membantu presiden dalam penyelenggaraan pemerintahan dan pembangunan dengan kedudukan sebagai. . .",
    choices: [
      "Legislatif",
      "Eksekutif",
      "Yudikatif",
      "konsultatif"
    ],
    answer: 1
  },
  {
    question: "13. Untuk pengelolaan kebijakan dan pelayanan mengenai urusan yang berkaitan dengan urusan pemerintahan dan memerlukan perhatian khusus Presiden dibantu oleh . . .",
    choices: [
      "Kabinet",
      "Dewan Perwakilan Rakyat",
      "Staf Khusus Presiden",
      "LPND"
    ],
    answer: 3
  },
  {
    question: "14. Lembaga Pemerintah Non Departemen di bawah koordinasi Menteri Pertahanan dan keamanan. . .",
    choices: [
      "BKN",
      "POLRI",
      "BPS",
      "BKKBN"
    ],
    answer: 1
  },
  {
    question: "15. Lembaga yang membantu Presiden , yang mengurus kepentingan Pemerintah dan Negara di Luar Negeri baik pada negara maupun pada lembaga Internasional yaitu. . .",
    choices: [
      "KBRI /KJ",
      "Atase",
      "DCM",
      "Konselor"
    ],
    answer: 0
  },
  {
  question: "16. Perencanaan merupakan tindakan pilihan yang terbaik dan menguntungkan dari berbagai alternatif dalam usaha mencapai tujuan. Oleh karena itu Perencanaan dianggap sebagai . . .",
  choices: [
    "proses",
    "fungsi manajemen",
    "proposal",
    "keputusan politik"
  ],
  answer: 0
},
{
  question: "17. Menurut UU RI No 25 Tahun 2004 tentang SPPN Bab IV Pasal 8, Tahapan SPPN meliputi penyusunan rencana, penetapan rencana, pengendalian pelaksanaan rencana dan ..........",
  choices: [
    "perumusan kebijjakan",
    "perincian tujuan yang jelas",
    "penunjukan pelaksanaan",
    "evaluasi pelaksanaan"
  ],
  answer: 3
},
{
  question: "18. Untuk menciptakan keserasian tujuan ,pandangan dan tindakan antar berbagai unit karena adanya spesialisasi maka perlu dilakukan kegiatan . . .",
  choices: [
    "standardisasi",
    "koordinasi",
    "pengawasan",
    "Keputusan"
  ],
  answer: 1
},
{
  question: "19. Untuk mengetahui dan memastikan seluruh pekerjaan dijalankan sesuai dengan rencana, kebijakan yang telah digariskan dan perintah yang diberikan disebut . . .",
  choices: [
    "perencanaan",
    "koordinasi",
    "pengawasan",
    "stabilisasi"
  ],
  answer: 2
},
{
  question: "20. Di dalam melakukan kontrol birokrasi dengan menggunakan metode Organisasi, dimana sarana atau alat untuk melaksanakannya meliputi; publisitas, tekanan kelompok dan publik dan .........",
  choices: [
    "birokrasi",
    "koordinasi",
    "pengawasan",
    "disiplin internal"
  ],
  answer: 3
},
{
  question: "21. Dasar hukum yang digunakan dalam penyelenggaraan Administrasi keuangan negara yaitu ...",
  choices: [
    "Bab VIII pasal 23 UUD 45 amandemen",
    "Bab VIII pasal 24 UUD 45",
    "Bab VIII pasal 21 UUD 45",
    "Bab VIII pasal 25 UUD 45 amandemen"
  ],
  answer: 0
},
{
  question: "22. APBD yaitu Anggaran Pendapatan dan Belanja Daerah yang bersumber diantaranya dari Dana Alokasi Umum, Dana alokasi khusus dan ....",
  choices: [
    "APBN",
    "Bantuan luar negeri",
    "Pendapatan Asli Daerah",
    "Loan"
  ],
  answer: 2
},
{
  question: "23. Laporan keuangan yang disusun berupa realisasi anggaran dan neraca departemen adalah sebagai …. ",
  choices: [
    "tindakan rutin dilakukan",
    "cara mencari pendapatan",
    "perintah pimpinan",
    "pertanggungjawaban pelaksanaan anggaran"
  ],
  answer: 3
},
{
  question: "24. Pengertian administrasi materiil menyangkut....",
  choices: [
    "Pengelolaan barang milik negara",
    "penggunaan keuangan",
    "pengawasan anggaran",
    "pertanggungjawaban pelaksanaan anggaran"
  ],
  answer: 0
},
{
  question: "25. Standardisasi untuk meningkatkan efektivitas dan efisiensi dalam pelaksanaan pekerjaan yang berhubungan dengan barang terutama dalam hal....",
  choices: [
    "perencanaan Barang",
    "pengadaan barang",
    "pemeliharaan barang",
    "penggunaan barang"
  ],
  answer: 1
},
{
  question: "26. Berdasarkan pasal 33 UUD RI tahun 1945 Sistem perekonomian Indonesia disusun berdasarkan . . .",
  choices: [
    "liberalisme",
    "etatisme",
    "demokrasi Ekonomi",
    "demokrasi Terpimpin"
  ],
  answer: 2
},
{
  question: "27. Latar belakang didirikannya BUMN/BUMD sebagai agen pembangunan, dalam perekonomian. Sektor perekonomian yang dieksploitasi untuk BUMN/D ini yaitu . . .",
  choices: [
    "yang menguasai hajat hidup orang banyak",
    "sektor perekonomian sekunder",
    "sektor perekonomian tertier",
    "sektor perekonomian primer"
  ],
  answer: 0
},
{
  question: "28. Beberapa maksud didirikannya BUMN/BUMD sebagai agen pembangunan. Dengan kekuatan ekonomi yang dimilikinya BUMN/D juga mempunyai fungsi . . .",
  choices: [
    "stabilisator",
    "etatisme",
    "akselerator",
    "sosial"
  ],
  answer: 3
},
{
  question: "29. Bentuk BUMN/D yang merupakan bagian dari organisasi formal atau suatu Departemen yaitu . . .",
  choices: [
    "Perum",
    "Perjan",
    "Persero",
    "Perusahan biasa"
  ],
  answer: 1
},
{
  question: "30. Di era Otonomi Daerah , Pemerintah Daerah diberikan peluang untuk membina dan mengembangkan lembaga perekonomian daerah dalam bentuk persero daerah dan ........",
  choices: [
    "Perum",
    "Perjanda",
    "Persero",
    "Perusahan biasa"
  ],
  answer: 1
},
{
  question: "31. Tugas aparatur pemerintah yaitu melayani masyarakat dan bukan sebaliknya untuk dilayani masyarakat. Proposisi ini dapat diartikan bahwa Aparatur Pemerintah sebagai . . .",
  choices: [
    "abdi negara",
    "abdi dalam",
    "pegawai negeri",
    "abdi masyarakat"
  ],
  answer: 3
},
{
  question: "32. Salah satu masalah dalam pelayanan umum, adanya tarik menarik antara kepentingan meningkatkan kualitas pelayanan kepada masyarakat dan . . .",
  choices: [
    "peningkatan kualitas aparatur",
    "peningkatan retribusi pendapatan",
    "peningkatan pendidikan aparatur",
    "peningkatan gaji aparatur"
  ],
  answer: 1
},
{
  question: "33. Berdasarkan fungsi pemerintah dapat menyelenggarakan pelayanan umum yang bersifat environmental service, development service dan protective services. Termasuk kategori environmental services berikut ini yaitu . . .",
  choices: [
    "pendidikan, kesehatan dan keagamaan",
    "keamanan, pensiun , kesempatan berusaha",
    "perdagangan, pendidikan dan keagamaan",
    "Jalan/jembatan, taman dan kebersihan"
  ],
  answer: 3
},
{
  question: "34. Pelayanan eksternal yaitu pelayanan yang secara langsung bersinggungan dengan masyarakat. Dalam pembiayaannya harus memperhatikan nilai harga yang berlaku, biaya harus jelas ,ditetapkan oleh pejabat yang berwenang berdasarkan peraturan perundang-undangan dan ..........",
  choices: [
    "kemampuan , dan daya beli masyarakat",
    "jumlah penduduk dan penyebarannya",
    "pendapatan regional bruto",
    "indeks harga yang berlaku"
  ],
  answer: 0
},
{
  question: "35. Semua kegiatan perkantoran dalam suatu instansi diselenggarakan secara . . .",
  choices: [
    "pengorganisasian secara terdesentralisasi",
    "pengorganisasian secara otonomi",
    "pengorganisasian secara tersentralisasi",
    "pengorganisasian secara semi otonomi"
  ],
  answer: 2
},
{
  question: "36. Politik dan strategi penyempurnaan administrasi negara Indonesia dituangkan dalam . . .",
  choices: [
    "Pancasila",
    "Peraturan Pemerintah",
    "Keputusan Presiden",
    "GBHN"
  ],
  answer: 3
},
{
  question: "37. Arah kebijakan pembangunan penyelenggaraan negara yang dimuat dalam GBHN 1999-2004 yaitu; membersihkan penyelenggara dari praktek kkn, pemeriksaan terhadap kekayaan pejabat negara, meningkatkan kualitas aparatur, meningkatkan fungsi dan profesionalisme aparatur, netralitas pegawai negeri dan .......",
  choices: [
    "meningkatkan pendidikan pegawai negeri",
    "meningkatkan kesejahteraan pegawai negeri",
    "meningkatkan jumlah pegawai negeri",
    "meningkatkan pendapat pegawai negeri"
  ],
  answer: 1
},
{
  question: "38. Manajemen PNS dikembangkan dalam rangka membina, memelihara dan mengembangkan kapasitas kesejahteraan PNS sebagai. . .",
  choices: [
    "Abdi negara",
    "Abdi Masyarakat",
    "pelayanan publik",
    "penegak aturan"
  ],
  answer: 2
},
{
  question: "39. Tolok ukur bagi penyelenggara negara dalam menjalankan tugasnya yaitu . . .",
  choices: [
    "kredibilitas",
    "akuntabilitas",
    "kapabillitas",
    "ekstensitas"
  ],
  answer: 1
},
{
  question: "40. Pemerintah yang mempunyai akuntabilitas yaitu pemerintah yang diberikan . . .",
  choices: [
    "wewenang untuk dilaksanakan",
    "amanah untuk dipertanggungjawabkan",
    "kekuasaan untuk dilaksanakan",
    "kepercayaan untuk dilaksanakan"
  ],
  answer: 1
},
{
  question: "41. Transformasi tradisional government menjadi electronic government (E-Gov.) merupakan salah satu isu kebijakan publik yang sangat penting saat ini. E-Gov diartikan sebagai manajemen pemerintahan yang berbasis . . .",
  choices: [
    "legitimasi untuk dilaksanakan",
    "amanah untuk dipertanggungjawabkan",
    "aplikasi teknologi dan informasi",
    "kepercayaan untuk dilaksanakan"
  ],
  answer: 2
},
{
  question: "42. Sasaran pengembangan E-Government dalam level makro yaitu. . .",
  choices: [
    "pembuatan portal-portal informasi",
    "keterlibatan multisektor dalam skala lokal",
    "rancangan model kinerja",
    "kebijakan yang dibutuhkan"
  ],
  answer: 3
},
{
  question: "43. Langkah utama yang perlu dilakukan dalam pengembangan E-Gov. yang berfokus pada revitalisasi manajemen pemerintahan yaitu. . .",
  choices: [
    "restrukturisasi organisasi pemerintah",
    "komputerisasi seluruh perangkat kantor",
    "membuat mindset",
    "standarisasi prosedur kerja"
  ],
  answer: 2
},
{
  question: "44. Langkah awal yang dilakukan dalam membangun pelayanan informasi dalam rangka E-Gov. yaitu . . .",
  choices: [
    "segala sesuatu telah distandarkan secara manual",
    "proses pengambilan keputusan secara cepat",
    "mengembangkan jaringan pada instansi pemerintah",
    "menghilangkan hubungan hirahikal antara pusat dan daerah"
  ],
  answer: 0
},
{
  question: "45. Instruksi Presiden yang menggariskan kebijakan pengembangan E-Gov. di Indonesia yaitu. . .",
  choices: [
    "Inpres No 2 tahun 2003",
    "Inpres No. 3 tahun 2003",
    "Inpres No. 2 tahun 2004",
    "Inpres No 3 tahun 2004"
  ],
  answer: 1
}
  ];
