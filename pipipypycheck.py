from tkinter import *
from tkinter import ttk

shkaf = [[]]
flag = False
a = 0

def fun(a):
    polka = Tk()
    polka.title('Полка' + str(a + 1))
    polka.geometry('600x300')
    for i in range(len(shkaf[a])):
        print(shkaf[a][i])
        btn = Button(polka, text=shkaf[a][i], relief=RIDGE)
        btn.grid(column=10, row=10)
        btn.place(relx= 0.5, rely=0.1 * i)

def btn_fun(a):
    global flag
    global shkaf
    if a == 1:
        print('1')
        shkaf = [[1, 2, 3], [4, 5], [6]]
    if a == 2:
        print('2')
        shkaf = [[11, 22], [444, 4, 44]]
    if a == 3:
        print('3')
        shkaf = [[3, 5]]
    flag=True
    window.destroy()

def new():
    global shkaf
    shkaf.append([])
    for i in range(len(shkaf)):
        btn_name = 'Полка' + str(i + 1)
        btn = Button(sklad, text=btn_name, relief=RIDGE, command=lambda i=i: fun(i))
        btn.grid(column=10, row=10)
        btn.place(relx= 0.1 * (i % 10), rely=0.09 * (i // 10))

if not flag:

    window = Tk()
    window.title('СКЛАДЫ')
    window.geometry('800x600')

    btn1 = Button(window, text='Склад 1', relief=RIDGE, command=lambda: btn_fun(1))
    btn1.grid(column=0, row=0)
    btn1.place(relx=0.25, rely=0.5)

    btn2 = Button(window, text='Склад 2', relief=RIDGE, command=lambda: btn_fun(2))
    btn2.grid(column=0, row=0)
    btn2.place(relx=0.5, rely=0.5)

    btn3 = Button(window, text='Склад 3', relief=RIDGE, command=lambda: btn_fun(3))
    btn3.grid(column=0, row=0)
    btn3.place(relx=0.75, rely=0.5)

    window.mainloop()

if flag:

    sklad = Tk()
    sklad.title('Склад' + str(a))
    sklad.geometry('800x600')
    sklad.size()
    for i in range(len(shkaf)):
        btn_name = 'Полка' + str(i + 1)
        btn = Button(sklad, text=btn_name, relief=RIDGE, command=lambda i=i: fun(i))
        btn.grid(column=10, row=10)
        btn.place(relx= 0.1 * (i % 10), rely=0.09 * (i // 10))

        new = Button(sklad, text='Добавить кнопку', relief=RIDGE, command=new)
        new.grid(column=10, row=10)
        new.place(relx=0.85, rely=0.95)

    sklad.mainloop()
    