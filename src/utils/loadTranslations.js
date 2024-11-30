// src/utils/loadTranslations.js
import fs from "fs";
import path from "path";

export function loadTranslations(lang) {
	const filePath = path.resolve(`./i18n/${lang}.json`);
	const translations = JSON.parse(fs.readFileSync(filePath, "utf-8"));
	return translations;
}
