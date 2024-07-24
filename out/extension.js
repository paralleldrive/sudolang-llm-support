"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const disallowedKeywords = ['class', 'inherits', 'extends', 'super'];
const warningMessage = "Class inheritance is not a recommended code reuse pattern due to the fragile base class and gorilla banana problems. Prefer interfaces, modules, functions, factory functions, or composition to avoid duplication by necessity.";
function activate(context) {
    const diagnosticCollection = vscode_1.languages.createDiagnosticCollection('sudolang');
    context.subscriptions.push(diagnosticCollection);
    const updateDiagnostics = (document) => {
        var _a;
        if (document.languageId !== 'sudolang')
            return;
        const diagnostics = [];
        for (let lineIndex = 0; lineIndex < document.lineCount; lineIndex++) {
            const line = document.lineAt(lineIndex);
            for (const keyword of disallowedKeywords) {
                let startIndex = 0;
                while ((startIndex = line.text.indexOf(keyword, startIndex)) >= 0) {
                    const range = new vscode_1.Range(lineIndex, startIndex, lineIndex, startIndex + keyword.length);
                    if ((_a = document.getWordRangeAtPosition(range.start, /\b\w+\b/)) === null || _a === void 0 ? void 0 : _a.isEqual(range)) {
                        const diagnostic = new vscode_1.Diagnostic(range, `The keyword '${keyword}' is discouraged in SudoLang. ${warningMessage}`, vscode_1.DiagnosticSeverity.Warning);
                        diagnostics.push(diagnostic);
                    }
                    startIndex += keyword.length;
                }
            }
        }
        diagnosticCollection.set(document.uri, diagnostics);
    };
    vscode_1.workspace.onDidChangeTextDocument(event => updateDiagnostics(event.document));
    vscode_1.workspace.onDidOpenTextDocument(updateDiagnostics);
    if (vscode_1.window.activeTextEditor) {
        updateDiagnostics(vscode_1.window.activeTextEditor.document);
    }
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map