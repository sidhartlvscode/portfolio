const terminal = document.getElementById("terminal");
const input = document.getElementById("cmd");

const ballerCommands = {
  whoami: () => {
    return `You are HIM 💀\nYou code. You conquer. You ball.`;
  },
  vibecheck: () => {
    return `Vibe: 🔥 Immaculate\nEnergy: ⚡ Off the charts\nFocus: 🎯 Locked in`;
  },
  bars: () => {
    return `“Code like a king 👑, deploy like a god ⚡”`;
  },
  exit: () => {
    window.location.href = "index.html";
    return `👋 Back to normal mode... Peace.`;
  },
  help: () => {
    return `
BALLER COMMANDS:
- whoami: Know who you are
- vibecheck: Check the energy
- bars: Drop a baller line
- exit: Return to normal mode
- help: This funky list
`;
  },
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

  if (ballerCommands[cmd]) {
    resultText.textContent = ballerCommands[cmd]();
  } else {
    resultText.textContent = `'${cmd}' ain't it, chief. Try 'help'`;
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
