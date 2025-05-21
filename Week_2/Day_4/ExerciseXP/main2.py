# Exercise 1

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

data["company"]["employee"]["birth_date"] = "1993-10-18"

with open("updated_employee.json", "w") as f:
    json.dump(data, f, indent=4)

print("The birth_date has been added and saved to 'updated_employee.json'")
