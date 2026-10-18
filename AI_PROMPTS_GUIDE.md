# 🚀 Gabay sa Maayos na Prompts para sa Computer Engineering Portfolio (Argie Etac)

Ang dokumentong ito ay espesyal na inihanda para sa iyo (**Argie Etac**) upang magkaroon ka ng **handa nang gamiting mga AI Prompts** (ready-to-use prompt templates) para sa pag-develop, pagpapaganda, at pag-update ng iyong portfolio sa VS Code gamit ang ChatGPT, Claude, GitHub Copilot, o AI assistants.

---

## 📌 Bakit mahalaga ang tamang Prompting sa Engineering?
Kapag malabo ang prompt, malabo rin ang ibibigay ng AI. Ang isang epektibong engineering prompt ay mayroong **5 Bahagi**:
1. **Role (Sino ang AI):** Halimbawa: *"Ikaw ay isang Senior Computer Systems Engineer..."*
2. **Context (Ano ang sitwasyon):** Halimbawa: *"Ako ay isang BS Computer Engineering student na gumagawa ng Coin Changer Machine..."*
3. **Task (Ano ang eksaktong gagawin):** Halimbawa: *"Sumulat ng detalyadong Technical Specifications at Block Diagram..."*
4. **Constraint (Mga limitasyon):** Halimbawa: *"Gumamit ng professional engineering tone, walang fluff, at may bullet points."*
5. **Format (Paano ipapakita):** Halimbawa: *"I-format bilang HTML, Markdown, o C++ code."*

---

## 🛠️ Master Prompt Templates (Kopyahin at I-paste)

### 1. 🪙 Prompt para sa Pag-update ng Coin Changer Project
> **Gamitin ito kapag gusto mong palitan o dagdagan ang detalye ng iyong Coin Changer Machine sa iyong website:**

```text
Ikaw ay isang Senior Embedded Systems Engineer. Tulungan mo akong i-update ang project section ng aking portfolio para sa aking "Smart Automated Coin Changer Machine".

Narito ang aking kasalukuyang hardware at progress:
- Controller: [Halimbawa: Raspberry Pi 4 / Raspberry Pi Pico / Arduino Uno]
- Coin Acceptor: [Halimbawa: Multi-coin pulse selector para sa ₱1, ₱5, ₱10, ₱20]
- Dispenser / Actuator: [Halimbawa: 12V DC motor hoppers na may relay control]
- Display: [Halimbawa: 16x2 I2C LCD o 0.96" OLED screen]
- Kasalukuyang katayuan: [Halimbawa: Tapos na ang breadboard wiring, sinusubukan na ang pulse interrupt code]

Pakigawa:
1. Isang maikli ngunit propesyonal na Project Summary (2-3 pangungusap) para sa aking portfolio card.
2. Limang (5) high-impact technical bullet points na naglalarawan ng system architecture, power regulation (12V to 5V), interrupt handling, at algorithm para sa sukli.
3. Isang listahan ng mga susunod na hakbang (Next Engineering Milestones).
```

---

### 2. ⚡ Prompt para sa Digital Logic Circuits & Coursework Labs
> **Gamitin ito para gawing pormal at pang-engineer ang iyong mga school lab exercises:**

```text
Gawin mong mukhang pormal na hardware engineering showcase ang aking Digital Electronics coursework para sa aking portfolio.

Mga ginamit kong components:
- 7400 Series TTL ICs (7408 AND, 7432 OR, 7404 NOT, 7486 XOR)
- 5V breadboard power supply, LEDs, SPDT switches, pull-down resistors
- Simulation software: [Halimbawa: Logisim / Multisim / Tinkercad]

Gawan mo ito ng:
1. Technical description na nagpapaliwanag ng Boolean algebra, truth tables, at minimization gamit ang Karnaugh Maps.
2. Talata tungkol sa breadboard debugging (paano ko na-resolve ang floating pins o switch bouncing gamit ang pull-down resistors).
3. 4 na maiikling taglines na magandang ilagay sa resume o portfolio.
```

---

### 3. 📄 Prompt para sa Computer Engineering Resumé / CV Bullets
> **Gamitin ito kapag mag-a-apply ka ng On-the-Job Training (OJT) o Internship:**

```text
Ikaw ay isang Technical Recruiter na dalubhasa sa pag-hire ng Computer Engineering interns sa Pilipinas.
I-transform mo ang aking raw project experience sa Google XYZ Formula format ("Accomplished [X], as measured by [Y], by doing [Z]"):

Aking mga ginawa:
- Ginawa ang automated coin changer gamit ang sensors at microcontrollers.
- Sumulat ng Java program para sa inventory at calculations.
- Nag-breadboard at nag-simulate ng digital logic circuits.
- Nag-program ng sensors (ultrasonic, temperature) gamit ang Arduino/ESP32.

Pakisulat ang:
1. 4 na malalakas na resume bullet points na may action verbs (Designed, Implemented, Engineered, Integrated).
2. Isang 3-pangungusap na LinkedIn Bio / Summary para sa isang graduating o incoming OJT Computer Engineering student.
```

---

### 4. 💻 Prompt para sa Microcontroller / Arduino Code Debugging
> **Gamitin ito kapag may error o bug sa iyong code sa VS Code:**

```text
Ako ay nagko-code ng embedded C/C++ sa VS Code para sa aking microcontroller project. Mayroon akong problema sa sumusunod na code:

Target Hardware: [Halimbawa: Arduino Uno / ESP32]
Sensors/Modules: [Halimbawa: HC-SR04 Ultrasonic Sensor + I2C LCD]
Problema: [Halimbawa: Nagha-hang ang program kapag tumagal ng 1 minuto, o hindi consistent ang pulse readings]

Narito ang aking code:
```[I-paste ang code rito]```

Pakiusap:
1. Tukuyin kung ano ang root cause ng problema (e.g. blocking delay(), memory leak, timing jitter, o wiring issue).
2. Ibigay ang naayos at na-optimize na code na may malilinaw na comments.
3. Ipaliwanag kung anong best practice ang dapat kong tandaan para sa susunod.
```

---

### 5. 🎤 Prompt para sa Technical Mock Interview (CPE Intern)
> **Gamitin ito para mag-practice sumagot bago mag-interview:**

```text
Magkunwari ka bilang isang Lead Systems & Hardware Engineer sa isang tech company. Magdaos tayo ng isang realistic technical interview para sa isang Computer Engineering Intern position.

I-interview mo ako isa-isang tanong. Hintayin mo ang aking sagot bago magtanong ng susunod.
Saklawin ang mga sumusunod na paksa:
1. Pagkakaiba ng Microcontroller vs Microprocessor
2. I2C vs SPI communication protocols
3. Paano gumagana ang pull-up at pull-down resistors
4. Object-Oriented Programming (OOP) concepts sa Java/C++
5. Paano mag-debug kapag walang output ang isang sensor circuit

Simulan na natin sa unang tanong!
```

---

## 💡 Paano Gamitin ang mga Prompts na ito sa VS Code:
1. Piliin ang angkop na prompt sa itaas.
2. Palitan ang mga nasa loob ng `[bracket]` ng iyong sariling tunay na detalye.
3. I-paste sa AI chatbox (sa VS Code chat panel o browser).
4. Kapag lumabas ang magandang sagot, i-kopya ito papunta sa `index.html` o `script.js` ng iyong portfolio!
