import json

import sirus_item_parser
import requests

def getItemsFromChar(realm_id, char_id):
    url = "https://sirus.su/api/characters/" + realm_id + "/" + char_id
    response = requests.get(url, timeout=1)  # don't ban me please :D
    if response.status_code != 200:
        print("Error for " + realm_id + ", " + char_id + " - http code: " + response.status_code)
        return None
    print(json.dumps(response.json(), indent=2))
    return None

getItemsFromChar("42", "58105")