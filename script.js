const quizData = [
  {
    question: "1. Tujuan utama dari desentralisasi adalah:",
    choices: [
      "Memperkuat pengaruh pusat di daerah",
      "Menambah beban keuangan daerah",
      "Memberikan otonomi kepada daerah untuk mengatur urusan rumah tangganya sendiri",
      "Mengurangi fungsi pengawasan pemerintah pusat"
    ],
    answer: 2
  },
  {
    question: "2. Dalam kerangka otonomi daerah di Indonesia, peran pemerintah pusat tetap penting terutama dalam hal berikut, kecuali:",
    choices: [
      "Menetapkan kebijakan nasional",
      "Melaksanakan urusan pemerintahan umum",
      "Menyediakan layanan publik yang bersifat lokal",
      "Menentukan standar pelayanan minimal"
    ],
    answer: 2
  },
  {
    question: "3. Salah satu tantangan utama dalam hubungan keuangan pusat dan daerah menurut Ahmad Yani adalah:",
    choices: [
      "Ketidakseimbangan distribusi dana",
      "Kurangnya pegawai pusat di daerah",
      "Banyaknya pergantian kepala daerah",
      "Minimnya partisipasi swasta"
    ],
    answer: 0
  },
  {
    question: "4. Berdasarkan teori Koswara, bentuk pemerintahan daerah yang ideal adalah yang:",
    choices: [
      "Sepenuhnya dikendalikan pusat",
      "Bersifat federal",
      "Mampu menjalankan urusan daerah secara mandiri namun dalam kerangka NKRI",
      "Tidak memiliki kewenangan legislatif"
    ],
    answer: 2
  },
  {
    question: "5. Salah satu bentuk nyata desentralisasi administratif adalah:",
    choices: [
      "Penetapan pajak pusat",
      "Pembangunan jalan nasional",
      "Pelimpahan wewenang kepada kepala daerah",
      "Pengangkatan pejabat tinggi oleh presiden"
    ],
    answer: 2
  },
  {
    question: "6. Dalam konteks pembangunan daerah menurut Alexander Abe, perencanaan pembangunan daerah harus berdasarkan pada:",
    choices: [
      "Instruksi langsung dari presiden",
      "Kepentingan elit politik lokal",
      "Potensi dan kebutuhan lokal",
      "Arahan dari partai politik"
    ],
    answer: 2
  },
  {
    question: "7. Fokus utama dari The New Public Service menurut Denhardt & Denhardt adalah bahwa pelayanan publik harus:",
    choices: [
      "Mengutamakan perintah atasan",
      "Berorientasi pada efisiensi anggaran",
      "Melayani masyarakat, bukan hanya mengatur",
      "Menyerahkan semua urusan ke sektor swasta"
    ],
    answer: 2
  },
  {
    question: "8. Dalam sistem hubungan pusat dan daerah, konsep 'medebewind' berarti:",
    choices: [
      "Kewenangan penuh daerah dalam urusan lokal",
      "Tugas pembantuan dari pusat kepada daerah",
      "Kerja sama antar daerah",
      "Kewenangan legislatif daerah dalam membuat undang-undang pusat"
    ],
    answer: 1
  },
  {
    question: "9. Salah satu prinsip dalam pengawasan hubungan pusat dan daerah adalah:",
    choices: [
      "Sentralisasi total",
      "Supervisi dari pusat terhadap pelaksanaan otonomi daerah",
      "Penghapusan peran legislatif daerah",
      "Dominasi kebijakan daerah atas pusat"
    ],
    answer: 1
  },
  {
    question: "10. Menurut teori administrative decentralization oleh Cohen dan Peterson, desentralisasi yang berhasil harus memperhatikan aspek berikut, kecuali:",
    choices: [
      "Kapasitas institusional daerah",
      "Mekanisme pertanggungjawaban",
      "Kontrol penuh dari pusat",
      "Sumber daya keuangan yang memadai"
    ],
    answer: 2
  }
];

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
    btn.onclick = () => checkAnswer(index);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) score++;

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

nextBtn.style.display = "none"; // tidak digunakan
loadQuestion();
