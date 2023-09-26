import { useState } from "react";
import logo from "./assets/logo.svg";
import updates from './assets/updates.svg';
import crown from './assets/crown.svg';
import help from './assets/help.svg';
import youtube from './assets/youtube.svg';
import facebook from './assets/facebook.svg';
import reddit from './assets/reddit.svg';
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      <div className='left-panel' style={{ width: '310px', backgroundColor: '#336B6E'}}>
        <div style={{display: 'flex', gap: '9px', marginLeft: '16px', marginTop: '29px'}}>
          <div>
            <img src={logo}></img>
          </div>
          <div style={{ color: 'white', fontFamily: 'Inter'}}>
            <p style={{ fontSize: '23px', fontWeight: '700'}}>BirdSpeeches</p>
            <p style={{ fontSize: '14px', fontWeight: '500'}}>VoiceTranslator</p>
          </div>
        </div>
        <div className='settings' style={{ marginLeft: '30px', marginTop: '80px'}}>
          <div style={{ display: 'flex', gap: '3px', color: 'white', fontFamily: 'Inter', fontSize: '17px', fontWeight: '600'}}>
            <p>Громкость</p>
            <p>77%</p>
          </div>
          <div>
            <input type="range" id='volume' name='volume' min='0' max='100' step='5' />
          </div>
          <div style={{marginTop: '49px', color: 'white', fontFamily: 'Inter', fontWeight: '600', fontSize: '17px'}}>
            <p>Тип перевода</p>
            <div style={{ display: 'flex', marginTop: '10px'}}>
              <button style={{width: '105px', height: '46px', borderRadius: '1000px 0px 0px 1000px', backgroundColor: '#F5BD7C', border: 'None', fontFamily: 'Inter', fontSize: '16px', color: '#336B6E', fontWeight: '600'}}>Быстрый</button>
              <button style={{width: '105px', height: '46px', borderRadius: '0 1000px 1000px 0', backgroundColor: '#417577', border: 'None', fontFamily: 'Inter', fontSize: '16px', color: 'white', fontWeight: '600'}}>Точный</button>
            </div>
          </div>
          <div style={{ marginTop: '40px',color: 'white', fontFamily: 'Inter', fontWeight: '600', fontSize: '17px'}}>
            <p>Язык перевода</p>
            <select name="lang-select" id="lang-select-id" style={{ width: '211px', height: '46px', marginTop: '10px', backgroundColor: '#417577', border: 'None', color: 'white', fontFamily: 'Inter', fontWeight: '600', fontSize: '17px', padding: '8px 12px', borderRadius: '1000px'}}>
              <option value='ru'>Русский</option>
            </select>
          </div>
          <div style={{ marginTop: '100px',color: 'white', fontFamily: 'Inter', fontWeight: '600', fontSize: '13px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
              <img src={updates} alt="" />
              <p>Проверить обновления</p>
            </div>
            <div style={{display: 'flex', marginTop: '32px', gap: '10px'}}>
              <img src={crown} alt="" />
              <p>Получить премиум</p>
            </div>
            <div style={{display: 'flex', marginTop: '32px', gap: '10px'}}>
              <img src={help} alt="" />
              <p>Помощь</p>
            </div>
          </div>
          <div style={{}}>
            <div style={{ display: 'flex', gap: '20px', marginTop: '115px'}}>
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={reddit} alt="" />
            </div>
            <p style={{color: 'white', fontSize: '13px', fontWeight: '600'}}>BirdSpeeches.com</p>
          </div>
          
        </div>
        
      </div>






      
      <div className='right-panel' style={{ backgroundColor: '#F6F6EF', width: '100%', height: '100%', paddingLeft: '30px', paddingTop: '30px'}}>
        <div style={{display: 'flex', gap: '30px'}}>
          <div style={{fontFamily: 'Inter', fontWeight: '600', fontSize: '13px'}}>
            <p>Источник</p>
            <select name="lang-select" id="lang-select-id" style={{ width: '211px', height: '46px', marginTop: '2px', backgroundColor: '#E9E9D9', border: 'None', color: 'black', fontFamily: 'Inter', fontWeight: '400', fontSize: '13px', padding: '8px 12px', borderRadius: '10px'}}>
              <option value='ru'>Discord</option>
            </select>
          </div>

          <div style={{fontFamily: 'Inter', fontWeight: '600', fontSize: '13px'}}>
            <p>Поиск</p>
            <select name="lang-select" id="lang-select-id" style={{ width: '825px', height: '46px', marginTop: '2px', backgroundColor: '#E9E9D9', border: 'None', color: 'black', fontFamily: 'Inter', fontWeight: '400', fontSize: '13px', padding: '8px 12px', borderRadius: '10px'}}>
              <option value='ru'>Поиск</option>
            </select>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
