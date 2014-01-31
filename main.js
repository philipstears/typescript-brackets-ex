/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus");

    var LanguageManager = brackets.getModule("language/LanguageManager");

	LanguageManager.defineLanguage("typescript", {
		name: "TypeScript",
		mode: ["javascript", "application/typescript"],
		fileExtensions: ["ts"],
		blockComment: ["/*", "*/"],
		lineComment: ["//"]
	});
});
