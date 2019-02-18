# 모듈 - 파이썬 코드를 하나로 묶어서 사용
# import 모듈명
# import sub

# print(sub.sum(1, 1))

# from sub import sum
# print(sum(1,2))

# sum을 s라고 부를 것이다 라는 말
# from sub import sum as s
# print(s(1,2))

# 패키지 - 여러 모듈들의 집합
# from 패키지명 import 모듈

# from package import pck
# print(pck.sum(1,2))

from package import pck as p
print(p.sum(1,2))

# from package\sub import user