// https://framagit.org/roipoussiere/strudel-vscode <- sturdel vscode extension with syntax highlighting
// https://www.checklyhq.com/blog/customizing-monaco/ <- adding custom languages to monaco

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import * as monaco from "monaco-editor";
import "./style.css";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
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
