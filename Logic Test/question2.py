str="hello my name is"
##For total no of occurence of an element
p=set(str)
p.remove(" ")
for i in p:
    count=0
    for j in str:
        if i is j:
            count+=1
    print("{} occurs {} times".format(i,count))
##Total no of alphabets and number
c1=0
c2=0
for i in str:
    if i is not " ":
        if i.isdigit():
            c1+=1
        else:
            c2+=1
print("Total no of Numbers: {}\nTotal no of alphabets: {}".format(c1,c2)) 