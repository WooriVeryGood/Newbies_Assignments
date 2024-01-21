# Newbies_Assignments
2023-2024학년도 겨울방학 신입들의 과제 저장소입니다.

## :people_hugging: Authors
<table>
<tr height="150px">
    <td align="center">
    <a href="https://github.com/sanwooo"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/79380206?v=4"/></a>
    <br />
    <a href="https://github.com/sanwooo">이산우 </a>
    </td>
    <td align="center">
    <a href="https://github.com/ttodll"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/123301277?v=4"/></a>
    <br />
    <a href="https://github.com/ttodll">임도현 </a>
    </td>
    <td align="center">
    <a href="https://github.com/mingdae"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/103407209?v=4"/></a>
    <br />
    <a href="https://github.com/mingdae">오민재 </a>
    </td>
  </tr>
</table>
미래엔 풀스택 웹서비스를 공장처럼 찍어낼 실력을 가질 귀여운 뉴비들입니다.
<br></br>

## 커밋하는 법
### 1. Repo 클론해오기
![Screenshot](/pics/step1.png)
본인의 PC에서 작업할 파일을 선택하고, 해당 위치에서 터미널을 튼 후 **git clone https://github.com/WooriVeryGood/Newbies_Assignments.git** 를 입력합니다. 해당 명령어는 이 repo를 로컬 공간으로 clone하는 명령어입니다. Git 관련 명령어/작업들은 중국에서 실행 시 모두 VPN을 필요로 합니다.
<br></br>
### 2. 본인에게 배정된 티켓 확인 후 브랜치 만들기
![Screenshot](/pics/step2-1.png)
[보드](https://honeycourses.atlassian.net/jira/software/projects/HC/boards/1)에 가서 본인에게 배정된 티켓을 확인하고 눌러봅니다.
<br></br>
![Screenshot](/pics/step2-2.png)
브랜치 만들기를 누릅니다.
<br></br>
![Screenshot](/pics/step2-3.png)
위처럼 repo는 해당 repo를 선택하고, **dev에서 꼭 브랜칭합니다**. (실무 투입 전 실무에서 쓰는 브랜치 전략 적응을 위해 모의해보는 과정입니다) 

브랜치 이름은 기본 그대로 둬도 됩니다.
<br></br>
### 3. 로컬에서 방금 만든 브랜치 checkout후 작업하기
![Screenshot](/pics/step3-1.png)
본인의 pc로 돌아와, clone된 Newbies_Assignments 폴더를 VS Code로 열고, 터미널을 열어 git pull 명령어를 실행합니다. 해당 명령어는 깃허브에 있는 최신 업데이트 사항을 받아옵니다. 위처럼 전 단계에서 만든 새 브랜치가 있을 경우 알림이 뜹니다.
<br></br>
![Screenshot](/pics/step3-2.png)
VS Code 좌측의 소스제어 아이콘을 누르면 뜨는 위 화면에서, commits를 누르고 왼쪽에서 4번쨰에 있는 화살표 버튼을 누릅니다. (브랜치 변경 아이콘)
<br></br>
![Screenshot](/pics/step3-3.png)
방금 만든 브랜치가 보이면 클릭하고, 엔터를 눌러 브랜치를 전환합니다. 전환이 완료되었으면 마음껏 작업하면 됩니다!
<br></br>

### 4. 코드 작성 완료 후, 커밋하기
![Screenshot](/pics/step4-1.png)
변경을 완료하면, 내가 바꾼 코드들/파일들의 리스트와 함께 왼쪽에 위처럼 뜹니다. 메시지에 **[본인 티켓 번호] 숙제 1 완료** 같은 형식으로 커밋 메세지를 작성합니다. (예시: [HC-109] 숙제 1 완료)