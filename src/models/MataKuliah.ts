// ============================
// models/MataKuliah.ts
// ============================
import { DataNilai } from "./DataNilai";

export class MataKuliah {
  id: string;
  nama: string;
  sks: number;
  dataNilai: DataNilai[] = [];

  constructor(id: string, nama: string, sks: number) {
    this.id = id;
    this.nama = nama;
    this.sks = sks;
  }

  tambahDataNilai(nilai: DataNilai): void {
    this.dataNilai.push(nilai);
  }
}