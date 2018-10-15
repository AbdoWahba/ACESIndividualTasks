from random import randint

ran_list = [randint(0, 1000), randint(0, 1000), randint(0, 1000)]
print(ran_list)
my_list = []
cont = 'y'

while cont == 'y' or cont == 'Y':
    for items in range(0, 3):
        x = input(f"enter number {items+1}: ")
        x = int(x)
        my_list.append(x)

    print(my_list)

    y = '0'
    for items in range(0, 3):
        if y == 'match':
            break
        for i in range(0, 3):
            if my_list[items] == ran_list[i] and items == i:
                y = 'match'
                break
            elif my_list[items] == ran_list[i]:
                y = 'close'
                continue
            elif y == 0:
                y = 'nope'

    print(y)
    my_list.clear()
    cont = input("do you want another trial ? [y/n]")
