# 파이썬 말뭉치(corpus) 다루기
# 말뭉치 - 자연어 처리를 위한 분류된 언어의 표본집합
# pip install konlpy - 한국어 말뭉치 처리를 위한 패키지 모음

# Okt (open korean text) 주요 메소드
# pos (문자열, 품사)를 튜플로 반환
# nouns 문자열의 명사 리스트로 반환

from konlpy.tag import Okt

ok = Okt()
# test = "안녕하세요. 저는 한현진입니다. #패스트 캠퍼스 #패캠 #인강"

# # for i in ok.pos(test, norm=True):
# #     print(i)

# for i in ok.pos(test):
#     if i[1] == 'Hashtag':
#         print(i)

# 리스트로 반환
test = "패스트캠퍼스 패캠 문성재 코딩 프로그래밍"
for i in ok.nouns(test):
    print(i)