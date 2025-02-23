import "./public-paths";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rootGlobal = ReactDOM.createRoot(document.getElementById("root"));

if (!window.__POWERED_BY_QIANKUN__) {
  rootGlobal.render(<App />);
}

export async function bootstrap() {
  console.log("react app bootstraped sub app 1");
}

export async function mount(props: any) {
  const { container } = props;
  rootGlobal = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  rootGlobal.render(
    <>
      <App />
    </>
  );
}

export async function unmount() {
  rootGlobal.unmount();
}

/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props:any) {
  console.log('update props', props);
}

// Performance logging
reportWebVitals();
