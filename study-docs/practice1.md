
> * 주력으로 사용할 에디터 프로그램 정하기

### bx 슬라이더(bxSlider)
* jQuery 기반 슬라이더 플러그인
* 웹에서 이미지나 컨텐츠를 가로/세로 슬라이드할 때 많이 쓰인다.
* 요즘은 React/Vue 환경에서는 Swiper 같은 라이브러리가 더 많이 쓰인다고 함
* https://bxslider.com/install

### css 파일 연결
\<link>태그 이용  
나열하는 순서 중요하다  
먼저 해석되는 파일이 우선 순위를 갖는다.  
나중에 적용되는게 먼저 나열한 css파일을 덮을 수 있음(캐스케이딩 우선순위가 높을 경우)

### 이미지를 넣으면 스크롤 생기는 이유
* \<img> 태그는 이미지의 원본 크기를 훼손하지 않는다  
원본 이미지 크기가 화면보다 크면 스크롤이 생김  
    * css에서 width 100% , height 100% 지정하면 없어짐
* 일반적으로 배경으로 사용할 이미지들은 \<img> 태그를 사용하지 않음
    * css속성으로 이미지를 넣음
    ```css
    html, body{
        width: 100%;
        height: 100%;
    }

    .background-01{
        background: url("../images/forest.jpg") no-repeat;
        /*no-repeat : 배경 이미지를 반복하지 않음 */
        width: 100%;
        height: 100vh; /*vh : 100%보다 실무에서 반응형에 안전*/
        /*높이는 0으로 설정되기 때문에 명시적으로 지정해주어야 보인다
            여기서 단독으로 %단위쓰면 안먹힘..(상대적인 단위)
            이유 : 태그 자체 높이가 0이었는데 거기에 100%해도 0
            원래 높이 기준으로 상대적인 값을 가짐
            그래서 부모태그인 body 태그도 같이 100%라고 지정을 해준다
            body태그의 부모태그인 html태그도 100%로 지정
        */

        /*이제 반응형으로 만드는 법!(부트스트랩5)*/
        background-position: center center;
        /*첫 번째 center → 가로(horizontal) 위치
        두 번째 center → 세로(vertical) 위치
        이미지를 컨테이너의 중앙에 맞춘다는 뜻
        background-size: cover;와 같이 쓰면 중앙 기준으로 잘림 없이 꽉 차게 보임
        */
        background-size: cover; /* 이미지가 컨테이너 크기에 맞게 확대/축소 */
        /*
         -> 이 두 개를 함께 쓰면 화면 크기가 바뀌어도 배경 이미지가 항상 꽉 차면서 중앙에 보이게 됨
        */
    } 
    ```
### 폰트어썸
* https://fontawesome.com/
* 라이센스 : 무료
* https://www.w3schools.com/icons/fontawesome5_intro.asp
```html
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
<!-- 
 yourcode : Font Awesome 계정에서 발급받은 개인 키(실제 키로 바꿔야 함)
 개인키 없이 무료 아이콘 쓰려면 CDN CSS 링크로
 근데 CDN을 쓰면, css제공해주는 서버가 만약 다운이 됐을 때, 영향을 받음. 그래서 권장하지 않는다.
 프로젝트에 다운로드 받아서 다운로드 받은 파일을 import하는 방식을 권장.
 -->
```