# [PSRiot-Question-Submission-Template](https://github.com/Team-SakuraDev/PSRiot-Question-Submission-Template)



해당 템플릿은 PSRiot 서비스에서 사용될 알고리즘 문제 입니다.

문제을 작성하기 앞써 아래와 같이 구성되어있습니다.



```
├── README.md
├── node.js
├── question
│   ├── Question.md
│   └── question_test.json
└── test_src
    ├── golang.go
    ├── node.js
    └── python.py
```



**/question**

해당 폴더는 문제 서식과 문제 테스트 결과, 문제 런타임을 저장하는 폴더입니다.



**/test_src**

해당 폴더는 문제 답안을 저장하는 폴더 입니다.



해당 서비스에서 가지고가는 파일은 **/question/Question.md**, **/question/question_test.json** 입니다.

기타 프로그래밍 언어, 문제출제자에 따라서 가지고 가는 파일이 달라질수있습니다.