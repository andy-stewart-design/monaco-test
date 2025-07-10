// https://framagit.org/roipoussiere/strudel-vscode <- sturdel vscode extension with syntax highlighting
// https://www.checklyhq.com/blog/customizing-monaco/ <- adding custom languages to monaco

import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import * as monaco from "monaco-editor";
import "./style.css";

self.MonacoEnvironment = {
  getWorker() {
    return new tsWorker();
  },
};

const editor = monaco.editor.create(document.getElementById("app")!, {
  value: "console.log('Hello, world!');",
  language: "typescript",
  theme: "vs-dark",
  minimap: {
    enabled: false,
  },
  autoClosingQuotes: "always",
  autoClosingBrackets: "always",
  renderValidationDecorations: "off",
  parameterHints: {
    enabled: false,
  },
  quickSuggestions: false,
  hover: {
    enabled: false,
  },
});

window.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "Enter") {
    console.log(editor.getValue());
  }
});
