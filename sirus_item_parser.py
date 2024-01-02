import sys
import requests
import argparse
import pprint
import re
import json

stamina_type = 7
int_type = 5
haste_type = 36
hit_type = 31
sp_type = 45
crit_type = 32
spi_type = 6
type_to_name = {stamina_type: "st", int_type: "int", haste_type: "haste", hit_type: "hit", sp_type: "sp",
                crit_type: "crit", spi_type: "spi", 0:"dump"}


def getItem(item_id):
    url = "https://sirus.su/api/base/item/" + item_id
    response = requests.get(url, timeout=0.1)  # don't ban me please :D
    if response.status_code != 200:
        print("Error for " + item_id + " - http code: " + response.status_code)
        return None
    data = response.json()["tooltip"]
    stats = {}

    stats["id"] = int(item_id)
    stats["name"] = data["name"]
    stats["ilvl"] = data["item_level"]

    stats[type_to_name[data["stat_type1"]]] = data["stat_value1"]
    stats[type_to_name[data["stat_type2"]]] = data["stat_value2"]
    stats[type_to_name[data["stat_type3"]]] = data["stat_value3"]
    stats[type_to_name[data["stat_type4"]]] = data["stat_value4"]
    stats[type_to_name[data["stat_type5"]]] = data["stat_value5"]
    stats[type_to_name[data["stat_type6"]]] = data["stat_value6"]
    stats[type_to_name[data["stat_type7"]]] = data["stat_value7"]
    stats[type_to_name[data["stat_type8"]]] = data["stat_value8"]
    stats[type_to_name[data["stat_type9"]]] = data["stat_value9"]
    stats[type_to_name[data["stat_type10"]]] = data["stat_value10"]

    stats.pop("dump")

    if (data["socket_bonus_ench"] != None):
        socket_bonus = data["socket_bonus_ench"]["name"]
        value, type = socket_bonus.split(" к ")
        value = value[1:]
        if (type == "рейтингу меткости"):
            stats["bonus"] = {"hit", int(value)}
        elif (type == "интеллекту"):
            stats["bonus"] = {"int", int(value)}
        elif (type == "рейтингу скорости"):
            stats["bonus"] = {"haste", int(value)}
        elif (type == "рейтингу критического удара"):
            stats["bonus"] = {"crit", int(value)}
        elif (type == "силе заклинаниям"):
            stats["bonus"] = {"sp", int(value)}  # TODO: добавить мп5 слишком ща впадлу

    stats["unique"] = data["is_unique"]
    return stats


itemid = input()
print(getItem(itemid))
