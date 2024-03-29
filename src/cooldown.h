#pragma once

#include <algorithm>

namespace cooldown {

enum ID : int {
  NONE = 0,
  POTION = 1,
  CONJURED = 2,
  TRINKET1 = 3,
  TRINKET2 = 4,
  TRINKET_SHARED = 5,
  EVOCATION = 12051,
  COLD_SNAP = 11958,
  WATER_ELEMENTAL = 31687,
  DEEP_FREEZE = 44572,
  BRAIN_FREEZE = 57761,
  BERSERKING = 20554,
  ARCANE_TORRENT = 28730,
  ICY_VEINS = 12472,
  FIRE_BLAST = 42873,
  BLAST_WAVE = 42945,
  DRAGONS_BREATH = 42950,
  CONE_OF_COLD = 42931,
  ARCANE_BARRAGE = 44781,
  COMBUSTION = 29977,
  FIRE_POWER = 310168,
  ARCANE_POWER = 12042,
  PRESENCE_OF_MIND = 12043,
  FIRE_WARD = 43010,
  MIRROR_IMAGE = 55342,
  MIRROR_FIRE_BLAST = 59637,
  POWER_INFUSION = 10060,
  BLACK_MAGIC = 59626,
  LIGHTWEAVE = 55637,
  DARKGLOW = 55767,
  HYPERSPEED_ACCELERATION = 54758,
  MANA_GEM = 42987,
  PRAXIS = 64867,
  SAPPER_CHARGE = 56488,
  ASHEN_BAND = 72416,
  NIBELUNG_HC = 71844,
  NIBELUNG_NM = 71843,

  // Sirus races, TODO: исправить айди
  LIGHTFORGED = 319321,
  ZANDALARI_HASTE = 55555252,
  BLOOD_ELF_RACE = 443123123,

  // Sirus procs
  NECK_ALDORS_213 = 111111111,
  NECK_SCRYERS_213 = 222222222,
  NECK_ALDORS_232 = 333333333,
  NECK_SCRYERS_232 = 444444444,
  NECK_ALDORS_251 = 555555555,
  NECK_SCRYERS_251 = 666666666,
  NECK_ALDORS_264 = 777777777,
  NECK_SCRYERS_264 = 888888888,

  // Trinkets
  FORGE_EMBER = 60479,
  PENDULUM_TELLURIC_CURRENTS = 60483,
  DARKMOON_DEATH = 60203,
  NOW_IS_THE_TIME = 60064,
  ELUSIVE_POWER = 67669,
  EMBRACE_SPIDER = 60492,
  DYING_CURSE = 60494,
  DYING_CURSE_HM = 330352, // Sirus HM version
  EXTRACT_NECROMANTIC_POWER = 60488,
  SOUL_DEAD = 60538,
  ALACRITY_ELEMENTS = 65004,
  MEMORIES_LOVE = 65003,
  FLARE_HEAVENS = 64713,
  SHOW_FAITH = 64739,
  PANDORAS_PLEA = 64741,
  REIGN_UNLIVING_HC = 67758,
  REIGN_UNLIVING_NM = 67712,
  DISLODGED_OBJECT_HC = 71644,
  DISLODGED_OBJECT_NM = 71601,
  NAMELESS_LICH_HC = 71636,
  NAMELESS_LICH_NM = 71605,
  CHARRED_TWILIGHT_SCALE_HC = 75473,
  CHARRED_TWILIGHT_SCALE_NM = 75466,
  PURIFIED_LUNAR_DUST = 71584,

  //
};


// Owned by Action and Unit.  Needs to be a pointer because child classes can be bigger.
struct Cooldown {
  ID id;
  double duration;
  double t_gained = 0;

  Cooldown(ID _id = NONE, double _duration = 0) : id(_id),
                                                  duration(std::max(0.0, _duration)) {}
};

class TrinketShared : public Cooldown {

public:
  TrinketShared(double _duration = 20) {
    id = TRINKET_SHARED;
    duration = _duration;
  }
};

class Potion : public Cooldown {

public:
  Potion(bool in_combat, double _duration = 60) {
    id = POTION;
    duration = in_combat ? 100000 : _duration;
  }
};

class Conjured : public Cooldown {

public:
  Conjured(double _duration = 120) {
    id = CONJURED;
    duration = _duration;
  }
};

class IcyVeins : public Cooldown {

public:
  IcyVeins() {
    id = ICY_VEINS;
    duration = 180;
  }
};

class ArcanePower : public Cooldown {

public:
  ArcanePower(double _duration = 120) {
    id = ARCANE_POWER;
    duration = _duration;
  }
};

class PresenceOfMind : public Cooldown {

public:
  PresenceOfMind() {
    id = PRESENCE_OF_MIND;
    duration = 120;
  }
};

class FireWard : public Cooldown {

public:
  FireWard() {
    id = FIRE_WARD;
    duration = 30;
  }
};

class MirrorImage : public Cooldown {

public:
  MirrorImage() {
    id = MIRROR_IMAGE;
    duration = 180;
  }
};

class MirrorFireBlast : public Cooldown {

public:
  MirrorFireBlast() {
    id = MIRROR_FIRE_BLAST;
    duration = 6;
  }
};

class FireBlast : public Cooldown {

public:
  FireBlast(int imp_fire_blast = 0) {
    id = FIRE_BLAST;
    duration = 8 - imp_fire_blast * 1.0;
  }
};

class ArcaneBarrage : public Cooldown {

public:
  ArcaneBarrage() {
    id = ARCANE_BARRAGE;
    duration = 3;
  }
};

class ConeOfCold : public Cooldown {

public:
  ConeOfCold() {
    id = CONE_OF_COLD;
    duration = 10;
  }
};

class DragonsBreath : public Cooldown {

public:
  DragonsBreath() {
    id = DRAGONS_BREATH;
    duration = 20;
  }
};

class BlastWave : public Cooldown {

public:
  BlastWave() {
    id = BLAST_WAVE;
    duration = 30;
  }
};

class Combustion : public Cooldown {

public:
  Combustion() {
    id = COMBUSTION;
    duration = 120;
  }
};

class FirePower : public Cooldown {

public:
  FirePower() {
    id = FIRE_POWER;
    duration = 60;
  }
};

class Berserking : public Cooldown {

public:
  Berserking() {
    id = BERSERKING;
    duration = 180;
  }
};

class ArcaneTorrent : public Cooldown {

public:
  ArcaneTorrent() {
    id = ARCANE_TORRENT;
    duration = 120;
  }
};

class ColdSnap : public Cooldown {

public:
  ColdSnap() {
    id = COLD_SNAP;
    duration = 480;
  }
};

class WaterElemental : public Cooldown {

public:
  WaterElemental() {
    id = WATER_ELEMENTAL;
    duration = 180;
  }
};

class DeepFreeze : public Cooldown {

public:
  DeepFreeze() {
    id = DEEP_FREEZE;
    duration = 30;
  }
};

class BrainFreeze : public Cooldown {

public:
  BrainFreeze() {
    id = BRAIN_FREEZE;
    duration = 2;
  }
};

class Evocation : public Cooldown {

public:
  Evocation() {
    id = EVOCATION;
    duration = 240;
  }
};

class PowerInfusion : public Cooldown {

public:
  PowerInfusion() {
    id = POWER_INFUSION;
    duration = 120;
  }
};

class BlackMagic : public Cooldown {

public:
  BlackMagic() {
    id = BLACK_MAGIC;
    duration = 35;
  }
};

class Lightweave : public Cooldown {

public:
  Lightweave() {
    id = LIGHTWEAVE;
    duration = 60;
  }
};

class Darkglow : public Cooldown {

public:
  Darkglow() {
    id = DARKGLOW;
    duration = 60;
  }
};

class HyperspeedAcceleration : public Cooldown {

public:
  HyperspeedAcceleration() {
    id = HYPERSPEED_ACCELERATION;
    duration = 60;
  }
};

class ManaGem : public Cooldown {

public:
  ManaGem() {
    id = MANA_GEM;
    duration = 120;
  }
};

class Praxis : public Cooldown {

public:
  Praxis() {
    id = PRAXIS;
    duration = 45;
  }
};

class SapperCharge : public Cooldown {

public:
  SapperCharge() {
    id = SAPPER_CHARGE;
    duration = 300;
  }
};

class AshenBand : public Cooldown {

public:
  AshenBand() {
    id = ASHEN_BAND;
    duration = 60;
  }
};

class NibelungHc : public Cooldown {

public:
  NibelungHc() {
    id = NIBELUNG_HC;
    duration = 0.25;
  }
};

class NibelungNm : public Cooldown {

public:
  NibelungNm() {
    id = NIBELUNG_NM;
    duration = 0.25;
  }
};

class ForgeEmber : public Cooldown {

public:
  ForgeEmber() {
    id = FORGE_EMBER;
    duration = 45;
  }
};

class PendulumTelluricCurrents : public Cooldown {

public:
  PendulumTelluricCurrents() {
    id = PENDULUM_TELLURIC_CURRENTS;
    duration = 45;
  }
};

class DarkmoonDeath : public Cooldown {

public:
  DarkmoonDeath() {
    id = DARKMOON_DEATH;
    duration = 45;
  }
};

class NowIsTheTime : public Cooldown {

public:
  NowIsTheTime() {
    id = NOW_IS_THE_TIME;
    duration = 45;
  }
};

class ElusivePower : public Cooldown {

public:
  ElusivePower() {
    id = ELUSIVE_POWER;
    duration = 45;
  }
};

class EmbraceSpider : public Cooldown {

public:
  EmbraceSpider() {
    id = EMBRACE_SPIDER;
    duration = 45;
  }
};

class DyingCurse : public Cooldown {

public:
  DyingCurse() {
    id = DYING_CURSE;
    duration = 45;
  }
};

class DyingCurseHM : public Cooldown {

public:
  DyingCurseHM() {
    id = DYING_CURSE_HM;
    duration = 45;
  }
};

class ExtractNecromanticPower : public Cooldown {

public:
  ExtractNecromanticPower() {
    id = EXTRACT_NECROMANTIC_POWER;
    duration = 15;
  }
};

class SoulDead : public Cooldown {

public:
  SoulDead() {
    id = SOUL_DEAD;
    duration = 45;
  }
};

class AlacrityElements : public Cooldown {

public:
  AlacrityElements() {
    id = ALACRITY_ELEMENTS;
    duration = 45;
  }
};

class MemoriesLove : public Cooldown {

public:
  MemoriesLove() {
    id = MEMORIES_LOVE;
    duration = 45;
  }
};

class FlareHeavens : public Cooldown {

public:
  FlareHeavens() {
    id = FLARE_HEAVENS;
    duration = 45;
  }
};

class ShowFaith : public Cooldown {

public:
  ShowFaith() {
    id = SHOW_FAITH;
    duration = 45;
  }
};

class PandorasPlea : public Cooldown {

public:
  PandorasPlea() {
    id = PANDORAS_PLEA;
    duration = 45;
  }
};

class ReignUnlivingHc : public Cooldown {

public:
  ReignUnlivingHc() {
    id = REIGN_UNLIVING_HC;
    duration = 2;
  }
};

class ReignUnlivingNm : public Cooldown {

public:
  ReignUnlivingNm() {
    id = REIGN_UNLIVING_NM;
    duration = 2;
  }
};

class DislodgedObjectHc : public Cooldown {

public:
  DislodgedObjectHc() {
    id = DISLODGED_OBJECT_HC;
    duration = 45;
  }
};

class DislodgedObjectNm : public Cooldown {

public:
  DislodgedObjectNm() {
    id = DISLODGED_OBJECT_NM;
    duration = 45;
  }
};

class NamelessLichHc : public Cooldown {

public:
  NamelessLichHc() {
    id = NAMELESS_LICH_HC;
    duration = 100;
  }
};

class NamelessLichNm : public Cooldown {

public:
  NamelessLichNm() {
    id = NAMELESS_LICH_NM;
    duration = 100;
  }
};

class CharredTwilightScaleHc : public Cooldown {

public:
  CharredTwilightScaleHc() {
    id = CHARRED_TWILIGHT_SCALE_HC;
    duration = 50;
  }
};

class CharredTwilightScaleNm : public Cooldown {

public:
  CharredTwilightScaleNm() {
    id = CHARRED_TWILIGHT_SCALE_NM;
    duration = 50;
  }
};


class PurifiedLunarDust : public Cooldown {

public:
  PurifiedLunarDust() {
    id = PURIFIED_LUNAR_DUST;
    duration = 50;
  }
};


// Sirus cooldowns
class Lightforged : public Cooldown {

public:
  Lightforged() {
    id = LIGHTFORGED;
    duration = 60;
  }
};

class BloodElfRace : public Cooldown {
public:
  BloodElfRace() {
    id = BLOOD_ELF_RACE;
    duration = 60;
  }
};

class ZandalariHaste : public Cooldown {
public:
  ZandalariHaste() {
    id = ZANDALARI_HASTE;
    duration = 60;
  }
};

class NeckAldors213 : public Cooldown {
public:
  NeckAldors213() {
    id = NECK_ALDORS_213;
    duration = 45;
  }
};

class NeckScryers213 : public Cooldown {
public:
  NeckScryers213() {
    id = NECK_SCRYERS_213;
    duration = 45;
  }
};

class NeckAldors232 : public Cooldown {
public:
  NeckAldors232() {
    id = NECK_ALDORS_232;
    duration = 45;
  }
};

class NeckScryers232 : public Cooldown {
public:
  NeckScryers232() {
    id = NECK_SCRYERS_232;
    duration = 45;
  }
};

class NeckAldors251 : public Cooldown {
public:
  NeckAldors251() {
    id = NECK_ALDORS_251;
    duration = 45;
  }
};

class NeckScryers251 : public Cooldown {
public:
  NeckScryers251() {
    id = NECK_SCRYERS_251;
    duration = 45;
  }
};

class NeckAldors264 : public Cooldown {
public:
  NeckAldors264() {
    id = NECK_ALDORS_264;
    duration = 45;
  }
};

class NeckScryers264 : public Cooldown {
public:
  NeckScryers264() {
    id = NECK_SCRYERS_264;
    duration = 45;
  }
};
}// namespace cooldown
