import pandas as pd 
import json 


structured_field_data = [
    {"name": "Affiliation", "category": "affiliation"},
    {"name": "Scope from our taxonomy", "category": "Taxonomy"},
    {"name": "Context", "category": "Field"},
#    {"name": "Form", "category": "Scope from our taxonomy"},
#    {"name": "Quality", "category": "Scope from our taxonomy"},
#    {"name": "Other", "category": "Scope from our taxonomy"},
#    {"name": "Professional", "category": "Context"},
#    {"name": "Educational", "category": "Context"},
]


df = pd.read_csv("In-IDE_HAX.csv")

necessary_fields = ['Paper', 'DOI', 'Date']
other_fields = [ele for ele in df.columns if ele not in necessary_fields]

for field in other_fields:
    df[field] = df[field].apply(lambda x: [ele.strip() for ele in x.split(",")] if isinstance(x, str) else [])

for field in structured_field_data:
    all_values = list(set(sum(df[field['name']].dropna().tolist(), [])))
    field['values'] = [{"value": ele, "label": ele} for ele in all_values]

df['ID'] = [f"{i}" for i in range(len(df))]
df.to_json("../src/app/in-ide-review/papers/papers.json", orient="records", indent=4)

with open("../src/app/in-ide-review/papers/structured_fields.json", "w") as f:
    json.dump(structured_field_data, f, indent=4)