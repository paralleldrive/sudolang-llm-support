import {
    ExtensionContext,
    languages,
    workspace,
    window,
    TextDocument,
    Diagnostic,
    Range,
    DiagnosticSeverity,
    DiagnosticCollection
  } from 'vscode';
  
  const disallowedKeywords = ['class', 'inherits', 'extends', 'super'];
  const warningMessage = "Class inheritance is not a recommended code reuse pattern due to the fragile base class and gorilla banana problems. Prefer interfaces, modules, functions, factory functions, or composition to avoid duplication by necessity.";
  
  export function activate(context: ExtensionContext) {
    const diagnosticCollection = languages.createDiagnosticCollection('sudolang');
    context.subscriptions.push(diagnosticCollection);
  
    const updateDiagnostics = (document: TextDocument) => {
      if (document.languageId !== 'sudolang') return;
  
      const diagnostics: Diagnostic[] = [];
  
      for (let lineIndex = 0; lineIndex < document.lineCount; lineIndex++) {
        const line = document.lineAt(lineIndex);
        for (const keyword of disallowedKeywords) {
          let startIndex = 0;
          while ((startIndex = line.text.indexOf(keyword, startIndex)) >= 0) {
            const range = new Range(lineIndex, startIndex, lineIndex, startIndex + keyword.length);
            if (document.getWordRangeAtPosition(range.start, /\b\w+\b/)?.isEqual(range)) {
              const diagnostic = new Diagnostic(
                range,
                `The keyword '${keyword}' is discouraged in SudoLang. ${warningMessage}`,
                DiagnosticSeverity.Warning
              );
              diagnostics.push(diagnostic);
            }
            startIndex += keyword.length;
          }
        }
      }
  
      diagnosticCollection.set(document.uri, diagnostics);
    };
  
    workspace.onDidChangeTextDocument(event => updateDiagnostics(event.document));
    workspace.onDidOpenTextDocument(updateDiagnostics);
  
    if (window.activeTextEditor) {
      updateDiagnostics(window.activeTextEditor.document);
    }
  }
  
  export function deactivate() {}