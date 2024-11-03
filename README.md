# 미션 - 로또

## 📕 목차

- [1. 목표](#-목표)
- [2. 프로젝트 설명](#-프로젝트-설명)
- [3. 입출력 예시](#-입출력-예시)
- [4. 실행 결과 예시](#-실행-결과-예시)
- [5. 기능 구현](#-기능-구현)
- [6. 실행 가이드](#-실행-가이드)

## 🎯 목표

- 크게 아래 세가지를 집중하여 학습한다.

```
  1. 관련 함수별 클래스 분리
  2. 테스트(단위 테스트, 모킹)
  3. 리드미 작성
```

- [프로젝트 설명](#-프로젝트-설명)과 [실행 결과 예시](#-실행-결과-예시)에 만족하는 동작을 구현한다.
- 2주 차 공통 피드백을 최대한 반영한다.
- 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 한다.
- 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는 영역을 확보한다.

## 🧾 프로젝트 설명

아래 조건을 만족하는 간단한 `로또 발매기`이다.

```
* 로또 번호의 숫자 범위는 1~45까지이다.
* 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
* 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
* 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  1등: 6개 번호 일치 / 2,000,000,000원
  2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  3등: 5개 번호 일치 / 1,500,000원
  4등: 4개 번호 일치 / 50,000원
  5등: 3개 번호 일치 / 5,000원
```

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

## 💻 입출력 예시

### 입력

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

  ```
  14000
  ```

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

  ```
  1,2,3,4,5,6
  ```

- 보너스 번호를 입력 받는다.

  ```
  7
  ```

### 출력

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

  ```
  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]
  ```

- 당첨 내역을 출력한다.

  ```
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```

- 최종적으로 수익률을 출력한다.
- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

  ```
  총 수익률은 62.5%입니다.
  ```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

  ```
  [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
  ```

## 🚀 실행 결과 예시

```
실행 결과 예시
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

## 🔨 기능 구현

1. 사용자 입력 기능

```
  - 사용자로부터 입력 받을 수 있는 기능
```

2. 로또 개수 계산

```
  - 사용자가 입력한 구입금액을 기준으로 로또 개수 계산
```

3. 출력 기능 구현

```
  - 로또 번호, 당첨 번호, 보너스 번호, 당첨 통계 출력 기능
```

4. 로또 번호 랜덤 설정

```
  - 1개의 로또를 발행할 때, 중복되지 않는 6개의 숫자를 랜덤으로 설정.
```

5. 당첨 통계 계산

```
  - 각 등수별 로또 당첨 개수 계산
```

6. 총 수익률 계산

```
  - 당첨된 로또의 총 수익률 계산
  - 수익률은 소수점 둘째 자리에서 반올림 (ex. 100.0%, 51.5%, 1,000,000.0%)
```

7. 예외 처리

```
  - 구입금액이 1,000원으로 나누어 떨어지지 않는 경우
  - 구입금액에 문자가 입력된 경우
  - 최대 구입한도(10만원) 이상 입력된 경우
  - 당첨 번호 입력시 구분자로 ','가 아닌 다른 문자가 입력된 경우
  - 당첨 번호 입력이 1~45까지 범위가 아닌 경우
  - 당첨 번호로 6자리 미만이거나 초과하여 입력한 경우
  - 보너스 번호 입력이 1~45까지 범위가 아닌 경우
  - 보너스 번호 입력이 당첨 번호와 중복된 경우
```

## 🏃‍♂️ 실행 가이드

### 실행 환경

```
- Node.js 버전 : 20.17.0
- npm 버전 : 10.8.2
- jest 버전 : 29.6.0
```

### 실행 순서

1. git clone

- 터미널에서 아래 명령어를 입력해 프로젝트를 clone 한다.

```
  git clone https://github.com/lurgi/javascript-lotto-6.git
```

2. 폴더 이동

- 터미널에서 아래 명령어를 입력해 프로젝트 폴더로 경로를 이동 시킨다.

```
  cd javascript-lotto-6.git
```

3. 라이브러리 설치

- 터미널에서 아래 명령어를 입력해 실행에 필요한 라이브러리들을 설치한다.

```
  npm install
```

4. 실행

- 터미널에서 아래 명령어를 입력해 실행한다.

```
  npm run start
  npm run test
```
