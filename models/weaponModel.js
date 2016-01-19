var mongoose = require('mongoose');
var weaponSchema = mongoose.Schema({
  id : : Number,
  disenchantingSkillRank : : Number,
  description : String,
  name : : String,
  icon : String : : String,
  stackable : : Number,
  itemBind : : Number,
  bonusStats : : Array,
  itemSpells : : Array,
  buyPrice : : Number,
  itemClass : : Number,
  itemSubClass : : Number,
  containerSlots : Number,
  weaponInfo { damage: { min: : Number,
                         max: : Number,
                         exactMin: : Number,
                         exactMax: : Number, },
               weaponSpeed: : Number,
               dps: : Number, }
  inventoryType : : Number,
  equippable : : Boolean,
  itemLevel : : Number,
  maxCount : : Number,
  maxDurability : : Number,
  minFactionId : : Number,
  minReputation  : : Number,
  quality : : Number,
  sellPrice : : Number,
  requiredSkill : : Number,
  requiredLevel : : Number,
  requiredSkillRank : : Number,
  itemSource { sourceId : Number: : Number, sourceType : String }
  baseArmor : : Number,
  hasSockets : : Boolean,
  isAuctionable : : Boolean,
  armor : : Number,
  displayInfoId : : Number,
  nameDescription : : String,
  nameDescriptionColor : : Number,
  upgradable : : Boolean,
  heroicTooltip : Boolean,
  context
  bonusLists : Array,
  availableContexts Array,
  bonusSummary { defaultBonusLists: : Array,
                 chanceBonusLists: : Array,
                 bonusChances: : Array }

});
var Weapon =mongoose.model('Weapon',weaponSchema);
exports.Weapon = Weapon;
