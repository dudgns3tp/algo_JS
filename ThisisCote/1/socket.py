import socket
import time

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
address = ("localhost", 5000)  # ''=임의 주소, 포트 번호=5000
s.bind(address)
s.listen(5)
userCnt = 0
while True:
    client, addr = s.accept()
    print("Connection requested from ", addr)
    userCnt += 1
    print("당신은", userCnt, "번째 접속입니다")
    client.send(time.ctime(time.time()).encode())
    if client.close():
        print("나갔습니다.")
        userCnt -= 1
