var mongoose = require('mongoose');
var armor = require('./armorModel');
var battlePet = require('./battlePetModel');
var consumable = require('./consumableModel');
var container = require('./containerModel');
var gem = require('./gemModel');
var glyph = require('./glyphModel');
var miscellaneous = require('./miscellaneousModel');
var projectile = require('./projectileModel');
var quest = require('./questModel');
var quiver = require('./quiverModel');
var recipe = require('./recipeModel');
var regeant = require('./regeantModel');
var tradeGoods = require('./tradeGoodsModel');
var Models = {
  Armor : armor,
  BattlePet : battlePet,
  Consumable : consumable,
  Container : container,
  Gem : gem,
  Glyph : glyph,
  Miscellaneous : miscellaneous,
  Projectile : projectile,
  Quest : quest,
  Quiver : quiver,
  Recipe : recipe,
  Regeant : regeant,
  TradeGoods : tradeGoods,

}
exports.Models = Models;
