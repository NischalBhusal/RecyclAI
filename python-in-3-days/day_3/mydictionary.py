mydict = {"name": "Nischal", "age":"18", "city":"Kathmandu", "country":"Nepal"}
print(mydict)
print(type(mydict))
mydict["name"] = "Nischal Bhusal"
print(mydict)
for key in mydict:
    print(key, mydict[key])