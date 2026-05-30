export const company = {
  name: "jarikreasi",
  tagline: "Mitra transformasi digital untuk bisnis yang ingin tumbuh lebih cepat dan rapi.",
  description:
    "jarikreasi adalah perusahaan IT yang membantu organisasi membangun produk digital, sistem internal, dan fondasi teknologi yang siap berkembang.",
  headquarters: "Jakarta, Indonesia",
  email: "hello@jarikreasi.id",
  phone: "+62 21 5099 8840",
  hours: "Senin - Jumat, 09.00 - 18.00 WIB",
};

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/solusi", label: "Solusi" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/proses", label: "Proses" },
  { href: "/kontak", label: "Kontak" },
];

export const stats = [
  { value: "40+", label: "Proyek digital dirilis" },
  { value: "12", label: "Sektor industri ditangani" },
  { value: "96%", label: "Retensi klien tahunan" },
  { value: "24/7", label: "Monitoring sistem prioritas" },
];

export const highlights = [
  {
    title: "Product Thinking",
    description:
      "Kami menyusun solusi dari tujuan bisnis, bukan hanya dari daftar fitur.",
  },
  {
    title: "Engineering Discipline",
    description:
      "Arsitektur, QA, dokumentasi, dan deployment dirancang agar sistem tetap sehat dalam jangka panjang.",
  },
  {
    title: "Lean Collaboration",
    description:
      "Komunikasi ringkas, milestone jelas, dan visibilitas progres yang mudah dipantau tim Anda.",
  },
];

export const aboutSections = [
  {
    title: "Profil Perusahaan",
    body:
      "jarikreasi berfokus pada pengembangan software custom, modernisasi proses bisnis, dan implementasi infrastruktur digital yang aman. Kami menggabungkan riset kebutuhan, desain pengalaman pengguna, pengembangan full-stack, serta support operasional untuk menghadirkan solusi yang relevan dan terukur.",
  },
  {
    title: "Visi",
    body:
      "Menjadi partner teknologi yang dipercaya perusahaan Indonesia untuk mempercepat inovasi digital secara praktis, stabil, dan berdampak nyata.",
  },
  {
    title: "Misi",
    body:
      "Mendesain solusi yang mudah diadopsi tim, membangun sistem yang tahan berkembang, dan menjaga kualitas delivery melalui proses kerja yang transparan dan akuntabel.",
  },
];

export const values = [
  {
    title: "Clarity",
    description: "Menyederhanakan kebutuhan teknis menjadi keputusan yang mudah dipahami stakeholder.",
  },
  {
    title: "Reliability",
    description: "Menjaga kestabilan sistem melalui praktik engineering, observability, dan support yang konsisten.",
  },
  {
    title: "Adaptability",
    description: "Solusi dirancang modular agar mudah berkembang mengikuti perubahan bisnis.",
  },
  {
    title: "Partnership",
    description: "Kami bekerja sebagai partner yang aktif memberi masukan, bukan sekadar vendor eksekusi.",
  },
];

export const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary:
      "Pengembangan aplikasi web dan sistem internal yang sesuai alur bisnis perusahaan.",
    intro:
      "Layanan ini ditujukan untuk perusahaan yang membutuhkan sistem operasional, dashboard, portal, atau aplikasi khusus dengan proses bisnis yang tidak dapat ditangani oleh software generik.",
    deliverables: [
      "Business requirement mapping dan alur user journey",
      "Desain UI/UX berbasis prioritas pengguna",
      "Pengembangan frontend, backend, API, dan database",
      "Role management, audit trail, dan approval workflow",
      "Testing, deployment, dan dokumentasi teknis",
    ],
    benefits: [
      "Operasional lebih cepat dan terukur",
      "Mengurangi proses manual dan duplikasi data",
      "Mudah diintegrasikan dengan tools lain",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "REST API", "Cloud Deployment"],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    summary:
      "Rancangan pengalaman pengguna yang jelas, konsisten, dan siap diimplementasikan tim engineering.",
    intro:
      "Kami membantu memetakan kebutuhan pengguna dan tujuan bisnis ke dalam arsitektur informasi, wireframe, desain high-fidelity, dan design system yang efisien.",
    deliverables: [
      "UX audit dan competitive benchmark",
      "Information architecture dan user flow",
      "Wireframe, prototype, dan usability review",
      "Design system dasar untuk skalabilitas antarmuka",
      "Handoff design ke tim development",
    ],
    benefits: [
      "Antarmuka lebih mudah dipahami pengguna",
      "Mengurangi revisi saat development",
      "Konsistensi visual lintas modul dan platform",
    ],
    tech: ["Figma", "Design System", "Interactive Prototype", "UX Research"],
  },
  {
    slug: "cloud-devops-managed-support",
    title: "Cloud, DevOps & Managed Support",
    summary:
      "Layanan deployment, monitoring, maintenance, dan optimasi performa sistem digital.",
    intro:
      "Untuk aplikasi yang sudah berjalan, kami menyiapkan pipeline delivery, observability, backup, dan tata kelola support agar layanan tetap stabil setelah go-live.",
    deliverables: [
      "Setup hosting, CI/CD, dan environment staging",
      "Monitoring uptime, logs, dan alerting",
      "Security baseline, backup, dan access control",
      "SLA support serta incident handling",
      "Optimasi performa dan evaluasi kapasitas",
    ],
    benefits: [
      "Risiko downtime lebih rendah",
      "Deployment lebih aman dan cepat",
      "Tim internal lebih fokus ke prioritas bisnis",
    ],
    tech: ["Vercel", "Docker", "GitHub Actions", "Cloudflare", "Monitoring Stack"],
  },
];

export const solutions = [
  {
    slug: "enterprise-operations",
    title: "Enterprise Operations",
    summary:
      "Digitalisasi proses approval, procurement, HR, dan pelaporan internal perusahaan.",
    challenge:
      "Banyak organisasi masih bergantung pada spreadsheet, chat, dan approval manual yang menyulitkan kontrol data dan kecepatan keputusan.",
    approach:
      "Kami membangun portal internal modular yang menggabungkan workflow approval, notifikasi, dashboard KPI, dan arsip dokumen terpusat.",
    outcomes: [
      "Lead time approval turun signifikan",
      "Data lintas divisi lebih sinkron",
      "Audit proses menjadi lebih mudah",
    ],
  },
  {
    slug: "commerce-and-customer-platforms",
    title: "Commerce & Customer Platforms",
    summary:
      "Platform digital untuk penjualan, onboarding pelanggan, loyalty, dan layanan mandiri.",
    challenge:
      "Pertumbuhan pelanggan sering tidak diimbangi pengalaman digital yang cepat, konsisten, dan terintegrasi dengan tim sales maupun customer service.",
    approach:
      "Kami merancang portal pelanggan, katalog digital, CRM light integration, dan dashboard aktivitas agar interaksi pelanggan lebih terukur.",
    outcomes: [
      "Konversi dan retensi pelanggan meningkat",
      "Respons layanan lebih cepat",
      "Tim bisnis mendapat visibilitas funnel yang lebih baik",
    ],
  },
  {
    slug: "data-and-executive-visibility",
    title: "Data & Executive Visibility",
    summary:
      "Dashboard manajemen untuk memantau performa bisnis, operasional, dan target strategis.",
    challenge:
      "Data tersebar di banyak sistem sehingga pimpinan kesulitan mendapatkan gambaran real-time untuk pengambilan keputusan.",
    approach:
      "Kami mengonsolidasikan data penting ke dashboard yang ringkas, lengkap dengan visual KPI, analitik tren, dan akses berbasis peran.",
    outcomes: [
      "Pengambilan keputusan lebih cepat",
      "Pelaporan rutin menjadi otomatis",
      "Akurasi data meningkat melalui satu sumber kebenaran",
    ],
  },
];

export const portfolio = [
  {
    slug: "opsflow-suite",
    client: "OpsFlow Suite",
    sector: "Manufaktur",
    title: "Platform operasional untuk workflow produksi dan quality control",
    overview:
      "jarikreasi membangun sistem terintegrasi untuk pelacakan produksi, approval maintenance, dan laporan quality assurance lintas pabrik.",
    scope: [
      "Discovery workshop dan pemetaan proses lintas divisi",
      "Dashboard operasional real-time",
      "Role-based approval dan histori audit",
      "Deployment bertahap ke beberapa site operasional",
    ],
    impact: [
      "Pelaporan harian tersentralisasi",
      "Waktu rekap manual berkurang drastis",
      "Manajemen memperoleh visibilitas bottleneck produksi",
    ],
  },
  {
    slug: "catalyst-care",
    client: "Catalyst Care",
    sector: "Healthcare",
    title: "Portal layanan pelanggan dan dashboard performa layanan klinik",
    overview:
      "Kami membantu klien menghadirkan pengalaman digital untuk booking, pengelolaan antrian, dan pemantauan SLA layanan di beberapa cabang.",
    scope: [
      "Portal pasien dan admin cabang",
      "Integrasi notifikasi dan antrian layanan",
      "Monitoring KPI operasional cabang",
      "Dokumentasi serta pelatihan tim internal",
    ],
    impact: [
      "Pengalaman layanan menjadi lebih konsisten",
      "Waktu tunggu dapat dipantau lebih akurat",
      "Tim operasional lebih cepat menindaklanjuti masalah",
    ],
  },
  {
    slug: "retail-command-center",
    client: "Retail Command Center",
    sector: "Retail",
    title: "Dashboard eksekutif untuk performa penjualan, stok, dan kampanye cabang",
    overview:
      "Sebuah pusat kendali digital untuk memantau tren penjualan harian, efektivitas promosi, dan ketersediaan stok di banyak lokasi.",
    scope: [
      "Executive dashboard dan regional view",
      "Penyatuan metrik operasional utama",
      "Analisis performa kampanye",
      "Monitoring data quality dan akses berbasis peran",
    ],
    impact: [
      "Pimpinan dapat memantau kinerja tanpa menunggu laporan manual",
      "Keputusan restock lebih cepat",
      "Kinerja kampanye lebih mudah dievaluasi",
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery & Alignment",
    description:
      "Workshop awal untuk memahami tujuan bisnis, tantangan operasional, pemangku kepentingan, dan prioritas fitur.",
  },
  {
    title: "Architecture & Design",
    description:
      "Penyusunan solusi, wireframe, alur sistem, dan roadmap delivery yang realistis berdasarkan kebutuhan inti.",
  },
  {
    title: "Build & Validate",
    description:
      "Pengembangan iteratif dengan QA rutin, review berkala, dan validasi langsung dengan tim pengguna.",
  },
  {
    title: "Launch & Scale",
    description:
      "Go-live terkontrol, monitoring pasca-rilis, perbaikan cepat, dan pengembangan lanjutan sesuai kebutuhan pertumbuhan.",
  },
];

export const faqs = [
  {
    question: "Apakah jarikreasi hanya menangani project besar?",
    answer:
      "Tidak. Kami menangani inisiatif bertahap, mulai dari MVP, redesign sistem yang sudah ada, hingga pengembangan platform berskala enterprise.",
  },
  {
    question: "Apakah bisa bekerja sama dengan tim internal klien?",
    answer:
      "Bisa. Kami terbiasa berkolaborasi dengan product owner, tim IT internal, maupun stakeholder lintas fungsi untuk memastikan adopsi berjalan lancar.",
  },
  {
    question: "Apakah tersedia support setelah sistem live?",
    answer:
      "Ya. Kami menyediakan opsi managed support, monitoring, perbaikan bug, dan roadmap enhancement pasca implementasi.",
  },
];

export const pagePreviews = [
  {
    href: "/tentang",
    eyebrow: "Tentang Kami",
    title: "Siapa jarikreasi dan bagaimana kami bekerja",
    description:
      "Profil perusahaan, visi, misi, nilai kerja, dan pendekatan kolaborasi yang kami bawa ke setiap proyek.",
  },
  {
    href: "/layanan",
    eyebrow: "Layanan",
    title: "Kemampuan inti dari discovery hingga maintenance",
    description:
      "Detail layanan pengembangan software, product design, cloud, DevOps, dan support operasional.",
  },
  {
    href: "/solusi",
    eyebrow: "Solusi",
    title: "Use case IT yang relevan untuk pertumbuhan bisnis",
    description:
      "Solusi enterprise operations, customer platform, dan dashboard data untuk membantu keputusan lebih cepat.",
  },
  {
    href: "/portofolio",
    eyebrow: "Portofolio",
    title: "Gambaran implementasi dan dampak bisnis",
    description:
      "Contoh proyek dan transformasi digital yang menunjukkan kualitas delivery dan dampak yang terukur.",
  },
  {
    href: "/proses",
    eyebrow: "Proses",
    title: "Cara kerja yang terstruktur dan transparan",
    description:
      "Alur project dari discovery, desain, build, hingga launch dan pengembangan berkelanjutan.",
  },
  {
    href: "/kontak",
    eyebrow: "Kontak",
    title: "Mulai diskusi kebutuhan digital perusahaan Anda",
    description:
      "Informasi kontak, area kerja sama, FAQ, dan langkah awal untuk memulai kolaborasi dengan tim kami.",
  },
];
