import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

::-webkit-scrollbar {
  width: 0px;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

a, p {
  color: inherit;
  text-decoration: none;
  margin: 0;
}

* {
  box-sizing: border-box;
}

h1, h3 {
  color: #171738;
  font-weight: 600;
  opacity: 0.8;
  margin: 0;
}

h1 {
  font-size: 3rem;
}

h2 {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
  margin: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right top, #171738, #171738)
}

img {
  max-width: 140px;
  max-height: 140px;
}

.d-flex {
  display: flex;
}

.search {
  position: absolute;
  width: 20px;
  padding-top: 0.6%;
}

.glass {
  display: flex;
  background: linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255, 0.3));
  min-height: 80vh;
  width: 60%;
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  z-index: 3;
  @media(max-width: 480px) {
    width: 90%;
  }

  @media(max-width: 320px) {
    width: 100%;
  }

}

.triangle-top, .triangle-bottom {
  height: 0;
  width: 0;
  position: absolute;
  /* border-radius: 100%; */
}

.triangle-top {
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.3), rgba(217, 3, 104, 1));
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
  border-bottom: 15rem solid rgba(217, 3, 104, 1);
  top: 1%;
  right: 7%;
}

.triangle-bottom {
  background: linear-gradient(to right top, rgba(255, 255, 255, 0.3), #1C77C3);
  border-left: 8rem solid transparent;
  border-right: 8rem solid transparent;
  border-top: 15rem solid #1C77C3;
  bottom: 3%;
  left: 8%;
}

.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255, 0.3));
  border-radius: 2rem;
  @media(max-width: 400px) {
    width: 100%;
  }

  .switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 2.5rem;
  }
}

.links {
  .link {
    display: flex;
    margin: 1rem 0rem;
    padding: 0.2rem 5rem;
    align-items: center;
    h2 {
      padding: 0rem 1rem;
    }

    img {
      max-width: 40px;
      max-height: 40px;
    }
  }
}

// SKILLS
.skills {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  @media(max-width: 600px) {
    width: 100%;
    h1 {
      font-size: 2.5rem;
    }
    input {
      width: 80% !important;
    }
  }
  .switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 2.5rem;
    margin-top: 1rem;
  }
  .title {
    margin-bottom: 1rem;
    input {
      background: linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255, 0.3));
      border: none;
      width: 70%;
      border-radius: 2rem;
      outline: 0;
      padding: 0.5rem;
      padding-left: 1.3rem;
    }
  }
  .cards {
    max-height: 450px;
    overflow: auto;
    .card {
      display: flex;
      justify-content: space-between;
      background: linear-gradient(to right bottom, rgba(255,255,255, 0.8), rgba(255,255,255, 0.5));
      border-radius: 1rem;
      margin: 2rem 0rem;
      padding: 1rem;
      box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
      img {
        width: 80px;
        height: 80px;
      }
      @media(max-width: 480px) {
        h2 {
          font-size: 1rem;
        }
      }
      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 12px;
          font-weight: 400;
        }
        @media(max-width: 480px) {
          h2 {
            font-size: 1rem;
          }
        }
      }
      .percentage {
        font-weight: bold;
        background: linear-gradient(to right top, #171738, #171738);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

.line {
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  color: rgba(0, 0, 0, 0.75);
  font-family: 'Fira Code', monospace;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}

.typing-animation {
  animation: blinkCursor 500ms infinite normal, typing 8s 1s normal;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkCursor {
  from {
    border-color: rgba(0, 0, 0, 0.75);
  }
  to {
    border-color: transparent;
  }
}
`
