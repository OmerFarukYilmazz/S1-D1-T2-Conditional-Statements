
  const { describe, expect, test } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const rewire = require("rewire");
let myModule = rewire("./index");

const studentCodePath = path.join(__dirname, "index.js");
const studentCode = fs.readFileSync(studentCodePath, "utf8");

let studentCodeToEval;
if (studentCode.includes("if")) {
  const ifPosition = studentCode.search("if");
  const beforeIf = studentCode.slice(0, ifPosition);
  const afterIf = studentCode.slice(ifPosition);
  const afterIfReplaced = afterIf.replaceAll("yas", "age");
  studentCodeToEval = beforeIf + afterIfReplaced;
} else {
  studentCodeToEval = studentCode;
}

const fnStr = (age) => `(function studentCode(age) {
  ${studentCodeToEval};
  return ucret;
})(${age})`;

try {
  yas = myModule.__get__("yas");
} catch (error) {
  yas = undefined;
}

try {
  ucret = myModule.__get__("ucret");
} catch (error) {
  ucret = undefined;
}

describe("Tren Bileti Ücret Testi", () => {
  test("yas değişkenini tanımladın mı?", () => {
    expect(yas).toBeDefined();
  });

  test("yas değişkeni 0 ve 100 arasında mı?", () => {
    expect(yas).toBeDefined();
    expect(yas).toBeGreaterThanOrEqual(0);
    expect(yas).toBeLessThanOrEqual(100);
  });

  test("ucret değişkenini tanımladın mı?", () => {
    expect(ucret).toBeDefined();
  });

  test("ucret değişkeni değeri 450 mi?", () => {
    expect(ucret).toBeDefined();
    expect(ucret).toEqual(eval(fnStr(yas)));
  });

  test("yas 65-100 arasında ise ücretsiz seyahat etmeli", () => {
    const studentResult_65 = eval(fnStr(65));
    const studentResult_100 = eval(fnStr(100));
    expect(studentResult_65).toEqual(0);
    expect(studentResult_100).toEqual(0);
  });

  test("yas 25-65 arasında ise indirim olmamalı", () => {
    const studentResult_25 = eval(fnStr(25));
    const studentResult_64 = eval(fnStr(64));
    expect(studentResult_25).toEqual(450);
    expect(studentResult_64).toEqual(450);
  });

  test("yas 15-25 arasında ise %50 indirimli olmalı", () => {
    const studentResult_15 = eval(fnStr(15));
    const studentResult_24 = eval(fnStr(24));
    expect(studentResult_15).toEqual(225);
    expect(studentResult_24).toEqual(225);
  });

  test("yas 10-15 arasında ise %80 indirimli olmalı", () => {
    const studentResult_10 = eval(fnStr(10));
    const studentResult_14 = eval(fnStr(14));
    expect(studentResult_10).toEqual(90);
    expect(studentResult_14).toEqual(90);
  });

  test("yas 0-10 arasında ise ücretsiz seyahat etmeli", () => {
    const studentResult_0 = eval(fnStr(0));
    const studentResult_9 = eval(fnStr(9));
    expect(studentResult_0).toEqual(0);
    expect(studentResult_9).toEqual(0);
  });
});
