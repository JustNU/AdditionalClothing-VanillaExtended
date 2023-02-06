"use strict";

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const modLoader = container.resolve("PreAkiModLoader");
		const database = container.resolve("DatabaseServer").getTables();
		const core = container.resolve("JustNUCore");
		const VFS = container.resolve("VFS");
		const itemData = require("../db/items/itemData.json");
		const enLocale = require(`../db/locales/en.json`);
		const modPath = modLoader.getModPath("AdditionalGear - Tan Module, Rigs")
		
		// add tops
		for (const outfitId in itemData.Tops) {
			const data = itemData.Tops[outfitId]
			
			core.addTop(outfitId, data.TopBundlePath, data.HandsBundlePath, data.HandsBaseID, data.TraderId, data.LoyaltyLevel, data.ProfileLevel, data.Standing, data.CurrencyId, data.Price)
		}
		
		// add bottoms
		for (const outfitId in itemData.Bottoms) {
			const data = itemData.Bottoms[outfitId]
			
			core.addBottom(outfitId, data.BundlePath, data.TraderId, data.LoyaltyLevel, data.ProfileLevel, data.Standing, data.CurrencyId, data.Price)
		}
		
		// add to bots
		database.bots.types["bear"].appearance.feet.AddClothingVanillaExt_BoreyTriariusLower = 1;
		database.bots.types["usec"].appearance.feet.AddClothingVanillaExt_UcpUrbanReponderLower = 1;
		database.bots.types["usec"].appearance.feet.AddClothingVanillaExt_Gen2_Multicam = 1;
		
		// handle locale
		for (const localeID in database.locales.global) {
			// en placeholder
			for (const itemId in enLocale) {
				database.locales.global[localeID][`${itemId}Suite Name`] = enLocale[itemId].Name;
			}
			
			if (VFS.exists(`${modPath}locales/${localeID}.json`) && localeID != "en") {
				const actualLocale = require(`../locales/${localeID}.json`);
				
				for (const itemId in actualLocale) {
					database.locales.global[localeID][`${itemId}Suite Name`] = actualLocale[itemId].Name;
				}
			}
		}
	}
}
	
module.exports = { mod: new Mod() }