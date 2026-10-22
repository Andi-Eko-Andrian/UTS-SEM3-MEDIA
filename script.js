const pages = [
  {
    kicker: 'PENGANTAR', time: '2 MENIT BACA', className: 'cover-page',
    html: `<div class="page-index">E-MODULE 01 / SIMULASI JARINGAN</div><h1>Satu router.<br>Dua PC.<br>Jaringan yang <em>terhubung.</em></h1><p class="lead">Pelajari cara membaca, mengonfigurasi, dan menguji topologi LAN sederhana menggunakan Cisco Packet Tracer.</p><div class="cover-meta"><span class="meta-chip">PEMULA</span><span class="meta-chip">9 HALAMAN</span><span class="meta-chip">KONSEP + PRAKTIK</span></div><span class="cover-note">MULAI MEMBACA →</span>`
  },
  {
    kicker: '01 / TUJUAN BELAJAR', time: '2 MENIT BACA',
    html: `<div class="page-index">01 / TUJUAN BELAJAR</div><h2>Di akhir modul ini,<br>kamu dapat...</h2><p class="lead">Ikuti alur dari mengenali perangkat sampai memastikan paket data tiba di tujuan.</p><div class="section-grid"><div class="learning-point"><b>01 — Membaca topologi</b><p>Mengenali router, PC, link, dan peran tiap perangkat.</p></div><div class="learning-point"><b>02 — Menyusun alamat</b><p>Memberi alamat IPv4 dan gateway yang sesuai untuk dua subnet.</p></div><div class="learning-point"><b>03 — Mengaktifkan interface</b><p>Mengatur port router dan memeriksa status koneksinya.</p></div><div class="learning-point"><b>04 — Menguji jaringan</b><p>Menggunakan ping dan menelusuri penyebab koneksi gagal.</p></div></div><div class="callout"><strong>Pertanyaan pemantik:</strong> apakah dua PC yang terhubung ke router otomatis dapat saling berkomunikasi?</div>`
  },
  {
    kicker: '02 / MEMBACA TOPOLOGI', time: '3 MENIT BACA',
    html: `<div class="page-index">02 / MEMBACA TOPOLOGI</div><h2>Kenali perangkat<br>dan jalurnya</h2><p>Router berada di tengah sebagai penghubung dua jaringan. Setiap PC tersambung ke interface router yang berbeda.</p><figure class="topology-figure"><img src="2.png" alt="Cloud terhubung ke Router1, lalu Router1 tersambung ke PC1 dan PC2"><figcaption>Topologi simulasi yang digunakan dalam modul ini.</figcaption></figure><div class="legend-row"><span class="legend-item"><i class="legend-mark"></i> Link tampak aktif</span><span class="legend-item"><i class="legend-mark amber"></i> Status perlu diperiksa</span></div><div class="callout">Cloud mewakili jaringan luar. Akses internet tidak otomatis tersedia; sisi cloud atau ISP juga perlu dikonfigurasi.</div>`
  },
  {
    kicker: '03 / ALAMAT IP', time: '3 MENIT BACA',
    html: `<div class="page-index">03 / ALAMAT IP</div><h2>Satu interface router<br>untuk tiap subnet</h2><p>Karena tiap PC terhubung ke port router berbeda, gunakan subnet berbeda pada tiap link. Router menjadi default gateway bagi PC di subnet tersebut.</p><div class="table-wrap"><table><thead><tr><th>PERANGKAT</th><th>INTERFACE</th><th>ALAMAT IP</th><th>GATEWAY</th></tr></thead><tbody><tr><td>Router1</td><td>Ke PC1</td><td><code>192.168.10.1/24</code></td><td>—</td></tr><tr><td>PC1</td><td>Ethernet</td><td><code>192.168.10.2/24</code></td><td><code>192.168.10.1</code></td></tr><tr><td>Router1</td><td>Ke PC2</td><td><code>192.168.20.1/24</code></td><td>—</td></tr><tr><td>PC2</td><td>Ethernet</td><td><code>192.168.20.2/24</code></td><td><code>192.168.20.1</code></td></tr></tbody></table></div><p class="small-note">Subnet mask keduanya: 255.255.255.0. Nama interface router bergantung pada model dan modul yang terpasang.</p><div class="callout">Router dapat meneruskan paket antar-subnet saat kedua interface beralamat benar dan berstatus aktif.</div>`
  },
  {
    kicker: '04 / KONFIGURASI', time: '4 MENIT PRAKTIK',
    html: `<div class="page-index">04 / KONFIGURASI</div><h2>Bangun topologi<br>di Packet Tracer</h2><div class="steps"><div class="step"><span class="step-number">1</span><div><h3>Tempatkan perangkat</h3><p>Tambahkan satu router dan dua PC. Tambahkan Cloud jika latihan mencakup jaringan luar.</p></div></div><div class="step"><span class="step-number">2</span><div><h3>Hubungkan kabel</h3><p>Sambungkan tiap PC ke port router yang berbeda menggunakan koneksi Ethernet.</p></div></div><div class="step"><span class="step-number">3</span><div><h3>Atur alamat PC</h3><p>Di Desktop &gt; IP Configuration, isi IP, subnet mask, dan default gateway sesuai tabel.</p></div></div><div class="step"><span class="step-number">4</span><div><h3>Atur interface router</h3><p>Pilih port yang terhubung, beri alamat gateway, lalu aktifkan interface.</p></div></div></div><div class="code-sample">Router&gt; enable<br>Router# show ip interface brief<br>Router# configure terminal<br>Router(config)# interface &lt;interface-ke-PC1&gt;<br>Router(config-if)# ip address 192.168.10.1 255.255.255.0<br>Router(config-if)# no shutdown</div><p class="small-note">Ulangi pada interface ke PC2 dengan alamat 192.168.20.1. Sesuaikan nama interface dengan perangkatmu.</p>`
  },
  {
    kicker: '05 / CEK STATUS LINK', time: '2 MENIT BACA',
    html: `<div class="page-index">05 / CEK STATUS LINK</div><h2>Amati indikator<br>sebelum menguji</h2><p>Bandingkan dua kondisi pada gambar. Warna indikator dapat berubah selama proses awal koneksi atau ketika port belum aktif.</p><div class="two-up"><figure class="figure-compare"><img src="1.png" alt="Topologi dengan satu indikator port router berwarna oranye"><figcaption><strong>Perlu diperiksa</strong>Satu indikator di sisi router tampak oranye. Pastikan kabel dan interface sesuai, lalu cek status port.</figcaption></figure><figure class="figure-compare"><img src="2.png" alt="Topologi dengan indikator link berwarna hijau"><figcaption><strong>Link tampak aktif</strong>Indikator hijau menunjukkan link aktif pada tampilan simulasi ini.</figcaption></figure></div><div class="callout">Indikator link bukan bukti bahwa alamat IP sudah benar. Setelah link aktif, periksa konfigurasi IP dan lakukan ping.</div>`
  },
  {
    kicker: '06 / UJI KONEKSI', time: '3 MENIT PRAKTIK',
    html: `<div class="page-index">06 / UJI KONEKSI</div><h2>Buktikan dengan ping</h2><p>Uji bertahap dari koneksi lokal menuju PC lain. Di PC, buka Desktop &gt; Command Prompt.</p><div class="code-sample">PC1&gt; ping 192.168.10.1 (gateway PC1)<br>PC1&gt; ping 192.168.20.2 (PC2)</div><div class="checklist"><div class="check-item">Ping gateway PC1 berhasil.</div><div class="check-item">Ping gateway PC2 berhasil.</div><div class="check-item">Ping PC1 ke PC2 mendapat balasan.</div><div class="check-item">Uji ulang setelah menunggu beberapa detik.</div></div><div class="callout"><strong>Catatan:</strong> ping pertama kadang gagal saat perangkat mempelajari alamat ARP. Coba lagi; bila tetap gagal, lanjutkan ke daftar pemeriksaan.</div><p class="small-note">Di Simulation Mode, amati paket ICMP dan lihat di perangkat mana paket berhenti.</p>`
  },
  {
    kicker: '07 / TROUBLESHOOTING', time: '3 MENIT BACA',
    html: `<div class="page-index">07 / TROUBLESHOOTING</div><h2>Ping gagal?<br>Periksa berurutan</h2><div class="steps"><div class="step"><span class="step-number">01</span><div><h3>Link fisik</h3><p>Pastikan kabel terpasang pada port yang benar dan indikator link aktif.</p></div></div><div class="step"><span class="step-number">02</span><div><h3>Status interface</h3><p>Periksa <code>show ip interface brief</code>. Interface seharusnya up/up dan tidak shutdown.</p></div></div><div class="step"><span class="step-number">03</span><div><h3>Alamat dan subnet mask</h3><p>Pastikan IP PC satu subnet dengan interface router yang dituju dan tidak ada alamat duplikat.</p></div></div><div class="step"><span class="step-number">04</span><div><h3>Default gateway</h3><p>Gateway PC harus sama dengan alamat interface router pada subnet PC itu.</p></div></div><div class="step"><span class="step-number">05</span><div><h3>Uji dari dekat</h3><p>Ping gateway terlebih dahulu. Jika berhasil, baru ping PC di jaringan sebelah.</p></div></div></div><div class="callout">Router meneruskan trafik antar-subnet secara langsung jika kedua interface aktif dan tidak ada aturan yang memblokirnya.</div>`
  },
  {
    kicker: '08 / KUIS & PENUTUP', time: '3 MENIT',
    html: `<div class="page-index">08 / KUIS &amp; PENUTUP</div><h2>Cek pemahamanmu</h2><form id="quiz-form" class="quiz-list"><fieldset class="quiz-question"><legend>1. Apa peran default gateway pada PC?</legend><div class="quiz-options"><label class="quiz-option"><input type="radio" name="q1" value="a"><span>Menghubungkan PC ke jaringan lain</span></label><label class="quiz-option"><input type="radio" name="q1" value="b"><span>Mengganti alamat MAC</span></label></div></fieldset><fieldset class="quiz-question"><legend>2. Dalam contoh modul, subnet PC1 dan PC2 sebaiknya...</legend><div class="quiz-options"><label class="quiz-option"><input type="radio" name="q2" value="a"><span>Sama persis</span></label><label class="quiz-option"><input type="radio" name="q2" value="b"><span>Berbeda, karena menuju interface router berbeda</span></label></div></fieldset><fieldset class="quiz-question"><legend>3. Apa langkah awal jika ping PC1 ke PC2 gagal?</legend><div class="quiz-options"><label class="quiz-option"><input type="radio" name="q3" value="a"><span>Periksa link, interface, dan konfigurasi IP</span></label><label class="quiz-option"><input type="radio" name="q3" value="b"><span>Langsung mengganti semua kabel</span></label></div></fieldset><div class="quiz-actions"><button class="primary-button" type="submit">Periksa jawaban</button><output class="quiz-result" id="quiz-result" aria-live="polite"></output></div></form><div class="callout"><strong>Inti modul:</strong> link aktif, alamat IP sesuai subnet, gateway tepat, lalu verifikasi dengan ping.</div>`
  }
];

const chapterNames = ['Sampul', 'Tujuan belajar', 'Membaca topologi', 'Alamat IP', 'Konfigurasi', 'Status link', 'Uji koneksi', 'Troubleshooting', 'Kuis & penutup'];
let currentPage = 0;
const pageContent = document.querySelector('#page-content');
const pageWrap = document.querySelector('#page-wrap');
const chapterList = document.querySelector('#chapter-list');
const chapterRail = document.querySelector('#chapter-rail');
const contentsToggle = document.querySelector('#contents-toggle');
const previousButton = document.querySelector('#previous-page');
const nextButton = document.querySelector('#next-page');

function renderChapterLinks() {
  chapterList.innerHTML = chapterNames.map((name, index) => `<button class="chapter-link" type="button" data-page="${index}" aria-current="${index === currentPage ? 'page' : 'false'}"><span>${String(index + 1).padStart(2, '0')}</span><span>${name}</span></button>`).join('');
  chapterList.querySelectorAll('[data-page]').forEach((button) => button.addEventListener('click', () => showPage(Number(button.dataset.page))));
}

function bindQuiz() {
  const form = document.querySelector('#quiz-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = new FormData(form);
    const result = document.querySelector('#quiz-result');
    const answered = ['q1', 'q2', 'q3'].every((name) => answers.has(name));
    const correct = answers.get('q1') === 'a' && answers.get('q2') === 'b' && answers.get('q3') === 'a';
    result.textContent = !answered ? 'Jawab semua pertanyaan terlebih dahulu.' : correct ? '3/3 benar. Kamu siap mencoba simulasi!' : 'Belum tepat semua. Tinjau materi, lalu coba lagi.';
    result.style.color = correct ? 'var(--green)' : 'var(--coral)';
  });
}

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  const page = pages[currentPage];
  pageContent.className = `page ${page.className || ''}`;
  pageContent.innerHTML = page.html;
  document.querySelector('#page-kicker').textContent = page.kicker;
  document.querySelector('#page-time').textContent = page.time;
  document.querySelector('#page-number').innerHTML = `${String(currentPage + 1).padStart(2, '0')} <span>/</span> ${String(pages.length).padStart(2, '0')}`;
  document.querySelector('#rail-count').textContent = `${String(currentPage + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`;
  const progress = document.querySelector('#progress-bar');
  progress.setAttribute('aria-valuemax', String(pages.length));
  progress.setAttribute('aria-valuenow', String(currentPage + 1));
  progress.firstElementChild.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
  renderChapterLinks();
  pageWrap.scrollTop = 0;
  if (currentPage === pages.length - 1) bindQuiz();
  if (window.innerWidth <= 780) {
    chapterRail.classList.remove('is-open');
    contentsToggle.setAttribute('aria-expanded', 'false');
  }
}

previousButton.addEventListener('click', () => showPage(currentPage - 1));
nextButton.addEventListener('click', () => showPage(currentPage + 1));
contentsToggle.addEventListener('click', () => {
  const open = chapterRail.classList.toggle('is-open');
  contentsToggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.matches('input, button, textarea, select')) return;
  if (event.key === 'ArrowRight') showPage(currentPage + 1);
  if (event.key === 'ArrowLeft') showPage(currentPage - 1);
});

showPage(0);