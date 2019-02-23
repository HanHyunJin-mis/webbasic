# 크롤링 - 웹 상에 데이터를 긁어모으는 작업
# 웹 스크랩핑 - http를 통해서 어떤 웹 자원에 접근, 여러가지 코드로 작성되어 있는 웹 페이지에 접근해 웹 자원을 가공하고 처리하는 과정
# konlpy나 Okt()등의 방법이 있음

# pip3 install requests - 웹 자원을 요청하기 위한 라이브러리
# pip3 install bs4 - 가지고 온 html 코드를 파싱하기 위한 라이브러리
#block-6351943 > div > div

import requests
from bs4 import BeautifulSoup as bs

URL = "https://online.fastcampus.co.kr/p/python2"

rq = requests.get(URL)

soup = bs(rq.content, 'html.parser')
print(soup)

# 선택한 웹의 모든 코드를 불러올 수 있음
