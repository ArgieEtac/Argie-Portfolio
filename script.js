/**
 * Argie Etac - Computer Engineering Portfolio Script
 * Interactive Modules:
 * 1. Project Category Filtering
 * 2. Detailed Project Dialogs
 * 3. Interactive Digital Logic Gate Sandbox (AND, OR, XOR, NAND, NOR)
 * 4. Interactive CLI Terminal Console with neofetch & easter eggs
 * 5. Interactive Contact Form with Validation & Toast System
 * 6. Quick CV Modal & Mobile Menu Toggle
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------------------
     1. Toast Notification Utility
     ------------------------------------------------------------------------ */
  const toastContainer = document.getElementById("toastContainer");

  function showToast(message, icon = "⚡") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ------------------------------------------------------------------------
     2. Mobile Menu Navigation
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------------
     3. Project Category Filtering
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll(".filter");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.toggle("active", b === btn));

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        if (selected === "all" || categories.includes(selected)) {
          card.style.display = "flex";
          card.style.animation = "toast-in 0.3s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     4. Project Details Dialog Data & Controls
     ------------------------------------------------------------------------ */
  const projectData = {
    can: {
      kicker: "CAPSTONE PROJECT · SOFTWARE DESIGN",
      title: "Community Aid Network (CAN) – Project Nexus",
      badges: ["CAPSTONE PROJECT", "LEAD BACKEND DEVELOPER", "ICCT COLLEGES"],
      desc: "A centralized, accessible web-based platform engineered by Software Rookies (Project Nexus) for the College of Engineering and Digital Technology at ICCT Colleges. It connects communities in need (barangays, orphanages, shelters) directly with helpers and volunteers—emphasizing tangible relief goods and medical supplies rather than cash donations to guarantee transparency and direct delivery.",
      tags: [
        "Lead Backend Developer (Argie Etac)",
        "Web Platform Architecture",
        "Centralized Database Models",
        "Search & Multi-Filter Query Engine",
        "Secure Direct Coordinator Messaging",
        "Real-Time Request Fulfillment Tracking",
        "Low-Bandwidth Mobile Friendly (Disaster Tested)"
      ],
      items: [
        "Role: Lead Backend Developer – Designed data schemas, request endpoints, authentication flow, and coordinator dispatch systems.",
        "Centralized Posting System: Verified barangay and community representatives submit structured requests for essential supplies.",
        "Search & Filter Engine: Donors quickly identify urgent needs filtered by location, urgency level, and relief category.",
        "Direct Secure Messaging: Direct communication channel between helpers and barangay representatives to eliminate aid duplication.",
        "Transparency & Tracking: Real-time status updates showing which requests are fulfilled or ongoing to build community trust.",
        "Accessibility: Lightweight, mobile-friendly interface operational on basic smartphones and low-bandwidth disaster environments.",
        "Academic Capstone: Presented to the Faculty of College of Engineering and Digital Technology, ICCT Colleges Foundation Inc."
      ],
      nextStep: "Pilot deployment testing across partner barangays and integration of real-time disaster alert webhooks.",
      pdf: "PROJECT-NEXUS_CAN_CHAPTER-1.pdf"
    },
    coin: {
      kicker: "HARDWARE + EMBEDDED SYSTEM",
      title: "Smart Automated Coin Changer Machine",
      badges: ["PROTOTYPE PHASE", "RASPBERRY PI / MCU"],
      desc: "An automated dispensing kiosk designed to accept bills or mixed coins and return exact denomination payouts. Built with an embedded controller communicating through GPIO interrupt pulses, optical drop sensors, high-current relay/motor drivers for the hoppers, and a serial LCD interface.",
      tags: ["Raspberry Pi 4 / Pico", "Multi-Coin Acceptor (Pulse Mode)", "DC 12V Hopper Motors", "Relay Modules", "Python / C++", "Power Regulation (12V to 5V)"],
      items: [
        "System Block Diagram detailing power distribution (12V high-side, 5V logic step-down).",
        "Opto-isolated GPIO circuitry protecting controller pins from inductive motor spikes.",
        "Pulse counting interrupt routine detecting coin values (₱1, ₱5, ₱10, ₱20) accurately.",
        "Greedy change dispensing algorithm prioritizing larger denominations to conserve hopper storage.",
        "Anti-jamming monitoring and low-coin sensor notification mechanism."
      ],
      nextStep: "Currently testing hopper payout timing routines and soldering the custom distribution protoboard."
    },
    logic: {
      kicker: "DIGITAL ELECTRONICS LAB",
      title: "Digital Logic Circuits & Combinational Systems",
      badges: ["COURSEWORK COMPLETED", "TTL / CMOS"],
      desc: "Exploration of fundamental boolean algebra, Karnaugh map simplifications, and physical realization using 7400-series integrated circuits. Bench testing includes full adders, BCD decoders, multiplexers, and latching flip-flops.",
      tags: ["7408 AND", "7432 OR", "7404 NOT", "7486 XOR", "7400 NAND", "Breadboarding", "Logisim Simulator"],
      items: [
        "Mathematical proof via Boolean algebra laws and De Morgan's theorems.",
        "Truth table derivation and minimal SOP / POS circuit synthesis.",
        "Physical breadboard wiring with pull-down resistors and debounced input switches.",
        "Oscilloscope / logic probe measurement verifying propagation delay."
      ],
      nextStep: "Moving into sequential state machines and HDL (Verilog) simulations."
    },
    sensor: {
      kicker: "EMBEDDED SYSTEMS & IOT",
      title: "Microcontroller Sensor Acquisition & Telemetry",
      badges: ["BENCH TESTED", "ARDUINO / ESP32"],
      desc: "A modular microcontroller node that samples environmental and distance metrics. Features an ultrasonic sensor (HC-SR04), analog sensors via ADC sampling, threshold detection algorithms, and I2C OLED readout with alarm buzzer triggers.",
      tags: ["ESP32 / Arduino Uno", "HC-SR04 Ultrasonic", "I2C 0.96 inch OLED", "PWM Piezo Buzzer", "ADC Calibration", "C / C++ Firmware"],
      items: [
        "Time-of-flight echo calculation using hardware microsecond timers.",
        "Non-blocking millis() task scheduling to maintain fluid display refresh without delay().",
        "Configurable high/low safety thresholds triggering PWM frequency modulation.",
        "Serial telemetry logging at 115200 baud for PC analysis."
      ],
      nextStep: "Adding ESP32 Wi-Fi MQTT broker integration to enable remote smartphone dashboards."
    },
    java: {
      kicker: "SOFTWARE DEVELOPMENT",
      title: "Object-Oriented Java Software Suite",
      badges: ["COURSEWORK COMPLETED", "OOP & ARCHITECTURE"],
      desc: "A collection of modular console and GUI applications built to solve inventory management, coin changer simulations, and student record tracking. Emphasizes clean class hierarchies, abstraction, encapsulation, and error tolerance.",
      tags: ["Java SE 17+", "Collections Framework", "File I/O Serialization", "Exception Handling", "JUnit Testing"],
      items: [
        "Class diagrams adhering to solid OOP principles (Separation of Concerns).",
        "CRUD operations backed by persistent CSV / serialized file storage.",
        "Robust input validation with custom exception handlers preventing program crashes.",
        "Automated unit tests verifying algorithmic calculations."
      ],
      nextStep: "Packaging modular JAR executables and integrating JavaFX for modern desktop UI."
    }
  };

  const projectDialog = document.getElementById("projectDialog");
  const dialogClose = document.getElementById("dialogClose");
  const dialogCloseBtn = document.getElementById("dialogCloseBtn");

  function openProjectDialog(key) {
    const data = projectData[key];
    if (!data || !projectDialog) return;

    document.getElementById("dialogKicker").textContent = data.kicker;
    document.getElementById("dialogTitle").textContent = data.title;
    document.getElementById("dialogDescription").textContent = data.desc;
    document.getElementById("dialogNextStep").textContent = data.nextStep;

    // Badges
    const badgeContainer = document.getElementById("dialogBadges");
    if (badgeContainer) {
      badgeContainer.innerHTML = data.badges.map(b => `<span class="project-status status-tested">${b}</span>`).join(" ");
    }

    // Tags
    const tagsContainer = document.getElementById("dialogTags");
    if (tagsContainer) {
      tagsContainer.innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
    }

    // Checklist
    const listContainer = document.getElementById("dialogList");
    if (listContainer) {
      listContainer.innerHTML = data.items.map(i => `<li>${i}</li>`).join("");
    }

    // PDF Documentation Action Button
    const dialogInquireBtn = document.getElementById("dialogInquireBtn");
    let pdfBtn = document.getElementById("dialogDocBtn");
    if (data.pdf) {
      if (!pdfBtn && dialogInquireBtn && dialogInquireBtn.parentNode) {
        pdfBtn = document.createElement("a");
        pdfBtn.id = "dialogDocBtn";
        pdfBtn.className = "button primary";
        pdfBtn.target = "_blank";
        dialogInquireBtn.parentNode.insertBefore(pdfBtn, dialogInquireBtn);
      }
      if (pdfBtn) {
        pdfBtn.href = data.pdf;
        pdfBtn.style.display = "inline-flex";
        pdfBtn.innerHTML = `<span>View Chapter 1 PDF</span> <span class="arrow-icon">📄</span>`;
      }
    } else if (pdfBtn) {
      pdfBtn.style.display = "none";
    }

    projectDialog.showModal();
  }

  document.querySelectorAll(".details-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      openProjectDialog(btn.dataset.project);
    });
  });

  if (dialogClose) dialogClose.addEventListener("click", () => projectDialog.close());
  if (dialogCloseBtn) dialogCloseBtn.addEventListener("click", () => projectDialog.close());
  
  if (projectDialog) {
    projectDialog.addEventListener("click", (e) => {
      if (e.target === projectDialog) projectDialog.close();
    });
  }

  // Quick Inquire Button inside modal
  const dialogInquireBtn = document.getElementById("dialogInquireBtn");
  if (dialogInquireBtn) {
    dialogInquireBtn.addEventListener("click", () => {
      projectDialog.close();
    });
  }

  /* ------------------------------------------------------------------------
     5. CV Brief Dialog
     ------------------------------------------------------------------------ */
  const cvDialog = document.getElementById("cvDialog");
  const btnQuickResume = document.getElementById("btnQuickResume");
  const cvDialogClose = document.getElementById("cvDialogClose");
  const cvDialogCloseBtn = document.getElementById("cvDialogCloseBtn");

  if (btnQuickResume && cvDialog) {
    btnQuickResume.addEventListener("click", () => cvDialog.showModal());
  }
  if (cvDialogClose) cvDialogClose.addEventListener("click", () => cvDialog.close());
  if (cvDialogCloseBtn) cvDialogCloseBtn.addEventListener("click", () => cvDialog.close());
  if (cvDialog) {
    cvDialog.addEventListener("click", (e) => {
      if (e.target === cvDialog) cvDialog.close();
    });
  }

  /* ------------------------------------------------------------------------
     6. Interactive Digital Logic Gate Sandbox
     ------------------------------------------------------------------------ */
  const gateSelect = document.getElementById("gateSelect");
  const gateFormulaDisplay = document.getElementById("gateFormulaDisplay");
  const gateVisualName = document.getElementById("gateVisualName");
  const switchA = document.getElementById("switchA");
  const switchB = document.getElementById("switchB");
  const simLed = document.getElementById("simLed");
  const simOutputVal = document.getElementById("simOutputVal");
  const truthTableBody = document.getElementById("truthTableBody");

  const gateFormulas = {
    AND: "Y = A · B",
    OR: "Y = A + B",
    XOR: "Y = A ⊕ B",
    NAND: "Y = (A · B)'",
    NOR: "Y = (A + B)'"
  };

  function computeLogic(gate, a, b) {
    switch (gate) {
      case "AND": return a && b ? 1 : 0;
      case "OR": return a || b ? 1 : 0;
      case "XOR": return (a ^ b) ? 1 : 0;
      case "NAND": return !(a && b) ? 1 : 0;
      case "NOR": return !(a || b) ? 1 : 0;
      default: return 0;
    }
  }

  function updateLogicSimulation() {
    if (!gateSelect || !switchA || !switchB || !simLed || !simOutputVal) return;

    const gate = gateSelect.value;
    const a = parseInt(switchA.dataset.state, 10);
    const b = parseInt(switchB.dataset.state, 10);
    const output = computeLogic(gate, a, b);

    // Update Gate visual and formula
    if (gateFormulaDisplay) gateFormulaDisplay.textContent = gateFormulas[gate] || "Y = f(A,B)";
    if (gateVisualName) gateVisualName.textContent = gate;

    // Update Output LED
    if (output === 1) {
      simLed.classList.add("active");
      simOutputVal.textContent = "1 (HIGH +5V)";
      simOutputVal.classList.add("high");
    } else {
      simLed.classList.remove("active");
      simOutputVal.textContent = "0 (LOW 0V)";
      simOutputVal.classList.remove("high");
    }

    // Rebuild dynamic truth table
    if (truthTableBody) {
      const rows = [
        { a: 0, b: 0 },
        { a: 0, b: 1 },
        { a: 1, b: 0 },
        { a: 1, b: 1 }
      ];

      truthTableBody.innerHTML = rows.map((r) => {
        const rowOut = computeLogic(gate, r.a, r.b);
        const isCurrent = (r.a === a && r.b === b);
        return `
          <tr class="tt-row ${isCurrent ? 'active-eval' : ''}">
            <td>${r.a}</td>
            <td>${r.b}</td>
            <td>${rowOut}</td>
            <td>${isCurrent ? '● Active State' : 'Idle'}</td>
          </tr>
        `;
      }).join("");
    }
  }

  function setupSwitch(btn) {
    if (!btn) return;
    btn.addEventListener("click", () => {
      const currentState = parseInt(btn.dataset.state, 10);
      const newState = currentState === 0 ? 1 : 0;
      btn.dataset.state = String(newState);
      btn.querySelector(".switch-text").textContent = newState === 1 ? "1 (HIGH)" : "0 (LOW)";
      updateLogicSimulation();
    });
  }

  setupSwitch(switchA);
  setupSwitch(switchB);
  if (gateSelect) {
    gateSelect.addEventListener("change", updateLogicSimulation);
  }
  updateLogicSimulation();

  /* ------------------------------------------------------------------------
     7. Interactive CLI Terminal Console (Paayos ng Prompt)
     ------------------------------------------------------------------------ */
  const terminalInput = document.getElementById("terminalInput");
  const terminalSendBtn = document.getElementById("terminalSendBtn");
  const terminalOutput = document.getElementById("terminalOutput");
  const clearTerminalBtn = document.getElementById("clearTerminalBtn");
  let commandHistory = [];
  let historyIndex = -1;

  const terminalCommands = {
    help: () => `
Available system commands:
  <span class="term-highlight">help</span>        - Display this menu of available commands
  <span class="term-highlight">neofetch</span>    - Print computer engineering system specs & hardware telemetry
  <span class="term-highlight">projects</span>    - List all 5 featured engineering & web builds
  <span class="term-highlight">can</span>         - Open Community Aid Network Capstone Web Platform specs
  <span class="term-highlight">skills</span>      - Display hardware, firmware, and software toolkit
  <span class="term-highlight">about</span>       - Brief bio of Argie Etac
  <span class="term-highlight">contact</span>     - Display mobile, email, location, and GitHub profile
  <span class="term-highlight">matrix</span>      - Simulate circuit datastream
  <span class="term-highlight">date</span>        - Display current system timestamp
  <span class="term-highlight">clear</span>       - Clear the terminal console buffer
`,
    neofetch: () => `
<span class="accent-green">        .---.</span>            <span class="term-highlight">argie@cpe-station</span>
<span class="accent-green">       /     \\</span>           ------------------
<span class="accent-green">      | () () |</span>          <span class="accent-cyan">OS:</span> CPE Linux 6.4.0-arm64
<span class="accent-green">       \\  _  /</span>           <span class="accent-cyan">Host:</span> Argie Etac DevStation v2.4
<span class="accent-green">        \`---\`</span>            <span class="accent-cyan">Kernel:</span> 6.4.12-cpe-generic
<span class="accent-green">       /     \\</span>           <span class="accent-cyan">Uptime:</span> Computer Engineering Student · ICCT Colleges
<span class="accent-green">      / |   | \\</span>          <span class="accent-cyan">Focus:</span> Embedded Systems &amp; Backend Web Engineering
<span class="accent-green">     /  |   |  \\</span>         <span class="accent-cyan">Packages:</span> Java, C/C++, Python, Web API, Raspberry Pi, Arduino
<span class="accent-green">    (   )---(   )</span>        <span class="accent-cyan">Shell:</span> bash 5.2.15
<span class="accent-green">    \`---\`   \`---\`</span>        <span class="accent-cyan">CPU:</span> Broadcom BCM2711 / ATmega328P / Intel Core
`,
    projects: () => `
<span class="term-highlight">Selected Engineering Projects:</span>
  1. [CAPSTONE] <span class="accent-green">Community Aid Network (CAN)</span> (Lead Backend Dev - ICCT Colleges)
  2. [HARDWARE] <span class="accent-cyan">Smart Automated Coin Changer Machine</span> (Raspberry Pi, Pulse Acceptor)
  3. [CIRCUITS] <span class="accent-green">Digital Logic Circuits</span> (7400-Series ICs, Truth Tables, K-Maps)
  4. [EMBEDDED] <span class="accent-cyan">Microcontroller Sensor Acquisition</span> (ESP32/Arduino, Ultrasonic, OLED)
  5. [SOFTWARE] <span class="accent-green">Object-Oriented Java Software Suite</span> (OOP Architecture, File I/O)

Type <span class="term-highlight">can</span>, <span class="term-highlight">coin</span>, <span class="term-highlight">logic</span>, <span class="term-highlight">sensor</span>, or <span class="term-highlight">java</span> to inspect specifications.
`,
    can: () => {
      openProjectDialog("can");
      return "Opening Community Aid Network (CAN) Capstone specifications & documentation...";
    },
    coin: () => {
      openProjectDialog("coin");
      return "Opening Smart Coin Changer Machine specifications modal...";
    },
    logic: () => {
      openProjectDialog("logic");
      return "Opening Digital Logic Circuits specifications modal...";
    },
    sensor: () => {
      openProjectDialog("sensor");
      return "Opening Microcontroller Sensor System specifications modal...";
    },
    java: () => {
      openProjectDialog("java");
      return "Opening Java Programming Projects specifications modal...";
    },
    skills: () => `
<span class="term-highlight">Technical Capabilities:</span>
  * <span class="accent-green">Hardware:</span> Digital Logic, Breadboarding, 7400 TTL/CMOS, Sensor Interfacing
  * <span class="accent-cyan">Embedded:</span> Arduino, ESP32, Raspberry Pi, GPIO, PWM, I2C, SPI, UART
  * <span class="accent-green">Languages:</span> Java (OOP, Collections), C/C++ (Firmware), Python, Web (HTML/CSS/JS)
  * <span class="accent-cyan">Tools:</span> VS Code, Arduino IDE, Git/GitHub, Logisim, Linux CLI
`,
    about: () => `
<span class="term-highlight">Argie Etac</span> - BS Computer Engineering Student at ICCT Colleges.
Based in San Jose del Monte, Bulacan, Philippines.
Lead Backend Developer for Project Nexus (Community Aid Network).
Passionate about designing real-world systems connecting microcontroller hardware with responsive software.
`,
    contact: () => `
<span class="term-highlight">Get In Touch:</span>
  * Location: San Jose del Monte, Bulacan, Philippines
  * Mobile:   09398443278
  * Email:    cateargie@gmail.com
  * GitHub:   https://github.com/ArgieEtac
`,
    matrix: () => `
<span class="accent-green">01000001 01010010 01000111 01001001 01000101 (ARGIE)</span>
<span class="accent-cyan">01000011 01010000 01000101 (CPE)</span>
[BUS_CLK]: 16.000 MHz OK | [VOLTAGE]: +5.03V REGULATED | [STATUS]: RUNNING
`,
    date: () => `Current Local System Time: ${new Date().toLocaleString()}`,
    sudo: () => "Permission denied: You are already logged in as a privileged engineering guest.",
    clear: () => {
      if (terminalOutput) {
        terminalOutput.innerHTML = "";
      }
      return null;
    }
  };

  function executeTerminalCommand(cmdRaw) {
    if (!terminalOutput) return;
    const cmdClean = cmdRaw.trim().toLowerCase();
    if (!cmdClean) return;

    // Add to history
    commandHistory.push(cmdRaw);
    historyIndex = commandHistory.length;

    // Echo command line
    const cmdEcho = document.createElement("div");
    cmdEcho.className = "term-line cmd-echo";
    cmdEcho.innerHTML = `argie@cpe:~$ <span style="color:#ffffff;">${escapeHtml(cmdRaw)}</span>`;
    terminalOutput.appendChild(cmdEcho);

    // Process output
    const handler = terminalCommands[cmdClean];
    if (handler) {
      const result = handler();
      if (result) {
        const outDiv = document.createElement("div");
        outDiv.className = "term-line output";
        outDiv.innerHTML = result;
        terminalOutput.appendChild(outDiv);
      }
    } else {
      const errDiv = document.createElement("div");
      errDiv.className = "term-line error";
      errDiv.innerHTML = `bash: command not found: <strong>${escapeHtml(cmdClean)}</strong>. Type <span class="term-highlight">help</span> for a list of valid commands.`;
      terminalOutput.appendChild(errDiv);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        executeTerminalCommand(terminalInput.value);
        terminalInput.value = "";
      } else if (e.key === "ArrowUp") {
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistory[historyIndex] || "";
        }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistory[historyIndex] || "";
        } else {
          historyIndex = commandHistory.length;
          terminalInput.value = "";
        }
      }
    });
  }

  if (terminalSendBtn && terminalInput) {
    terminalSendBtn.addEventListener("click", () => {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = "";
      terminalInput.focus();
    });
  }

  // Clear Terminal Button
  if (clearTerminalBtn && terminalOutput) {
    clearTerminalBtn.addEventListener("click", () => {
      terminalOutput.innerHTML = `
        <div class="term-line info-line">Terminal buffer cleared. Type <span class="term-highlight">help</span> to view commands.</div>
      `;
      showToast("Terminal screen cleared", "🧹");
    });
  }

  // Interactive Command Chips
  document.querySelectorAll(".term-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeTerminalCommand(cmd);
      }
    });
  });

  /* ------------------------------------------------------------------------
     8. Interactive Contact Form & Copy Email
     ------------------------------------------------------------------------ */
  const portfolioContactForm = document.getElementById("portfolioContactForm");
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const quickEmailCard = document.getElementById("quickEmailCard");

  if (portfolioContactForm) {
    portfolioContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const topic = document.getElementById("inquiryType").value;
      const message = document.getElementById("messageText").value.trim();

      if (!name || !email || !message) {
        showToast("Please complete all required fields.", "⚠️");
        return;
      }

      // Generate pre-filled mailto
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic} - from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n\nSent from Argie Etac Portfolio`
      );
      const mailtoLink = `mailto:cateargie@gmail.com?subject=${subject}&body=${body}`;

      // Open mail client
      window.location.href = mailtoLink;

      // Toast feedback
      showToast("Opening your default mail client...", "🚀");

      // Reset form
      portfolioContactForm.reset();
    });
  }

  function copyEmailToClipboard() {
    const emailToCopy = "cateargie@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailToCopy)
        .then(() => showToast(`Copied ${emailToCopy} to clipboard!`, "📋"))
        .catch(() => showToast(`Email: ${emailToCopy}`, "✉️"));
    } else {
      showToast(`Email: ${emailToCopy}`, "✉️");
    }
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", copyEmailToClipboard);
  }

  // Copy Mobile Number
  const copyPhoneBtn = document.getElementById("copyPhoneBtn");
  function copyPhoneToClipboard() {
    const phoneToCopy = "09398443278";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phoneToCopy)
        .then(() => showToast(`Copied ${phoneToCopy} to clipboard!`, "📱"))
        .catch(() => showToast(`Mobile: ${phoneToCopy}`, "📱"));
    } else {
      showToast(`Mobile: ${phoneToCopy}`, "📱");
    }
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", copyPhoneToClipboard);
  }

  /* ------------------------------------------------------------------------
     9. Dynamic Footer Year & Header Scroll Effect
     ------------------------------------------------------------------------ */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const siteHeader = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.style.borderBottomColor = "var(--border-strong)";
      siteHeader.style.boxShadow = "0 8px 24px rgba(0,0,0,0.5)";
    } else {
      siteHeader.style.borderBottomColor = "var(--border-subtle)";
      siteHeader.style.boxShadow = "none";
    }
  });

  console.log("Argie Etac - Computer Engineering Portfolio Initialized Successfully.");
});
