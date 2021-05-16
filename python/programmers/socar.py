from collections import defaultdict


class Graph():
    def __init__(self):
        self.edges = defaultdict(list)
        self.distance = {}
        self.weights = {}
    
    def add_edge(self, from_node, to_node, distance, weight):
        self.edges[from_node].append(to_node)
        self.weights[(from_node, to_node)] = weight
        self.weights[(to_node, from_node)] = weight
        self.distance[(from_node, to_node)] = distance
        self.distance[(to_node, from_node)] = distance

def dijsktra(graph, initial, end):
    answer = 0
    # shortest paths is a dict of nodes
    # whose value is a tuple of (previous node, weight)
    shortest_paths = {initial: (None, 0)}
    current_node = initial # 시작점 노드를 현재 노드로 추가한다.
    visited = set() # 방문한 노드들을 추가한다.
    while current_node != end:
        visited.add(current_node) # 현재 노드를 방문한다.
        destinations = graph.edges[current_node] # 인접한 노드를 살펴본다.
        weight_to_current_node = shortest_paths[current_node][1] # 현재 방문 중인 노드의 weight 

        for next_node in destinations: # 인접한 노드 모두를 살펴본다.
            # 현재 노드(current_node)와 인접한 노드(next_node)가 연결된 edge의 weight + 현재 weight
            weight = graph.weights[(current_node, next_node)] + weight_to_current_node 
            if next_node not in shortest_paths: # shortest path에 없다면 현재를 추가한다.
                shortest_paths[next_node] = (current_node, weight)
            else: # 현재 shortest path에 있다면 
                current_shortest_weight = shortest_paths[next_node][1]
                if current_shortest_weight > weight: # 현재 weight가 적다면 업데이트 한다.
                    shortest_paths[next_node] = (current_node, weight)
        # 다음으로 이동할 node는 shortest path에서 아직 방문하지 않은 node로 이동한다.
        next_destinations = {node: shortest_paths[node] for node in shortest_paths if node not in visited}
        if not next_destinations:
            return "Route Not Possible"
        # weight가 가장 적은 노드로 이동한다.
        current_node = min(next_destinations, key=lambda k: next_destinations[k][1])
    
    destination_node = current_node # 현재 current_node는 destination node이다.
    # destination에서 source로 이동하면서 node를 추가한다.
    path = []
    while destination_node is not None: # 시작 노드로 올 때 까지 반복한다.
        path.append(destination_node)
        next_node = shortest_paths[destination_node][0] # 다음 노드를 고른다.
        # print("next", next_node)
        destination_node = next_node # destination_node를 다음 노드로 설정하면서
        answer += 1
    path = path[::-1] # 리스트를 반대로 정렬한다.
    return answer

edges = [[1,2,3,2],[1,3,2,2],[2,4,1,1],[2,5,4,1],[3,5,2,3],[4,5,2,1]]
graph = Graph()
for edge in edges:
    graph.add_edge(*edge)
print(dijsktra(graph, 1, 5))