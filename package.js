class Mod
{
    constructor()
    {
		Logger.info("Loading: Additional Clothing - Vanilla Extended");
		
		ModLoader.onLoad["AdditionalClothingVanillaExt"] = require("./src/additionalclothing.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();