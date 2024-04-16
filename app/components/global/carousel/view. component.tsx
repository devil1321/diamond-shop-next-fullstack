'use client'
import React,{ useState,useRef,useEffect, MutableRefObject} from 'react'
import gsap from 'gsap'
import { useDispatch,useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as UiActions from '@/app/controller/action-creators/ui.action-creators'
import { bindActionCreators } from 'redux'

const View = () => {

  const { carouselCount } = useSelector((state:State) => state.ui)
  const dispatch = useDispatch()
  const UIActions = bindActionCreators(UiActions,dispatch)
  
  const [srcs,setSrcs] = useState<string[]>([
    '/assets/woman.png',
    '/assets/contact-hero.png',
    '/assets/blog-hero.png',
    '/assets/about-hero.png'
  ])

  const [grid,setGrid] = useState<number>(50)
  const [rows,setRows] = useState<number>(0)
  const [columns,setColumns] = useState<number>(0)
  const [cells,setCells] = useState<any[]>([])
  const [cw,setCw] = useState<number>(0)
  const [ch,setCh] = useState<number>(0)

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const posx = useRef(0) as MutableRefObject<number>
  const posy = useRef(1) as MutableRefObject<number>    


      const handleGrid = () => {
        if (typeof window !== 'undefined') {
          if (window.innerWidth >= 1280) {
              setGrid(10);
          } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
              setGrid(6);
          } else {
              setGrid(4);
          }
        }   
    }

    const handleGridItems = () =>{
        let tmpCells = []
        const width = wrapperRef.current.clientWidth / grid
        const height = wrapperRef.current.clientHeight / grid
        setCw(width)
        setCh(height)
        for(let i = 0; i < rows * columns; i++){
            tmpCells.push({w:width,h:height})
        }
        setCells(tmpCells)
    }

  const handleColumns = () =>{
    const width = wrapperRef.current.clientWidth
    const countedColumns = Math.round(width / grid)
    setColumns(countedColumns)
  }
  const handleRows = () =>{
    const height = wrapperRef.current.clientHeight
    const countedRows = Math.round(height / grid)
    setRows(countedRows)
  }    

  
const handleBackgroundPostion = () =>{
    let tmpCells:any[] = []
    for(let i = 0; i < cells.length; i++){
      posx.current++
      if(posx.current * cw > wrapperRef.current.clientWidth ){
        posx.current = 1
        posy.current++
      }
      if(posy.current < grid){
        if(typeof window !== 'undefined'){
          if(window.innerWidth > 1366){
            tmpCells.push({
              w:(-cw * posx.current),
              h:(-ch * posy.current)
            })
          }else{
            tmpCells.push({
              w:(-cw * posx.current) - 400,
              h:(-ch * posy.current)
            })
          }
        }
        
      }else{
        break
      }
    }
    setCells(tmpCells)
  }
  
  const handleResetPostions = () =>{
    posx.current = 0
    posy.current = 1
  }

  const handlePrev = () =>{
    if(carouselCount < 1){
        UIActions.setCarouselCount(3)
    }else{
        UIActions.setCarouselCount(carouselCount - 1)
    }
  }
  const handleNext = () =>{
    if(carouselCount > 2){
        UIActions.setCarouselCount(0)
    }else{
        UIActions.setCarouselCount(carouselCount + 1)
    }
  }

  const handleAnimate = () =>{
    gsap.fromTo('.carousel-cell',{ scale: 0,borderRadius:'100%' }, { scale:1,borderRadius:'0%' ,duration:0.3,force3D:true,stagger: {
      amount: 1.5, 
      grid: [grid,grid],
      from: 'start'
    } })    
  }

  useEffect(()=>{
    handleGrid()
    handleColumns()
    handleRows()
    handleGridItems()
  },[grid,columns,rows,wrapperRef.current?.clientHeight,wrapperRef.current?.clientWidth])

  useEffect(()=>{
    handleResetPostions()
    handleBackgroundPostion()
  },[cells.length,wrapperRef.current?.clientHeight,wrapperRef.current?.clientWidth])


  useEffect(()=>{
    handleAnimate()
  },[carouselCount])

  return (
    <div ref={wrapperRef} className='carousel-view-wrapper w-[100vw] h-[100vh] md:h-[50vh] lg:h-[90vh] overflow-y-clip'>
      <div className="carousel-buttons absolute z-20 top-1/2 -translate-y-1/2 left-0 flex w-[95vw] h-[40px] justify-between">
        <div className="carousel-prev cursor-pointer ml-12 px-4 py-2 rounded-full bg-gray-500/50 hover:bg-gray-300/50 text-white font-bold" onClick={()=>handlePrev()}>&lt;</div>
        <div className="carousel-next cursor-pointer mr-12 px-4 py-2 rounded-full bg-gray-500/50 hover:bg-gray-300/50 text-white font-bold" onClick={()=>handleNext()}>&gt;</div>
      </div>
      <div className="carousel-view my-2 md:my-0 mx-auto relative top-0 left-0 flex flex-wrap justify-start items-start">
        {cells.map((c:any,i:number)=>{
          return <div key={`cell-${i}`} style={{
            backgroundImage:`url('${srcs[carouselCount]}')`,
            backgroundSize:`1908px 842px`,
            backgroundPositionX:c.w + 'px',
            backgroundPositionY:c.h + 'px',
            backgroundRepeat:'no-repeat',
            width:cw + 'px',
            height:ch + 'px'
          }} className={`carousel-cell transform-cpu`}></div>
        })}
      </div>
    </div>
  )
}

export default View
