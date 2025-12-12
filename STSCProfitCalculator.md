# PROFIT CALCULATOR — Project Documentation

**Powered by: Azmat Ali**

---

## 📘 Overview

This project is a **colorful, animated, responsive Profit Calculator** designed for mobile screens (270px and above) and laptops. It calculates:

* Annual profit on a given percentage
* 15% and 35% tax amounts
* Tax-adjusted profits
* Profit for 3, 6, and 12 months after tax deduction

The project contains:

* `index.html`
* `styles.css`
* `script.ts`
* *(Optional compiled)* `script.js`
* This README.md file

---

## 🛠️ Technology Used

* **HTML5** (structure)
* **CSS3** (animations, colors, responsive design)
* **TypeScript** (calculations & event handling)
* **JavaScript** (compiled output for browsers)

---

## 🎨 Design Features

* Black background with soft glowing borders
* Stylish gradient heading
* Light multi‑color text
* Soft input shadows and inset box effects
* "CALCULATE" button with glow animation
* Flickering motivational message text
* Centered animated footer message
* Fully responsive layout

---

## 🧮 How Calculations Work

### 1️⃣ Inputs Provided by User

* **Investment amount (Rs.)**
* **Profit percentage (%)**

### 2️⃣ Automatically Calculated Values

#### **Annual Profit Calculation**

```
annualProfit = amount × (profitPercent / 100)
```

#### **Tax Calculations**

```
tax15 = annualProfit × 0.15

tax35 = annualProfit × 0.35
```

#### **Profit After Tax**

```
profitIf15 = annualProfit − tax15

profitIf35 = annualProfit − tax35
```

#### **Quarterly (3‑Months) Profits**

```
qtrProfit15 = profitIf15 × (3/12)

qtrProfit35 = profitIf35 × (3/12)
```

#### **Half‑Yearly (6‑Months) Profits**

```
halfProfit15 = profitIf15 × (6/12)

halfProfit35 = profitIf35 × (6/12)
```

#### **Full Year (12‑Months) Profits**

```
yearProfit15 = profitIf15 × 1

yearProfit35 = profitIf35 × 1
```

---

## 🚀 How the App Works (Step‑by‑Step)

* ✔ User enters **investment amount**
* ✔ User enters **profit percentage**
* ✔ Presses **CALCULATE** button
* ✔ All values auto-fill instantly in read‑only fields
* ✔ Beautiful animations make the experience engaging

---

## 📱 Responsive Design Notes

* Works on screens from **270px width** and above
* All input rows resize smoothly
* Text and button animations remain intact

---

## 📂 Project Files

```
|-- index.html
|-- styles.css
|-- script.ts
|-- script.js (auto‑generated)
|-- README.md
```

---

## 🏷️ Special Notes

**This project is based on National Saving Scheme (Pakistan)** for:

* 3‑Month Certificate
* 6‑Month Certificate
* 12‑Month Certificate

---

## 👤 Author

**Powered By: Azmat Ali**

If you want a GitHub‑ready ZIP folder or want to push it directly to GitHub, just let me know!
