import React from 'react';
import {DivWakaTime, DivContainerWakaTime, FigureWaka} from './styledWakaTime';

const Wakatime = () => {
  return (
    <DivContainerWakaTime>
      <DivWakaTime>
      <FigureWaka><embed src="https://wakatime.com/share/@a0e4ecbd-00bf-4f2e-aff7-44767b7892ff/5fcc382f-f7a1-4654-ad4b-5461963018a0.svg"></embed></FigureWaka>
    </DivWakaTime>
    </DivContainerWakaTime>
    
  )
}

export default Wakatime;