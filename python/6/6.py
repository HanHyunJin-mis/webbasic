# 컬렉션 (set_tuple) - ( )나 ,로 구분할 수 있다. 요소가 하나일 경우에는 ,붙여주기
# 불변의 타입
num_tuple = (1, 2, 3)
# 삭제가 안됨
# num_tuple[0] = 0
# del numtuple[0]
print(num_tuple) 

# set 집합 (순서를 갖지 않음, 인덱싱, 슬라이스 불가)

num_set = {1, 1, 2, 2, 3}
num_set.add(4)
print(num_set)

set1 = {1, 2, 3, 4}
set2 = {1, 2, 3, 5}

# 교집합
print(set1 & set2)
# 합집합
print(set1 | set2)
# 차집합
print(set1 - set2)
# 대칭차집합
print(set1 ^ set2)

test_list = [1, 2, 3, 1, 2, 3]
sub_list = [1, 2, 4]
print(test_list + sub_list)
print(test_list * 2)

# 생성자
# list(), dict(), set(), tuple()
# list를 set의 특징으로 변환
# 중복을 없애고 싶을 때 list -> set
print(set(test_list))
