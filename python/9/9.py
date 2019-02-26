# 예외 처리 - 프로그램 오류를 핸들링 하는 방법
# 모든 오류를 다 핸들링 할 수 없기 때문에 하나만 예외처리를 하는 경우

# 예외 - 1. 문법 에러  
#       2. 예외 - 문법은 괜찮지만 실행 중에 발생하는 에러
print("여기까지는 오류 없음!")
def sum(x, y):
    return x + y

print(sum(1, 2))

# try 구문 - 에러 가능성이 존재하는 코드
# except 구문 - 예외 발생시 실행 코드
# finally - 예외가 발생하더라도 무조건 실행되어야 하는 코드

test = [1, 2, 3]
try :
    print(test[3])
except:
    print("인덱스 에러 발생!")
finally:
    print("무조건 실행되는 코드!")

# 오류가 발생했을 때도 코드가 끊기지 않게 된다.

# 예외를 만들 수도 있음 - raise(에러 생성을 위한 구문) Exception("예외")

test2 = 10
if test2 == 10:
    raise Exception("test is 10.")
