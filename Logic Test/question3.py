list1 = ["[","{","("] 
list2 = ["]","}",")"]  
def perenOrder(st): 
    temp = [] 
    for i in st: 
        if i in list1: 
            temp.append(i) 
        elif i in list2: 
            a = list2.index(i) 
            if ((len(temp) > 0) and
                (list1[a] == temp[len(temp)-1])): 
                temp.pop() 
            else: 
                return False
    if len(temp) == 0: 
        return True
    else: 
        return False  
perenOrder("[[{}]]") 