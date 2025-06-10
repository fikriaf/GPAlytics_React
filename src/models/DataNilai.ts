
// ============================
// models/DataNilai.ts
// ============================

export class DataNilai {
  tipe: string;
  nilai: number;
  semester: number;

  constructor(tipe: string, nilai: number, semester: number) {
    this.tipe = tipe;
    this.nilai = nilai;
    this.semester = semester;
  }
}

