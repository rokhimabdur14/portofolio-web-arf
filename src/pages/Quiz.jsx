import { useState } from 'react';
import './Quiz.css';

const quizData = [
  // DASAR FOTOGRAFI
  {
    question: 'Apa yang dimaksud dengan "Aperture" dalam fotografi?',
    options: [
      'Kecepatan shutter kamera',
      'Bukaan lensa yang mengontrol cahaya',
      'Ukuran sensor kamera',
      'Jarak fokus lensa'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'ISO dalam fotografi digunakan untuk?',
    options: [
      'Mengatur warna foto',
      'Mengatur sensitivitas sensor terhadap cahaya',
      'Mengatur fokus kamera',
      'Mengatur zoom lensa'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'Apa kepanjangan dari DSLR?',
    options: [
      'Digital Single Lens Reflex',
      'Digital Super Light Recorder',
      'Dynamic Single Lens Recorder',
      'Digital Sensor Light Reflex'
    ],
    correctAnswer: 0,
    category: 'Peralatan'
  },
  {
    question: 'Aturan "Rule of Thirds" dalam komposisi fotografi adalah?',
    options: [
      'Membagi frame menjadi 3 bagian horizontal',
      'Membagi frame menjadi grid 3x3 dan menempatkan subjek pada titik pertemuan garis',
      'Menggunakan 3 warna utama dalam foto',
      'Memotret 3 objek sekaligus'
    ],
    correctAnswer: 1,
    category: 'Komposisi'
  },
  {
    question: 'Shutter Speed yang lambat akan menghasilkan?',
    options: [
      'Foto yang lebih gelap',
      'Motion blur atau efek gerakan',
      'Foto yang lebih tajam',
      'Warna yang lebih cerah'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'Apa fungsi utama dari reflector dalam fotografi?',
    options: [
      'Memantulkan cahaya ke subjek',
      'Menyerap cahaya berlebih',
      'Membuat efek bokeh',
      'Mengatur white balance'
    ],
    correctAnswer: 0,
    category: 'Lighting'
  },
  {
    question: 'Bokeh dalam fotografi adalah?',
    options: [
      'Teknik editing foto',
      'Efek blur pada background',
      'Jenis lensa kamera',
      'Mode pemotretan malam'
    ],
    correctAnswer: 1,
    category: 'Komposisi'
  },
  {
    question: 'White Balance digunakan untuk?',
    options: [
      'Mengatur kecerahan foto',
      'Mengatur keseimbangan warna berdasarkan sumber cahaya',
      'Mengatur kontras foto',
      'Mengatur ketajaman foto'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'RAW format dalam fotografi memiliki keunggulan?',
    options: [
      'File size lebih kecil dari JPEG',
      'Langsung bisa di-upload tanpa editing',
      'Menyimpan lebih banyak informasi untuk editing',
      'Tidak memerlukan software khusus'
    ],
    correctAnswer: 2,
    category: 'Digital Photography'
  },
  {
    question: 'Golden Hour dalam fotografi adalah?',
    options: [
      'Pukul 12 siang',
      'Satu jam setelah sunrise atau sebelum sunset',
      'Tengah malam',
      'Pukul 3 sore'
    ],
    correctAnswer: 1,
    category: 'Lighting'
  },

  // VIDEOGRAFI
  {
    question: 'Frame rate 24fps (frames per second) biasanya digunakan untuk?',
    options: [
      'Video slow motion',
      'Video gaming',
      'Film dan sinematik look',
      'Live streaming'
    ],
    correctAnswer: 2,
    category: 'Videografi'
  },
  {
    question: 'Apa yang dimaksud dengan "B-Roll" dalam videografi?',
    options: [
      'Footage utama dengan dialog',
      'Footage tambahan untuk mendukung narasi',
      'Video yang gagal direkam',
      'Background music'
    ],
    correctAnswer: 1,
    category: 'Videografi'
  },
  {
    question: 'Stabilizer atau Gimbal dalam videografi berfungsi untuk?',
    options: [
      'Mengatur pencahayaan',
      'Menstabilkan gerakan kamera agar video tidak goyang',
      'Menambah efek zoom',
      'Merekam audio yang lebih baik'
    ],
    correctAnswer: 1,
    category: 'Peralatan Video'
  },
  {
    question: 'Aspect ratio 16:9 adalah standar untuk?',
    options: [
      'Instagram Stories',
      'Video YouTube dan TV modern',
      'Foto portrait',
      'TikTok'
    ],
    correctAnswer: 1,
    category: 'Videografi'
  },
  {
    question: 'Apa yang dimaksud dengan "Color Grading"?',
    options: [
      'Mengatur exposure video',
      'Proses memberikan warna dan mood pada video di post-production',
      'Mengatur frame rate',
      'Menghapus noise dalam video'
    ],
    correctAnswer: 1,
    category: 'Post-Production'
  },
  {
    question: 'Shutter Speed ideal untuk video adalah?',
    options: [
      'Sama dengan frame rate',
      'Double dari frame rate (contoh: 1/50s untuk 25fps)',
      'Setengah dari frame rate',
      'Tidak ada aturan khusus'
    ],
    correctAnswer: 1,
    category: 'Videografi'
  },
  {
    question: 'Codec dalam video adalah?',
    options: [
      'Software editing video',
      'Algoritma kompresi video',
      'Jenis kamera',
      'Format layar'
    ],
    correctAnswer: 1,
    category: 'Digital Video'
  },
  {
    question: 'ND Filter (Neutral Density) digunakan untuk?',
    options: [
      'Menambah warna pada video',
      'Mengurangi jumlah cahaya yang masuk ke sensor',
      'Meningkatkan ketajaman',
      'Menambah kontras'
    ],
    correctAnswer: 1,
    category: 'Peralatan Video'
  },
  {
    question: 'Resolusi 4K memiliki pixel sebanyak?',
    options: [
      '1920 x 1080',
      '3840 x 2160',
      '2560 x 1440',
      '7680 x 4320'
    ],
    correctAnswer: 1,
    category: 'Digital Video'
  },
  {
    question: 'Time-lapse dalam videografi adalah?',
    options: [
      'Video slow motion',
      'Teknik merekam dengan interval waktu untuk mempercepat proses lambat',
      'Video dengan durasi pendek',
      'Efek transisi antar scene'
    ],
    correctAnswer: 1,
    category: 'Videografi'
  },

  // LANJUTAN
  {
    question: 'Panning dalam fotografi/videografi adalah?',
    options: [
      'Menggerakkan kamera mengikuti subjek bergerak',
      'Zoom in ke subjek',
      'Mengatur cahaya',
      'Teknik editing'
    ],
    correctAnswer: 0,
    category: 'Teknik'
  },
  {
    question: 'Histogram dalam fotografi menunjukkan?',
    options: [
      'Komposisi foto',
      'Distribusi tonal dari gelap ke terang',
      'Ukuran file foto',
      'Jarak fokus'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'Depth of Field (DoF) yang shallow menghasilkan?',
    options: [
      'Seluruh foto tajam',
      'Background blur dengan subjek tajam',
      'Foto gelap',
      'Efek fisheye'
    ],
    correctAnswer: 1,
    category: 'Komposisi'
  },
  {
    question: 'Focal length 50mm pada full-frame sensor disebut?',
    options: [
      'Wide angle',
      'Normal/Standard lens',
      'Telephoto',
      'Macro'
    ],
    correctAnswer: 1,
    category: 'Peralatan'
  },
  {
    question: 'HDR (High Dynamic Range) photography adalah?',
    options: [
      'Foto dengan warna hitam putih',
      'Menggabungkan multiple exposure untuk detail maksimal',
      'Foto dengan ISO tinggi',
      'Teknik slow shutter'
    ],
    correctAnswer: 1,
    category: 'Teknik'
  },
  {
    question: 'Bitrate dalam video mempengaruhi?',
    options: [
      'Kualitas dan ukuran file video',
      'Frame rate',
      'Aspect ratio',
      'Resolusi layar'
    ],
    correctAnswer: 0,
    category: 'Digital Video'
  },
  {
    question: 'Lensa Prime adalah?',
    options: [
      'Lensa dengan focal length tetap (tidak bisa zoom)',
      'Lensa zoom profesional',
      'Lensa untuk video saja',
      'Lensa dengan autofocus'
    ],
    correctAnswer: 0,
    category: 'Peralatan'
  },
  {
    question: 'Exposure Triangle terdiri dari?',
    options: [
      'ISO, Aperture, Focal Length',
      'ISO, Aperture, Shutter Speed',
      'Aperture, Focus, White Balance',
      'Shutter Speed, Resolution, ISO'
    ],
    correctAnswer: 1,
    category: 'Dasar Fotografi'
  },
  {
    question: 'LUT (Look-Up Table) dalam video editing digunakan untuk?',
    options: [
      'Mengatur volume audio',
      'Preset color grading',
      'Menambah subtitle',
      'Mengatur frame rate'
    ],
    correctAnswer: 1,
    category: 'Post-Production'
  },
  {
    question: 'Crop Factor pada sensor APS-C dibanding Full Frame adalah sekitar?',
    options: [
      '1x',
      '1.5x - 1.6x',
      '2x',
      '0.5x'
    ],
    correctAnswer: 1,
    category: 'Peralatan'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setQuizStarted(false);
  };

  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return 'Perfect! Anda Master Fotografi & Videografi! 🎬';
    if (percentage >= 80) return 'Excellent! Pengetahuan Anda sangat baik! 📸';
    if (percentage >= 60) return 'Good Job! Terus tingkatkan! 🎥';
    if (percentage >= 40) return 'Not Bad! Keep Learning! 📷';
    return 'Keep Practicing! Practice Makes Perfect! 🎞️';
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="quiz-start-screen">
          <div className="quiz-icon">📸</div>
          <h1>Kuis Fotografi & Videografi</h1>
          <p className="quiz-description">
            Uji pengetahuan Anda tentang fotografi dan videografi dengan {quizData.length} pertanyaan menarik!
          </p>
          <div className="quiz-features">
            <div className="feature-item">
              <span className="feature-icon">📷</span>
              <span>Dasar Fotografi</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Videografi</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span>Komposisi & Lighting</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚙️</span>
              <span>Peralatan & Teknik</span>
            </div>
          </div>
          <button className="quiz-start-btn" onClick={() => setQuizStarted(true)}>
            Mulai Kuis
          </button>
        </div>
      </div>
    );
  }

  if (showScore) {
    const percentage = (score / quizData.length) * 100;
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div className="result-icon">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '📚'}
          </div>
          <h2>Kuis Selesai!</h2>
          <div className="score-display">
            <div className="score-number">{score}</div>
            <div className="score-divider">/</div>
            <div className="score-total">{quizData.length}</div>
          </div>
          <div className="score-percentage">{percentage.toFixed(0)}%</div>
          <p className="result-message">{getResultMessage()}</p>
          <div className="result-stats">
            <div className="stat-item">
              <div className="stat-value correct">{score}</div>
              <div className="stat-label">Benar</div>
            </div>
            <div className="stat-item">
              <div className="stat-value wrong">{quizData.length - score}</div>
              <div className="stat-label">Salah</div>
            </div>
          </div>
          <button className="quiz-restart-btn" onClick={handleRestart}>
            Main Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="quiz-header">
          <div className="question-count">
            Pertanyaan {currentQuestion + 1} / {quizData.length}
          </div>
          <div className="quiz-score">
            <span className="score-icon">⭐</span>
            <span>Skor: {score}</span>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>

        <div className="question-category">{quizData[currentQuestion].category}</div>

        <div className="question-section">
          <div className="question-text">{quizData[currentQuestion].question}</div>
        </div>

        <div className="answer-section">
          {quizData[currentQuestion].options.map((option, index) => {
            let buttonClass = 'answer-button';

            if (answered) {
              if (index === quizData[currentQuestion].correctAnswer) {
                buttonClass += ' correct';
              } else if (index === selectedAnswer) {
                buttonClass += ' wrong';
              }
            } else if (index === selectedAnswer) {
              buttonClass += ' selected';
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => handleAnswerClick(index)}
                disabled={answered}
              >
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                <span className="answer-text">{option}</span>
                {answered && index === quizData[currentQuestion].correctAnswer && (
                  <span className="answer-icon">✓</span>
                )}
                {answered && index === selectedAnswer && index !== quizData[currentQuestion].correctAnswer && (
                  <span className="answer-icon">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {answered && (
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestion === quizData.length - 1 ? 'Lihat Hasil' : 'Pertanyaan Berikutnya'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
