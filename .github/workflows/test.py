import sys
import requests
import os
import json

url = "https://api.github.com/repos/s2technologies/testspace.test.man.repo/dispatches"

headers = {
    'Content-Type': "application/json",
    'Accept': "application/vnd.github.everest-preview+json",
  }

# using dispatch access token from Personal access tokes: "dispatch"
gh_token = os.getenv('GH_Admin')

input = {
  "event_type": "dispatch",
  "client_payload": {"repo-name": "default", "param2": "tbd"}
}

def main():
  global input

  payload = json.dumps(input)
  querystring = {"access_token":gh_token}

  response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
  print(response.status_code)

if __name__ == "__main__":  # pragma: no cover
    main()
