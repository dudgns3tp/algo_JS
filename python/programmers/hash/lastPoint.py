def solution(v):
    x_dic, y_dic = {}, {}
    for x, y in v:
        x_dic[x] = x_dic.get(x, 0) + 1
        y_dic[y] = y_dic.get(y, 0) + 1
    x = sorted(x_dic.items(), key=lambda x: x[1])[0][0]
    y = sorted(y_dic.items(), key=lambda x: x[1])[0][0]

    return [x, y]
\