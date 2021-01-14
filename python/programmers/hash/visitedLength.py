def reverse_point(points):
    return (points[2], points[3], points[0], points[1])

def solution(dirs):
    dirs_dic = {'L': (-1, 0), 'R': (1, 0), 'U': (0, 1), 'D': (0, -1)}
    LIMIT_X, LIMIT_Y = 0, 1
    progress_xy = {}
    point = (0, 0)
    for dir in dirs:
        x, y = dirs_dic.get(dir)
        current_point = (*point, point[0] + x, point[1] + y)
        if abs(current_point[LIMIT_X] + x) <= 5  and abs(current_point[LIMIT_Y] + y) <= 5:
            progress_xy[current_point] = progress_xy.get(current_point, 0) + 1
            if progress_xy.get(reverse_point(current_point)):
                del progress_xy[current_point]
                progress_xy[reverse_point(current_point)] = progress_xy.get(reverse_point(current_point)) + 1                
            point = (point[0] + x, point[1] + y)

    return len(progress_xy)