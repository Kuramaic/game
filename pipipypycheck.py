from tkinter import * 
 
shkaf = 0

flag = False 
a = 1 
 
def btn_fun(a):
    global flag 
    global shkaf
    flag=True
    window.destroy() 

def btn_fin1():
    global flag
    flag=True
    sklad.destroy()

def btn_fin2():
    global flag
    flag=True
    prolet.destroy()

def btn_fin3():
    global flag
    flag=True
    polka.destroy()





    
if not flag: 
 
    window = Tk() 
    window.title('СКЛАДЫ') 
    window.geometry('1000x1000') 
    
    btn1 = Button(window, text='Склад 1', relief=RIDGE, command=lambda:btn_fun(1)) 
    btn1.grid(column=0, row=0) 
    btn1.place(relx=0.25, rely=0.5) 
    
    btn2 = Button(window, text='Склад 2', relief=RIDGE, command=lambda:btn_fun(2)) 
    btn2.grid(column=0, row=0) 
    btn2.place(relx=0.5, rely=0.5) 
    
    btn3 = Button(window, text='Склад 3', relief=RIDGE, command=lambda:btn_fun(3)) 
    btn3.grid(column=0, row=0) 
    btn3.place(relx=0.75, rely=0.5) 
    
    window.mainloop() 


if flag: 
 
    sklad = Tk() 
    sklad.title('Склад ' + str(a)) 
    sklad.geometry('1000x1000') 
    flag=False
    for i in range(4): 
        btn_name = 'Пролёт ' + str(i + 1) 
        btn = Button(sklad, text = btn_name,relief=RIDGE, command=btn_fin1) 
        btn.grid(column=0, row=0) 
        btn.place(relx= 0.2 * i, rely=0.2) 
    
    sklad.mainloop()



if flag: 
 
    prolet = Tk() 
    prolet.title('Пролёт ' + str(a)) 
    prolet.geometry('1000x1000') 
    flag=False
    for i in range(4): 
        btn_name = 'Полка ' + str(i + 1) 
        btn = Button(prolet, text = btn_name,relief=RIDGE, command=btn_fin2) 
        btn.grid(column=0, row=0) 
        btn.place(relx= 0.2 * i, rely=0.2) 
    
    prolet.mainloop()

if flag: 
 
    polka = Tk() 
    polka.title('Полка ' + str(a)) 
    polka.geometry('1000x1000') 
    flag=False
    for i in range(4): 
        btn_name = 'Ячейка ' + str(i + 1) 
        btn = Button(polka, text = btn_name,relief=RIDGE, command=btn_fin3) 
        btn.grid(column=0, row=0) 
        btn.place(relx= 0.2 * i, rely=0.2) 
    
    polka.mainloop()


if flag: 
 
    yacheika = Tk() 
    yacheika.title('Ячейка ' + str(a)) 
    yacheika.geometry('1000x1000') 
    flag=False







    yacheika.mainloop()