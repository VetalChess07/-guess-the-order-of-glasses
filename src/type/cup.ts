export type CupColorType= {
   color:string
}

export type CupType = {
   cup: any
   dragStartHandler: (e: React.DragEvent<HTMLDivElement>, color: CupColorType) => void;
   dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
   dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void;
   dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
   dragDropHandler: (e: React.DragEvent<HTMLDivElement>, color: CupColorType) => void;
}

export interface ICup {
   color:string,
   order:number
}