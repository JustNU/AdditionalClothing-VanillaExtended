"use strict";

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const modDb = `user/mods/AdditionalClothing-VanillaExtended/db/`;
		const database = container.resolve("DatabaseServer").getTables();
		const core = container.resolve("JustNUCore");
		
		// add tops
		core.addTop(modDb, "AddClothingVanillaExt_BlackTshirtUpper",	"AddClothingVanillaExt/Tops/top_tshirt_black.bundle", 			"assets/content/hands/hands_tshirt_bear_black/hands_tshirt_bear_black.skin.bundle",	"5d1f5aa286f7744bca3f0b9c");
		core.addTop(modDb, "AddClothingVanillaExt_FsbAltUpper",			"AddClothingVanillaExt/Tops/top_fsbfastresponse_alt.bundle",	"AddClothingVanillaExt/Hands/hands_fsbfastresponse_alt.bundle",						"5d1f5ab286f7743f8362bcdd");
		core.addTop(modDb, "AddClothingVanillaExt_FsbAlt2Upper",		"AddClothingVanillaExt/Tops/top_fsbfastresponse_alt2.bundle",	"AddClothingVanillaExt/Hands/hands_fsbfastresponse_alt2.bundle",					"5d1f5ab286f7743f8362bcdd");
		core.addTop(modDb, "AddClothingVanillaExt_Tier2Alt1Upper",		"AddClothingVanillaExt/Tops/top_tier2_alt1.bundle", 			"AddClothingVanillaExt/Hands/hands_tier2_alt1.bundle",								"5e4bb1fe86f774069342dec8");
		core.addTop(modDb, "AddClothingVanillaExt_Tier2Alt2Upper",		"AddClothingVanillaExt/Tops/top_tier2_alt2.bundle", 			"AddClothingVanillaExt/Hands/hands_tier2_alt2.bundle",								"5e4bb1fe86f774069342dec8");
		
		// add bottoms
		core.addBottom(modDb, "AddClothingVanillaExt_UcpUrbanReponderLower",	"AddClothingVanillaExt/Bottoms/bottom_urbanresponder_ucp.bundle");
		core.addBottom(modDb, "AddClothingVanillaExt_BoreyTriariusLower",		"AddClothingVanillaExt/Bottoms/bottom_triarius_borey.bundle");
		
		database.bots.types["bear"].appearance.feet.AddClothingVanillaExt_BoreyTriariusLower = 1;
		database.bots.types["usec"].appearance.feet.AddClothingVanillaExt_UcpUrbanReponderLower = 1;
	}
}
	
module.exports = { mod: new Mod() }