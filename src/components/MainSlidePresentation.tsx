import { useState } from 'react';

export const MainSlidePresentation = (): JSX.Element => {

  const [textPointer, settextPointer] = useState<number>(0);
  const textToShowAtPresentation: Array<string> = ['Start managing your finance smarter and ease','Control how your money is moving','Automatic payment of your services','Define financial goals'];

  const mainSlidePresentation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if( event.currentTarget.id === 'left_btn'){
      if(textPointer > 0){
        settextPointer(textPointer - 1);
      }else{
        settextPointer(3);
      }
    }else{
      if(textPointer<3){
        settextPointer(textPointer + 1);
      }else{
        settextPointer(0);
      }
    }
  }

  return (
    <div className='flex items-center justify-center'>

      <button id="left_btn" onClick={ mainSlidePresentation }>
        <span className="material-symbols-outlined mr-4 hover:rotate-6">
          arrow_back_ios
        </span>
      </button>

      <div className='flex flex-col items-center'>
        <h2 className='text-4xl'>Welcome to FinFeed!</h2>
        <p className='mt-4'>{ textToShowAtPresentation[textPointer] }</p>
      </div>

      <button id="right_btn" onClick={ mainSlidePresentation }>
        <span className="material-symbols-outlined ml-4 hover:rotate-6">
          arrow_forward_ios
        </span>
      </button>
    </div>
  )
}
