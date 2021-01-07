class MyStack(object):
    def __init__(self):
        self.lst = list()

    def push(self, x):
        self.lst.append(x)

    def pop(self):
        return self.lst.pop()

    def size(self):
        return len(self.lst)

class MyQueue(object):
    def __init__(self, max_size):
        self.stack1 = MyStack()
        self.stack2 = MyStack()
        self.max_size = max_size

    def qsize(self):
        return self.stack1.size()

    def push(self, item):
        # 구현하세요
        if self.stack1.size() == self.max_size:
            return False
        self.stack1.push(item)
        return True

    def pop(self):
        if self.qsize() == 0:
          return False
        if self.qsize() == 1:
          return self.stack1.pop()
        while self.qsize() != 1:
          self.stack2.push(self.stack1.pop())
        item = self.stack1.pop()

        while self.stack2.size():
          self.stack1.push(self.stack2.pop())
        return item

