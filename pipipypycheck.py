from tkinter import * 
 
shkaf = 0
global flag
flag = False 
a = 0 
 
def btn_fun(): 
    if a == 1: 
        shkaf = 3 
    if a == 2: 
        shkaf = 2 
    if a == 3: 
        shkaf = 1 
    flag = True 
    print(flag)
    window.destroy() 
    
if not flag: 
 
    window = Tk() 
    window.title('СКЛАДЫ') 
    window.geometry('800x600') 
    
    btn1 = Button(window, text='Склад 1', relief=RIDGE, command=lambda:btn_fun(1)) 
    btn1.grid(column=0, row=0) 
    btn1.place(relx=0.25, rely=0.5) 
    
    btn2 = Button(window, text='Склад 2', relief=RIDGE, command=btn_fun) 
    btn2.grid(column=0, row=0) 
    btn2.place(relx=0.5, rely=0.5) 
    
    btn3 = Button(window, text='Склад 3', relief=RIDGE, command=btn_fun) 
    btn3.grid(column=0, row=0) 
    btn3.place(relx=0.75, rely=0.5) 
    
    window.mainloop() 


if flag: 
 
    sklad = Tk() 
    sklad.title('Склад' + str(a)) 
    sklad.geometry('800x600') 
    
    # for i in range(shkaf): 
    # btn_name = 'btn' + str(i + 1) 
    # btn = Button(sklad, text = btn_name,relief=RIDGE) 
    # btn.grid(column=0, row=0) 
    # btn.place(relx= 0.2 * i, rely=0.2) 
    
    sklad.mainloop()