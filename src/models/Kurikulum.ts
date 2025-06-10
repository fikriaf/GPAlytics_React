// ============================
// models/Kurikulum.ts
// ============================

export interface MataKuliahKurikulum {
  kode: string;
  nama: string;
  sks: number;
  prasyarat: string[];
}

export const Kurikulum: MataKuliahKurikulum[] = [
  { kode: "MK201", nama: "Kecerdasan Buatan", sks: 3, prasyarat: ["Statistik Dasar"] },
  { kode: "MK202", nama: "Pemrograman Lanjut", sks: 4, prasyarat: ["Pemrograman Dasar"] },
  { kode: "MK203", nama: "Interaksi Manusia & Komputer", sks: 3, prasyarat: [] },
  { kode: "MK204", nama: "Data Mining", sks: 3, prasyarat: ["Kecerdasan Buatan", "Statistik Dasar"] },
];

