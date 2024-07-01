let yas = 60;
let ucret = 450;
if (yas >= 65 && yas <= 100) {
  ucret = 0;
} else if (yas >= 15 && yas < 25) {
  ucret = 450 * 0.5;
} else if (yas >= 10 && yas < 15) {
  ucret = 450 * 0.2;
} else if (yas < 10) {
  ucret = 0;
}
