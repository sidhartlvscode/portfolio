const terminal = document.getElementById("terminal");
const input = document.getElementById("cmd");

const commands = {
  help: () => {
    return `
Available Commands:
- help: Show this help message
- about: Know who I am
- skills: Tools & Tech I know
- contact: Contact & Links
- clear: Clear the terminal
- baller: ???
- exit: Exit the terminal
`;
  },
  about: () => {
    return `
Hey! I'm Devin 👨‍💻  
Currently pursuing MCA 🎓  
Super passionate about cloud & DevSecOps ☁️🔐  
I blend code with creativity.  
`;
  },
  skills: () => {
    return `
Languages: Java, Python, JavaScript  
Web: HTML, CSS, React (learning...)  
Tools: Git, VS Code, Firebase  
Cloud: Basics of AWS & GCP  
Security: Learning network hardening  
`;
  },
  contact: () => {
    return `
📧 Email: devin.mca@gmail.com  
💼 LinkedIn: linkedin.com/in/devincloud  
💻 GitHub: github.com/devin-x  
📃 Resume: Coming soon!
`;
  },
  clear: () => {
    terminal.innerHTML = '';
    return '';
  },
  exit: () => {
    return `Session closed. You can still scroll up.`;
  },
  baller: () => {
  window.location.href = "baller.html";
  return `Switching to BALLER MODE...`;
}

};

function executeCommand(cmd) {
  const output = document.createElement("div");
  output.className = "output-block";

  const commandText = document.createElement("div");
  commandText.className = "command";
  commandText.textContent = `> ${cmd}`;
  output.appendChild(commandText);

  const resultText = document.createElement("pre");
  resultText.className = "result";

  if (commands[cmd]) {
    resultText.textContent = commands[cmd]();
  } else if (cmd.trim() === '') {
    resultText.textContent = '';
  } else {
    resultText.textContent = `'${cmd}' is not recognized as a command. Try 'help'`;
  }

  output.appendChild(resultText);
  terminal.appendChild(output);

  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    executeCommand(cmd);
    input.value = "";
  }
});
