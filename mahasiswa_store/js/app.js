// ── ASSET IMAGES (edit path di sini jika ingin ganti gambar) ──
const ASSETS = {
  pdh_basic:             "assets/images/pdh_basic.jpeg",
  pdh_two_in_one:        "assets/images/pdh_two_in_one.jpeg",
  pdh_batik:             "assets/images/pdh_batik.jpeg",
  vest:                  "assets/images/vest.jpeg",
  almamater:             "assets/images/almamater.jpeg",
  kaos_pendek:           "assets/images/kaos_pendek.jpeg",
  kaos_panjang:          "assets/images/kaos_panjang.jpeg",
  pdh_pendek:            "assets/images/pdh_pendek.jpeg",
  pdh_custom:            "assets/images/pdh_custom.jpeg",
  selempang_timbal_fc:   "assets/images/selempang_timbal_fc.jpeg",
  selempang_timbal_c:    "assets/images/selempang_timbal_c.jpeg",
  selempang_full_c:      "assets/images/selempang_full_c.jpeg",
  selempang_basic:       "assets/images/selempang_basic.jpeg",
  papan1:                "assets/images/papan1.jpeg",
  papan2:                "assets/images/papan2.jpeg",
  papan3:                "assets/images/papan3.jpeg",
  papan4:                "assets/images/papan4.jpeg",
  papan5:                "assets/images/papan5.jpeg",
  papan6:                "assets/images/papan6.jpeg",
  buket_snack1:          "assets/images/buket_snack1.jpeg",
  buket_snack2:          "assets/images/buket_snack2.jpeg",
  banner1:               "assets/images/banner1.jpeg",
  banner2:               "assets/images/banner2.jpeg",
  banner3:               "assets/images/banner3.jpeg",
  banner4:               "assets/images/banner4.jpeg"
};

const WA = '6285940319537';

// ── PRODUCT DATA (edit di sini untuk ubah produk/harga) ──
// Format: { id, cat, name, desc, tags[], price, note, img }

// ------- BAJU PDH -------
const dataPDH = [
  { id:'pdh1', cat:'Baju PDH', name:'PDH Basic', desc:'PDH angkatan kelas custom bordir nama & logo kampus. Bahan drill premium, jahitan rapi. Tersedia berbagai warna sesuai almamater kampus.', tags:['hot','pop'], price:'Rp 120.000 – 125.000', note:'per pcs', img:'pdh_basic' },
  { id:'pdh2', cat:'Baju PDH', name:'PDH Two In One', desc:'PDH two in one – bisa dipakai sebagai PDH biasa atau rompi, dua fungsi dalam satu baju. Desain praktis dan stylish untuk KKN dan kampus.', tags:['new'], price:'Rp 140.000', note:'per pcs', img:'pdh_two_in_one' },
  { id:'pdh3', cat:'Baju PDH', name:'PDH Batik Custom', desc:'PDH motif batik premium dengan bordir nama & logo kampus. Elegant untuk acara resmi, sidang, dan kegiatan kampus formal.', tags:['pop'], price:'Rp 130.000 – 140.000', note:'per pcs', img:'pdh_batik' },
  { id:'pdh4', cat:'Baju PDH', name:'Rompi / Vest KKN', desc:'Rompi/vest custom untuk KKN, magang, dan kegiatan lapangan. Custom logo, nama, dan identitas kelompok. Bahan berkualitas, sablon & bordir rapi.', tags:['hot'], price:'Rp 110.000', note:'per pcs', img:'vest' },
  { id:'pdh5', cat:'Baju PDH', name:'Almamater Custom', desc:'Jas almamater custom dengan lapisan furing berkualitas. Bordir nama dan logo kampus. Tampil resmi dan berkesan untuk wisuda atau sidang.', tags:[], price:'Rp 150.000', note:'per pcs', img:'almamater' },
  { id:'pdh6', cat:'Baju PDH', name:'Kaos Sablon Lengan Pendek', desc:'Kaos custom sablon DTF/DTG berkualitas. Custom desain, nama, logo angkatan. Warna beragam, untuk keperluan angkatan, event, atau KKN.', tags:['hot'], price:'Rp 70.000', note:'per pcs', img:'kaos_pendek' },
  { id:'pdh7', cat:'Baju PDH', name:'Kaos Sablon Lengan Panjang', desc:'Kaos lengan panjang custom sablon atau printing full colour. Cocok untuk tim, angkatan, atau kegiatan outdoor mahasiswa.', tags:['pop'], price:'Rp 95.000', note:'per pcs', img:'kaos_panjang' },
  { id:'pdh8', cat:'Baju PDH', name:'PDH Lengan Pendek', desc:'PDH lengan pendek custom bordir nama, logo, dan identitas kampus. Ringan dan nyaman untuk kegiatan kampus sehari-hari.', tags:[], price:'Rp 115.000 – 120.000', note:'per pcs', img:'pdh_pendek' },
  { id:'pdh9', cat:'Baju PDH', name:'PDH Custom / Banyak Bordir', desc:'PDH premium dengan desain penuh custom – banyak bordir detail, logo besar, identitas lengkap. Cocok untuk Planters, angkatan tematik, dan organisasi.', tags:['new'], price:'Rp 130.000 – 140.000', note:'per pcs', img:'pdh_custom' },
];

// ------- SELEMPANG -------
const dataSelempang = [
  { id:'sl1', cat:'Selempang', name:'Selempang Timbal Balik Full Colour', desc:'Selempang dua sisi (timbal balik) full colour – sisi depan desain ilustrasi/karakter unik, sisi belakang formal berisi nama & gelar. Custom 100%.', tags:['hot','new'], price:'Rp 140.000', note:'Timbal Balik Full Colour', img:'selempang_timbal_fc' },
  { id:'sl2', cat:'Selempang', name:'Selempang Timbal Balik Colour', desc:'Selempang dua sisi dengan warna solid dan ornamen elegan di kedua muka. Custom nama, gelar, prodi, dan logo kampus. Tampil beda di hari wisuda.', tags:['pop'], price:'Rp 120.000', note:'Timbal Balik Colour', img:'selempang_timbal_c' },
  { id:'sl3', cat:'Selempang', name:'Selempang Full Colour', desc:'Selempang full colour satu sisi dengan desain bebas – custom ilustrasi, karakter, foto, warna background. Tampil unik dan berkesan.', tags:['hot'], price:'Rp 95.000', note:'Full Colour', img:'selempang_full_c' },
  { id:'sl4', cat:'Selempang', name:'Selempang Basic', desc:'Selempang custom simpel untuk seminar proposal, sidang skripsi, dan wisuda. Background warna solid, nama & judul custom. Harga terjangkau, kualitas terjamin.', tags:['pop'], price:'Rp 75.000', note:'Basic / mulai dari', img:'selempang_basic' },
];

// ------- BANNER & PAPAN BUNGA -------
const dataBanner = [
  { id:'bn7', cat:'Banner', name:'Banner Road To Be Wanita Karir', desc:'Banner wisuda custom tema ilustrasi unik – "Road To Be Wanita Karir". Custom nama wisudawan, foto, dan desain karakter. Tampil beda dan berkesan di hari sidang! Tersedia berbagai ukuran dan bahan premium.', tags:['hot','new'], price:'Hubungi Kami', note:'Harga sesuai ukuran', img:'banner1', imgFit:'portrait' },
  { id:'bn8', cat:'Banner', name:'Banner Akhirnya WISSS-UDAH!', desc:'Banner wisuda custom tema lucu dan kekinian – karakter caricature naik scoopy. Custom nama, foto, dan ilustrasi karakter sesuai keinginan. Cocok untuk kenangan wisuda yang memorable dan viral!', tags:['new','pop'], price:'Hubungi Kami', note:'Harga sesuai ukuran', img:'banner2', imgFit:'portrait' },
  { id:'bn9', cat:'Banner', name:'Banner Perintah Orang Tua – Wisuda', desc:'Banner wisuda custom tema surat keputusan orang tua yang lucu dan viral. Custom nama wisudawan, foto masa kecil, dan foto sekarang. Dijamin bikin semua orang tertawa dan baper!', tags:['hot','pop'], price:'Hubungi Kami', note:'Harga sesuai ukuran', img:'banner3', imgFit:'portrait' },
  { id:'bn10', cat:'Banner', name:'Banner Bye Bye Skripsi Custom', desc:'Banner custom bertema wisuda eksklusif – bye bye skripsi! Custom nama, gelar, dan desain menarik. Cocok untuk sidang skripsi atau wisuda yang berkesan dan kekinian.', tags:['new'], price:'Hubungi Kami', note:'Harga sesuai ukuran', img:'banner4', imgFit:'portrait' },
];

// ------- BOUQUET -------
const dataBouquet = [
  { id:'bq1', cat:'Bouquet', name:'Buket Snack Wisuda – Jumbo', desc:'Buket snack wisuda jumbo berisi berbagai snack favorit seperti Yupi, Silver Queen, Pocky, dan lainnya. Dikemas cantik dengan bunga artifisial dan wrapping pink premium. Hadiah kekinian yang menggemaskan!', tags:['hot','pop'], price:'Hubungi Kami', note:'Harga sesuai pilihan', img:'buket_snack1' },
  { id:'bq2', cat:'Bouquet', name:'Buket Snack + Bunga Wisuda', desc:'Kombinasi buket snack dan bunga segar/artifisial – Yupi, Pocky, dan rangkaian bunga mawar pink cantik. Tampilan mewah dan berkesan untuk hadiah sidang atau wisuda tersayang.', tags:['new'], price:'Hubungi Kami', note:'Harga sesuai pilihan', img:'buket_snack2' },
];

// ------- AKRILIK & SOUVENIR -------
const dataAkrilik = [
  { id:'ak1', cat:'Akrilik', name:'Plakat Akrilik Sidang / Wisuda', desc:'Plakat akrilik eksklusif custom nama lengkap, NIM, judul skripsi/tesis, tanggal sidang atau wisuda. Tersedia berbagai ukuran, bentuk, dan desain. Kenangan perjuangan yang terukir indah.', tags:['hot'], price:'90.000', note:'Harga sesuai ukuran & desain', img:'papan2' },
  { id:'ak2', cat:'Akrilik', name:'Akrilik Nama + Gelar Pajangan', desc:'Akrilik elegan bertuliskan nama lengkap beserta gelar baru wisudawan. Pajangan meja kebanggaan keluarga yang tahan lama dan eksklusif.', tags:['pop'], price:'90.000', note:'Harga sesuai ukuran', img:'papan3' },
  { id:'ak3', cat:'Akrilik', name:'Kado Box Wisuda Premium', desc:'Gift box wisuda mewah isi lengkap: plakat akrilik, selempang wisuda, bunga, dan kartu ucapan. Hadiah all-in-one terbaik untuk wisudawan tersayang.', tags:['new'], price:'75.000', note:'Harga sesuai isi paket', img:'papan4' },
  { id:'ak4', cat:'Akrilik', name:'Souvenir Custom (Mug, Gantungan, Tote Bag)', desc:'Souvenir wisuda custom: mug keramik, gantungan kunci akrilik, tote bag kanvas – semua bisa custom foto dan nama wisudawan. Berkesan dan harga terjangkau.', tags:['pop'], price:'75.000', note:'Harga sesuai pilihan', img:'papan5' },
];

// ── RENDER FUNCTION ──
function renderGrid(data, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = data.map(p => {
    const tagHtml = p.tags.map(t => {
      if(t==='hot') return '<span class="tag tag-hot">Terlaris</span>';
      if(t==='pop') return '<span class="tag tag-pop">Populer</span>';
      if(t==='new') return '<span class="tag tag-new">Baru</span>';
      return '';
    }).join('');
    const imgSrc = ASSETS[p.img] || '';
    const fitClass = p.imgFit === 'portrait' ? 'portrait' : '';
    return `<div class="pc" onclick="openModal('${p.id}')">
      <div class="pc-img ${fitClass}">
        <div class="pc-tags">${tagHtml}</div>
        <img src="${imgSrc}" alt="${p.name}" loading="lazy">
      </div>
      <div class="pc-body">
        <div class="pc-name">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-price-row">
          <div>
            <div class="pc-price-note">${p.note}</div>
            <div class="pc-price">${p.price}</div>
          </div>
          <a class="pc-order" href="https://wa.me/${WA}?text=Halo!%20Saya%20tertarik%20*${encodeURIComponent(p.name)}*%20di%20Mahasiswa%20Store.%20Bisa%20info%20lebih%20lanjut?" target="_blank" onclick="event.stopPropagation()">💬 Pesan</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── MODAL ──
const ALL_PRODUCTS = [...dataPDH, ...dataSelempang, ...dataBanner, ...dataBouquet, ...dataAkrilik];

function openModal(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalImg').src = ASSETS[p.img] || '';
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalNote').textContent = p.note;
  document.getElementById('modalWa').href = `https://wa.me/${WA}?text=Halo!%20Saya%20tertarik%20*${encodeURIComponent(p.name)}*%20di%20Mahasiswa%20Store.%20Bisa%20info%20lebih%20lanjut?`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('modal').classList.remove('open'); document.body.style.overflow = ''; }
function closeModalBg(e) { if (e.target === document.getElementById('modal')) closeModal(); }

// ── MOBILE MENU ──
function toggleMenu() { document.getElementById('mobileNav').classList.toggle('open'); }
function closeMenu() { document.getElementById('mobileNav').classList.remove('open'); }

// ── SCROLL TO SECTION ──
// ── SECTION SWITCHER: show only clicked section, hide others ──
const SECTIONS = ['pdh','selempang','banner','bouquet','akrilik'];

function showSection(id, lcEl) {
  // Hide all product sections
  SECTIONS.forEach(s => {
    const sec = document.getElementById(s);
    if (sec) sec.classList.remove('active');
  });
  // Show clicked section
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    // Smooth scroll to it
    setTimeout(() => target.scrollIntoView({behavior:'smooth', block:'start'}), 50);
  }
  // Update layanan card active state
  document.querySelectorAll('.lc').forEach(c => c.classList.remove('active'));
  if (lcEl) lcEl.classList.add('active');
}

function goToSection(sel) {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({behavior:'smooth'});
}

// ── INIT: Render all grids ──
renderGrid(dataPDH, 'grid-pdh');
renderGrid(dataSelempang, 'grid-selempang');
renderGrid(dataBanner, 'grid-banner');
renderGrid(dataBouquet, 'grid-bouquet');
renderGrid(dataAkrilik, 'grid-akrilik');