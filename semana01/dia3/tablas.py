from tabulate import tabulate

tabla = [
    ["cesar mayta","cesarmayta@gmail.com","897987989"],
    ["carlos perez","carlosperez@hotmail.com","8979879"]
]

columnas = ["nombre","email","celular"]

print(tabulate(tabla,headers=columnas,tablefmt="grid"))