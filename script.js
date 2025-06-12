const quizData = [{'question': '1. Dasar hukum utama perencanaan tata ruang kota diatur dalam:', 'choices': ['UU No. 5 Tahun 1990', 'UU No. 24 Tahun 1992', 'UU No. 32 Tahun 2004', 'UU No. 11 Tahun 2008'], 'answer': 1}, {'question': '2. Jenis rencana tata ruang yang menetapkan kawasan dilindungi dan dibudidayakan adalah:', 'choices': ['Rencana Struktur', 'Rencana Rinci', 'Rencana Umum', 'Rencana Induk'], 'answer': 2}, {'question': '3. RDTR adalah kepanjangan dari:', 'choices': ['Rencana Detil Transportasi dan Ruang', 'Rencana Detail Tata Ruang', 'Rencana Dasar Tata Ruang', 'Rencana Daerah Tertib Ruang'], 'answer': 1}, {'question': '4. Salah satu tujuan utama perencanaan kota adalah:', 'choices': ['Meningkatkan pendapatan negara', 'Menarik investor asing', 'Meningkatkan kualitas hidup masyarakat kota', 'Memperbanyak pemukiman elit'], 'answer': 2}, {'question': '5. Proses pertama dalam perencanaan kota adalah:', 'choices': ['Penetapan rencana', 'Identifikasi potensi', 'Perumusan rencana', 'Penentuan arah pengembangan'], 'answer': 3}, {'question': '6. Salah satu masalah spesifik dalam penataan ruang adalah:', 'choices': ['Kriminalitas', 'Manajemen lahan', 'Pendidikan', 'Hiburan'], 'answer': 1}, {'question': '7. Salah satu isu strategis manajemen lahan adalah:', 'choices': ['Pembuatan jalan tol', 'Pembangunan gedung tinggi', 'Penggunaan kebijakan pajak', 'Reboisasi'], 'answer': 2}, {'question': '8. Limbah rumah tangga termasuk isu strategis:', 'choices': ['Pendidikan', 'Lingkungan hidup perkotaan', 'Sosial', 'Keamanan'], 'answer': 1}, {'question': '9. Masalah utama prasarana kota adalah:', 'choices': ['Kekurangan guru', 'Prasarana tidak memadai', 'Banyak rumah mewah', 'Rendahnya upah'], 'answer': 1}, {'question': '10. Permasalahan pembiayaan kota sering kali karena:', 'choices': ['Pajak daerah terlalu tinggi', 'Sistem ekonomi tidak didukung rencana', 'Kelebihan dana', 'Tidak adanya investor'], 'answer': 1}, {'question': '11. Salah satu bentuk kerja sama potensial antara pemerintah dan swasta adalah:', 'choices': ['Pendidikan dasar', 'Pengelolaan jalan tol', 'Kegiatan keagamaan', 'Pelayanan kesehatan rumah tangga'], 'answer': 1}, {'question': '12. Urbanisasi di Indonesia dicirikan oleh:', 'choices': ['Proses yang lambat', 'Keseimbangan desa dan kota', 'Pertumbuhan yang cepat', 'Penurunan jumlah penduduk kota'], 'answer': 2}, {'question': '13. Kota kompak memiliki ciri:', 'choices': ['Menyebar luas', 'Teratur dan padat', 'Tidak beraturan', 'Campuran fungsi'], 'answer': 1}, {'question': '14. Pendekatan sistem kegiatan menekankan pada:', 'choices': ['Bentuk fisik kota', 'Aktivitas dan rutinitas manusia', 'Nilai lahan', 'Estetika kota'], 'answer': 1}, {'question': '15. Centripetal forces mendorong aktivitas ke:', 'choices': ['Pinggiran kota', 'Desa', 'Pusat kota', 'Kawasan industri'], 'answer': 2}, {'question': '16. Teori bid-rent berkaitan dengan:', 'choices': ['Polusi udara', 'Nilai sewa lahan', 'Keindahan kota', 'Transportasi'], 'answer': 1}, {'question': '17. Konsep “suka” menurut Kus Hadinoto merujuk pada:', 'choices': ['Tempat tinggal', 'Jalan', 'Rekreasi dan hiburan', 'Tempat ibadah'], 'answer': 2}, {'question': '18. Kevin Lynch menyebut jalur dan jalan dalam kota sebagai:', 'choices': ['Edge', 'Node', 'Path', 'District'], 'answer': 2}, {'question': '19. Jenis jalan dalam sistem kota yang melayani skala besar adalah:', 'choices': ['Lokal', 'Kolektor', 'Arteri', 'Tol pribadi'], 'answer': 2}, {'question': '20. Kawasan tidak terbangun dalam kota disebut:', 'choices': ['RTH', 'Kawasan komersial', 'Pusat industri', 'Kawasan elit'], 'answer': 0}, {'question': '21. Tujuan utama perencanaan wilayah adalah:', 'choices': ['Meningkatkan ekspor', 'Mengurangi kesenjangan antarwilayah', 'Menurunkan biaya pendidikan', 'Memperbanyak lahan industri'], 'answer': 1}, {'question': '22. UU yang mengatur otonomi daerah terbaru adalah:', 'choices': ['UU No. 5/1974', 'UU No. 22/1999', 'UU No. 32/2004', 'UU No. 11/2008'], 'answer': 2}, {'question': '23. Salah satu pendekatan dalam penyusunan rencana pembangunan adalah:', 'choices': ['Pendekatan ego sektoral', 'Pendekatan teknokratik', 'Pendekatan spekulatif', 'Pendekatan vertikal'], 'answer': 1}, {'question': '24. RPJM Daerah berlaku selama:', 'choices': ['1 tahun', '3 tahun', '5 tahun', '20 tahun'], 'answer': 2}, {'question': '25. Sistem kota terbentuk karena:', 'choices': ['Tingginya kriminalitas', 'Keterkaitan spasial dan fungsional antar kota', 'Dominasi negara asing', 'Keberadaan mall'], 'answer': 1}, {'question': '26. Pusat pertumbuhan dalam teori Growth Pole disebut:', 'choices': ['Industrial unit', 'Propulsive industry', 'Urban sprawl', 'Urban core'], 'answer': 1}, {'question': '27. Faktor pendorong urbanisasi termasuk, kecuali:', 'choices': ['Teknologi pertanian lambat', 'Kelahiran tinggi di desa', 'Banyak ruang terbuka hijau', 'Layanan pemerintah di kota'], 'answer': 2}, {'question': '28. Urbanisasi semu adalah urbanisasi tanpa:', 'choices': ['Penambahan penduduk', 'Pekerjaan di sektor formal', 'Laju migrasi', 'Perluasan kota'], 'answer': 1}, {'question': '29. Kota dalam jaringan global hanya bertahan jika:', 'choices': ['Meniru gaya barat', 'Kompetitif', 'Banyak penduduk', 'Lokasi strategis'], 'answer': 1}, {'question': '30. Mega city di Asia berkembang karena:', 'choices': ['Ekspor pertanian', 'Investasi asing & korporasi transnasional', 'Kebijakan pemerintah daerah', 'Urban farming'], 'answer': 1}, {'question': '31. Kota sebagai sistem kompleks mencakup unsur berikut, kecuali:', 'choices': ['Fisik', 'Sosial', 'Ekonomi', 'Militer'], 'answer': 3}, {'question': '32. Fungsi dasar kota menurut NUDS, kecuali:', 'choices': ['Goods processing', 'Transport hub', 'Hinterland services', 'Residential subcenter'], 'answer': 1}, {'question': '33. Pendekatan ekologikal dalam tata ruang kota menekankan pada:', 'choices': ['Nilai ekonomi', 'Interaksi manusia-lingkungan', 'Fungsi bangunan', 'Pola transportasi'], 'answer': 1}, {'question': '34. Gaya yang mendorong aktivitas keluar pusat kota disebut:', 'choices': ['Sentripetal', 'Sprawl', 'Sentrifugal', 'Aglomerasi'], 'answer': 2}, {'question': '35. Teori ekonomi basis menjelaskan pertumbuhan kota melalui:', 'choices': ['Konsumsi masyarakat', 'Ekspor barang/jasa', 'Hiburan', 'Pendidikan'], 'answer': 1}, {'question': '36. Indikator utama morfologi kota adalah:', 'choices': ['Pendapatan penduduk', 'Jaringan jalan', 'Jumlah mal', 'Akses WiFi'], 'answer': 1}, {'question': '37. Perencanaan strategis bersifat:', 'choices': ['Administratif', 'Prosedural', 'Partisipatif & spesifik', 'Rutin'], 'answer': 2}, {'question': '38. Fungsi pusat kota dalam struktur kota adalah:', 'choices': ['Hunian elit', 'Pusat kegiatan utama', 'Kawasan industri berat', 'Ruang terbuka'], 'answer': 1}, {'question': '39. Kota dengan dominasi peran nasional dalam RTRWN disebut:', 'choices': ['PKL', 'PKW', 'PKN', 'PRM'], 'answer': 2}, {'question': '40. Skenario strategi kota luar Jawa menurut strategi nasional pengembangan perkotaan adalah:', 'choices': ['Industri bersih', 'Agrobisnis & industri pengolahan', 'Wisata bahari', 'Perdagangan bebas'], 'answer': 1}];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(index, btn);
    choicesEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected, button) {
  const correct = quizData[currentQuestion].answer;
  const buttons = choicesEl.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.style.backgroundColor = "#4CAF50"; // hijau untuk benar
      btn.style.color = "white";
    } else if (index === selected) {
      btn.style.backgroundColor = "#f44336"; // merah untuk salah
      btn.style.color = "white";
    }
  });

  if (selected === correct) score++;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  resultBox.style.display = "block";
  scoreEl.textContent = `Nilai Anda: ${score} dari ${quizData.length} soal`;
}

nextBtn.onclick = nextQuestion;
loadQuestion();
