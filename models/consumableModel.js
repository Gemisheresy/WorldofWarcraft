var mongoose = require('mongoose');
var consumableSchema = mongoose.Schema({
  id: Number,
  description: String,
  name: String,
  icon : String,
  stackable: Number,
  itemBind: Number,
  bonusStats : Array,
  itemSpells : Array,
  buyPrice: Number,
  itemClass: Number,
  itemSubClass: Number,
  containerSlots: Number,
  inventoryType: Number,
  equippable: Boolean,
  itemLevel: Number,
  maxCount: Number,
  maxDurability: Number,
  minFactionId: Number,
  minReputation: Number,
  quality: Number,
  sellPrice: Number,
  requiredSkill: Number,
  requiredLevel: Number,
  requiredSkillRank: Number,
  itemSource : { sourceId : Number, sourceType : String},
  baseArmor: Number,
  hasSockets: Boolean,
  isAuctionable: Boolean,
  armor: Number,
  displayInfoId: Number,
  nameDescription: String,
  nameDescriptionColor: String,
  upgradable: Boolean,
  heroicTooltip: Boolean,
  context: String,
  bonusLists : Array,
  availableContexts : Array,
  bonusSummary : { defaultBonusLists: Array, chanceBonusLists: Array, bonusChances: Array }


});
var Consumable =mongoose.model('Consumable',consumableSchema);
exports.Consumable = Consumable;
