from random import randint

def enter_list(num):
    lista = []
    for item in range(0,num):
        print(f"enter the value uumber {item+1}")
        lista.append(int(input()))
    return lista

ran_list = [randint(0, 1000), randint(0, 1000), randint(0, 1000)]

def compare():
    my_list = enter_list(3)
    y = '0'
    for items in range(0, 3):
        for i in range(0, 3):
            if my_list[items] == ran_list[i] and items == i:
                print("match")
                return 0
            elif my_list[items] == ran_list[i]:
                y = 'close'
                continue
            elif y == '0':
                y = 'nope'

    print(y)

cont = "y"
while cont == 'y' or cont == 'Y':
    compare()
    cont = input("do you want another trial ? [y/n]")
