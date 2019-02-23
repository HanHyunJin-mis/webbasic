# 파이썬 컬렉션
# x = 10
# y = 10.1
# z = "문자열"
# isBool = True
# isNone = None

num_list = [1, 2, 3, 4, 5]
#인덱싱 0부터 시작
print(num_list[0], num_list[-1])

# num_list에 있는 것들을 자동으로 하나씩 꺼내서 i에 할당
# in 연산자는 for문을 통해 조건에 맞는 값을 하나씩 반환한다.
for i in num_list:
    print(i)

# 슬라이싱 (범위) 시작 : 끝-1
print(num_list[0:3])
print(num_list[1:])

# 리스트 추가
num_list.append(6)
num_list.append(7)

print(num_list)

# 리스트 삭제
del num_list[len(num_list)-1]
print(num_list)

# 리스트 수정
num_list[0] = 0
print(num_list)

# dictionary collection / k는 key v는 value
num_dict = {"p" : "park", "g" : "gyu"}
print(num_dict["p"])

for k, v in num_dict.items():
    print(k, v)

num_dict["j"] = "jeong"
print(num_dict)

del num_dict["p"]
print(num_dict)


