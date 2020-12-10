def reverseWord(st):
    a=st.split(" ")
    temp1=[]
    for i in a:
        temp1.append(i[::-1])
    return " ".join(temp1)
print(reverseWord("Enter the string"))    