import json
from collections import defaultdict

data = json.load(open('data/resources.json', encoding='utf-8'))
entries = data['resources']
cats = defaultdict(int)
for r in entries:
    c = r.get('category', '') + '/' + r.get('subcategory', '')
    cats[c] += 1

print(f"Total entries: {len(entries)}")
for k in sorted(cats.keys()):
    print(f"  {k}: {cats[k]}")
