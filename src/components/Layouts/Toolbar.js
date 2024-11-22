

import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import Navigation from './Navigation'
import Body from './HTMLRender';

const Toolbar = (props) => {

    const [open, setOpen] = useState(false)

        return(
            <div className="flex-box flex-between nav-buttons">
                {props.activeScene.sidebar ? (<button onClick={()=>setOpen(true)}><img  className="animate-float icon" src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/organizational/post-it.svg"  alt="learn more"/></button>):(<div>&nbsp;</div>)}
                <Navigation activeScene={props.activeScene} updateScene={props.updateScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson}/>
                <Dialog className="dialog-pop" open={open} onClose={()=>setOpen(false)}>
    
                    <DialogContent>
                        <div className="dialog-body">
                            {props.activeScene.sidebarText.length > 0 && props.activeScene.sidebarText.map((item, i) => {
                                return ( <Body text={item} key={i}/>);
                            })}
                            </div>
                            <div className="flex-box flex-end ">
                            <button onClick={()=>setOpen(false)} className="button">close</button>
                            </div>
                     
                    </DialogContent>
                </Dialog>
                </div>
        );
    }


export default Toolbar;