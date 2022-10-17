import logo from './logo.svg';
import './App.css';
import './test.css'; // 외부 css파일 import // 외부 css파일에서는 내가 아는 css문법 그대로 사용하면 됨
import App2 from './App2';
import Compo1 from './compo/Compo1';
import Compo2 from './compo/Compo2';


// app이라는 태그를 만드는 공간
function App() {  // 부모 컴포넌트

  // react에서는 const로만 선언하는게 좋다. (변수명이 겹치면 안되기 때문에)
  const name = "희주";
  const data = "Compo1";


  // return 안에 사용자 정의 태그 구조를 작성할 수 있다. 
  return (
    // JSX 문법 -> JavaScript와 HTML을 같이 사용할 수 있는 문법!
    // 계속 감시하고 있어서 수정사항이 일어나면 자동으로 반영함 
    // 규칙 1 : 꼭 html 구조는 한 가지 태그로 묶여있어야 한다. 
    // 규칙 2 : 모든 태그는 여는태그와 닫는 태그가 둘다 존재해야한다. 
    //          빈태그(Fragment)로도 묶어서 사용이 가능하다. 
    // 규칙 4 : class를 지정해줄 때는 className이라는 키워드를 사용한다. 

    <>
    <h1 className='first'>HELLO REACT </h1>
    <h1 style={{color:"red"}} id="test">월요일 파이팅!</h1>  
    {/* 
      JSX문법에서 내부 style 줄 때 중괄호 먼저 하고 객체 형식으로 적용해야함 , key value로 줘야함 
      외부 css 문법은 똑같고 내부에서 주는 것만 문법이 다름 
    */}

    {/* Ctrl + / -> html 구조 안에서 주석 쓸 때 
      변수를 사용할 때는 {변수명} 으로 사용한다! 
      // 규칙 3 : JSX 문법 안에서는 사용할 수 있는 Javascript 문법이 제한되어있다. (조건문같은거 불가능..)
      (삼항 연산자는 가능!!)
      -> name에 있는 값이 "희주" -> 나의 이름은 희주 그대로 출력되게 하고
      -> name에 있는 값이 다른 내용이라면 -> 나의 이름은 영표
      */}
      

    <h1>나의 이름은 {name == "희주" ? name : "영표"}입니다.</h1>
    <App2></App2>

    {/* 컴포넌트도 삼항연산자로 가지고 올 수 있음 / Compo1은 자식 컴포넌트가 됨 */}
    {data == 'Compo1' ? <Compo1></Compo1> : <Compo2></Compo2>}
    
  
    </>
    

  );
}

export default App;
// 위에서 만든 사용자 정의태그(컴포넌트)를 내보내겠습니다. 
// 내보내야 사용할 수 있음 