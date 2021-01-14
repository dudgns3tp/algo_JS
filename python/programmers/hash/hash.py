def solution(sentence):
    words = sentence.split(" ")
    words_dic = {}
    for word in words:
        words_dic[word] = words_dic.get(word, 0) + 1
    
    return sorted(words_dic.items(), key= lambda x: -x[1])[0][0]
