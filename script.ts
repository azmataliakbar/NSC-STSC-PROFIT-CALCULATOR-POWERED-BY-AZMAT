// TypeScript source that was compiled to script.js included in the HTML.
// Save as script.ts if you want to keep the typed source and compile with tsc.


const $ = (id: string) => document.getElementById(id) as HTMLInputElement | HTMLElement;
const n = (v: string | number) => (isFinite(Number(v)) ? Number(v) : 0);
const toR = (v: number) => 'Rs. ' + v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });


function calcAll() {
const amount = n((($('amount') as HTMLInputElement).value));
const pct = n((($('profitPct') as HTMLInputElement).value));
const annual = amount * pct / 100;
const tax15 = annual * 0.15;
const tax35 = annual * 0.35;
const profit15 = annual - tax15;
const profit35 = annual - tax35;


(($('annualProfit') as HTMLInputElement).value) = toR(annual);
(($('tax15') as HTMLInputElement).value) = toR(tax15);
(($('tax35') as HTMLInputElement).value) = toR(tax35);
(($('profitIf15') as HTMLInputElement).value) = toR(profit15);
(($('profitIf35') as HTMLInputElement).value) = toR(profit35);


(($('qtrProfit15') as HTMLInputElement).value) = toR(profit15 * 3/12);
(($('qtrProfit35') as HTMLInputElement).value) = toR(profit35 * 3/12);
(($('halfProfit15') as HTMLInputElement).value) = toR(profit15 * 6/12);
(($('halfProfit35') as HTMLInputElement).value) = toR(profit35 * 6/12);
(($('yearProfit15') as HTMLInputElement).value) = toR(profit15 * 12/12);
(($('yearProfit35') as HTMLInputElement).value) = toR(profit35 * 12/12);
}


document.addEventListener('DOMContentLoaded', () => {
(document.getElementById('calcBtn') as HTMLButtonElement).addEventListener('click', calcAll);
(document.getElementById('amount') as HTMLInputElement).addEventListener('input', calcAll);
(document.getElementById('profitPct') as HTMLInputElement).addEventListener('input', calcAll);
});