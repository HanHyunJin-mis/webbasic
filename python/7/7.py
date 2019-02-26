# 문자열 객체
# 자연어(사람이 사용하는 언어)
# 문자열 포멧팅 - 원하는 스타일로 문자열을 만들어내는 것

# test1 = "Life is too short, %s"
# result1 = test1 % "You need python."


test1 = "Life is too short, %s %s %s"
# 값이 여러개일 경우에는 tuple 형식으로 나타냄
result1 = test1 % ("You",  "need",  "python.")
print(result1)

# 숫자형인데 문자형을 지정해주면 error가 나지만 문자형을 입력받을 때 숫자를 넣는 것은 상관없다.
test2 = "Life is too short, %d"
result2 = test2 % 10
print(result2)

test3 = "Life is too short, %.2f"
result3 = test3 % 100
print(result3)

# fornat 함수는 문자 자체를 뽑아냄
# 지시어를 사용하지 않더라도 지정한 형태로 출력된다.
test4 = "Life is too short, {} {} {}"
result4 = test4.format("You", "need", "python")
print(result4)

test5 = "\"Life is too short,\" \n\" You need python.\""
print(test5)
