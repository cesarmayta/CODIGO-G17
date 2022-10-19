dias = ("lunes","martes","miercoles")

print(dias)
dias = list(dias)
print(dias)
dias.append("Jueves")
dias = tuple(dias)
print(dias)
#dias.append("jueves")

for dia in dias:
    print(dia)