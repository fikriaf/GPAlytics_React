// ============================
// services/IPK.ts
// ============================
import { MataKuliah } from "../models/MataKuliah";

export class IPK {
  static hitung(mataKuliahList: MataKuliah[]): number {
    let totalBobot = 0;
    let totalSKS = 0;

    mataKuliahList.forEach(mk => {
      const nilaiRata = mk.dataNilai.reduce((a, d) => a + d.nilai, 0) / mk.dataNilai.length;
      totalBobot += nilaiRata * mk.sks;
      totalSKS += mk.sks;
    });

    return totalSKS ? parseFloat((totalBobot / totalSKS).toFixed(2)) : 0;
  }
}
