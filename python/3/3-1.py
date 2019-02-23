class User():
    species = "영장류"

    def __init__(self, name, gender, city):
        self.name = name
        self.gender = gender
        self.city = city

    def get_user_info(self):
        return "이름은: " + self.name + "\n성별: " + self.gender +  "\n사는 곳: " + self.city

    def get_species(cls):
        return "사람은 모두 " + cls.species + "입니다."

user = User("한현진", "여성", "울산")
print(user.get_user_info())
print(user.get_species())
