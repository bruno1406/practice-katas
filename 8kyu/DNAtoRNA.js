//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((char) => (char === "T" ? "U" : char))
    .join("");
}
