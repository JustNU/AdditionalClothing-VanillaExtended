"use strict";

class AdditionalClothingVanillaExt
{
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/AdditionalClothing_VanillaExtended/db/`;
		
		// add tops
		JustNUCore.AddTop(db, "AddClothingVanillaExt_BlackTshirtUpper",	"AddClothingVanillaExt/Tops/top_tshirt_black.bundle", 			"assets/content/hands/hands_tshirt_bear_black/hands_tshirt_bear_black.skin.bundle",	"5d1f5aa286f7744bca3f0b9c");
		JustNUCore.AddTop(db, "AddClothingVanillaExt_FsbAltUpper",		"AddClothingVanillaExt/Tops/top_fsbfastresponse_alt.bundle",	"AddClothingVanillaExt/Hands/hands_fsbfastresponse_alt.bundle",						"5d1f5ab286f7743f8362bcdd");
		JustNUCore.AddTop(db, "AddClothingVanillaExt_FsbAlt2Upper",		"AddClothingVanillaExt/Tops/top_fsbfastresponse_alt2.bundle", 	"AddClothingVanillaExt/Hands/hands_fsbfastresponse_alt2.bundle",					"5d1f5ab286f7743f8362bcdd");
		JustNUCore.AddTop(db, "AddClothingVanillaExt_Tier2Alt1Upper",	"AddClothingVanillaExt/Tops/top_tier2_alt1.bundle", 			"AddClothingVanillaExt/Hands/hands_tier2_alt1.bundle",								"5e4bb1fe86f774069342dec8");
		JustNUCore.AddTop(db, "AddClothingVanillaExt_Tier2Alt2Upper",	"AddClothingVanillaExt/Tops/top_tier2_alt2.bundle", 			"AddClothingVanillaExt/Hands/hands_tier2_alt2.bundle",								"5e4bb1fe86f774069342dec8");
		
		// add bottoms
		JustNUCore.AddBottom(db, "AddClothingVanillaExt_UcpUrbanReponderLower",	"AddClothingVanillaExt/Bottoms/bottom_urbanresponder_ucp.bundle");
		JustNUCore.AddBottom(db, "AddClothingVanillaExt_BoreyTriariusLower",	"AddClothingVanillaExt/Bottoms/bottom_triarius_borey.bundle");
		
		DatabaseServer.tables.bots.types["bear"].appearance.feet.push(
			"AddClothingVanillaExt_BoreyTriariusLower"
		);
		DatabaseServer.tables.bots.types["usec"].appearance.feet.push(
			"AddClothingVanillaExt_UcpUrbanReponderLower"
		);
	}
}
	
module.exports = AdditionalClothingVanillaExt;