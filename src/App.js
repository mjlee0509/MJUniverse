
import { BrowserRouter, Routes, Route } from "react-router-dom";
import wallpaper from './components/wallpaper.gif';
import styled from "styled-components";
import './index.css'

function App() {
  return (
    <AppWrap>
      <div className="page-1-wrap">
        <div className="text-wrap">
          <h1>👻 HELLO WORLD 👻</h1>
          <h3>WELCOME TO MJ UNIVERSE</h3>
        </div>
      </div>

      <div className="page-2-wrap">
        <h1>안녕</h1>
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
width: 99vw;
height: 99vh;
left: 0;
top: 0;
bottom: 0;
position: absolute;

@font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.page-1-wrap {
  background: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  vertical-align: top;
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;

}


.text-wrap {
  text-align: center;
  margin-top: 25vh;
  margin-left: 20vw;
  position: absolute;
}



.page-2-wrap {
  background: url(${wallpaper});
  margin: 0;
}

`
