"use client"
import { useEffect, useRef, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { accordionType } from '@/interface/interface';
import RichText from '../contentful/RichText';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { addToCart } from "@/redux/cartSlice";

export default function AccordionUi({accData}:{accData:accordionType[]}) {

  const [active, setActive] = useState<number | null>(0);
  const handleToggle = (index:number) => {
    if (active === index) {
      setActive(index);
    } else {
      setActive(index);
    }
  }

  return(
    <>
      {accData.map((item: accordionType, index: number) =>(
        <AccordionItem key={index} index={index} active={active} onToggle={()=>handleToggle(index)} item={item} />
        ))
      }
    </>
  )
}

const AccordionItem = (
  {
    index,
    item,
    active,
    onToggle,
  } : {
    index: number
    item: accordionType
    active: number | null
    onToggle: () => void
  }) => {

  const contentEl = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAddToCart = () =>{
    dispatch(addToCart({totalItem:1}));
  }

  const { title, description  } = item;
  return (
      <div className="rc-accordion-card">
        <div className="rc-accordion-header">
          <div className={`rc-accordion-toggle ${active === index ? 'active' : ''}`} onClick={onToggle}>
            <h5 className="rc-accordion-title">{title}</h5>
            <i className="fa fa-chevron-down rc-accordion-icon"></i>
          </div>
        </div>
        <div ref={contentEl} className={`rc-collapse ${active === index ? 'show' : ''}`}
          style={ active === index
                ? { height: contentEl?.current?.scrollHeight }
                : { height: "0px" }}>

          <div className="rc-accordion-body">
            <div className='cart-button'>
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <RichText document={description} />
          </div>
        </div>
      </div>
  )
}
