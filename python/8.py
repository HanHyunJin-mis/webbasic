# 함수 - 특별한 역할을 수행하기 위한 코드블록, 논리적인 흐름을 하나로 묶음

# test는 기본값
def sum(x, y, test = 1):
    return x + y + test

x = 1
y = 1
print(sum(x, y, 0))


# 가변인자 - 값이 몇개가 들어오든 해석할 수 있음
def sum2(x, *y):
    sum_list = []
    for i in y:
        sum_list.append(i)
    print(sum_list)

sum2(1, 1, 2, 3, 4, 5)

def sum3(x, *y):
    result = 0
    for i in y:
        result += i
    print(x + result)

sum3(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# 별칭인자 - 실행코드에서 사용되는 매개변수를 별칭을 붙이고 별칭으로 호출
def sum4(one, two):
    return one + two

print(sum4(one = 1, two = 1))

# 다중 반환 값
# return 값에서 여러개를 반환하는 것 (python의 특성, 대부분이 그렇지 않음)
# 반환 값의 순서에 유의!