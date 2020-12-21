def solution(st):
    st.strip()
    arr = []
    s = st.split(" ")
    for i in range(len(s)):
      s2 = list(s[i])
      for j in range(len(s2)):
        if ((j) % 2 == 0) & s2[j].isalpha() :
          arr.append(s2[j].upper())
        elif ((j) % 2 == 1) & s2[j].isalpha():
          arr.append(s2[j].lower())  
        else: 
          arr.append(s2[j])
      if len(s2) > 0 :
        arr.append(" ")
    return ("".join(arr)).strip()

print(solution("H11lo 안녕 eVeryone"))

print("".isalpha())
