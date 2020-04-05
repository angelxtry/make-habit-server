# make-habit-server

습관을 만들고 지속하자.

습관 형성 웹 앱.

## 목표

- type을 철저히
- GraphQL schema와 resolver 작성을 꼼곰하게
- 의미있는 git log를 남기자.
- 배포하자. front 작업은 배포된 서버를 이용하자.
- TDD!

## Todo

- [v] User entity 생성
- [v] User Email SignUp schema 작성
- [v] User Email SignUp resolver 작성
- [v] Authentication 추가
- [v] User schema 생성
- [v] Habit entity, schema 생성
- [v] Record entity, schema 생성
- [v] Habit CreateHabit schema, resolver 작성
- [v] Habit GetHabits schema, resolver 작성
- [v] Habit UpdateHabits schema, resolver 작성
- [v] User Email SignIn schema 작성
- [v] User Email SignIn resolver 작성
- [v] Record GetRecords schema, resolver 작성
- [v] Record CreateRecord schema, resolver 작성

- [ ] Jest setting
- [ ] User Email SignUp test 작성
- [ ] User Email Verification schema 작성
- [ ] User Email Verification test 작성
- [ ] User Email Verification resolver 작성
- [ ] User Email SignIn test 작성
- [ ] User MyProfile schema 작성
- [ ] User MyProfile test 작성
- [ ] User MyProfile resolver 작성
- [ ] User UpadteProfile schema 작성
- [ ] User UpadteProfile test 작성
- [ ] User UpadteProfile resolver 작성

---

- [ ] Habit DeleteHabits schema 작성

---

## history

- 2020-03-20 start, 기본 설정
- 2020-03-21 User EmailSignUp schema, resolver 작성
- 2020-03-26
  - Authentication 로직 추가
  - User, Habit, Record entity, schema 생성
  - CreateHabit schema, resolver 추가
- 2020-03-27
  - GetHabits, UpdateHabit schema, resolver 작성
- 2020-04-01
  - EmailSignin schema, resolver 작성
  - GetHabit schema, resolver 작성
- 2020-04-03
  - UpdateHabit, CreateHabit 수정
  - DeleteHabit 작성
- 2020-04-05
  - GetRecords, CreateRecord 작성
  - Record entity에서 title 항목 제거 및 multi column unique index 추가

## 관련 글

- [Express Request 확장하기(TypeScript)](https://blog.doitreviews.com/development/2020-03-26-extend-express-request-type-in-typescript/)
- [Path alias를 사용하여 TypeScript import 경로 깔끔하게 만들기](https://blog.doitreviews.com/development/2020-03-04-using-path-alias-in-typescript/)
- [Path alias를 사용하여 TypeScript import 경로 깔끔하게 만들기 2](https://blog.doitreviews.com/development/2020-03-26-using-path-alias-in-typescript-2/)
