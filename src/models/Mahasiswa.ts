// ============================
// models/Mahasiswa.ts
// ============================
import { MataKuliah } from "./MataKuliah";

export class Mahasiswa {
  id: string;
  nama: string;
  email: string;
  mataKuliah: MataKuliah[] = [];

  constructor(id: string, nama: string, email: string) {
    this.id = id;
    this.nama = nama;
    this.email = email;
  }

  tambahMataKuliah(mk: MataKuliah): void {
    this.mataKuliah.push(mk);
  }
}