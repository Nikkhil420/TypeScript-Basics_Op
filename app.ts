const func = () => {

  const a: number = 12;
  const b: number = 55;

  const addition:number = a + b;

  return console.log('addition',addition);

};

const ReturnValue = func();

const funcSub = (s:number , u:number) => console.log(s - u);


const ReturnValueSub = funcSub(10,5);

const funcMulti = (m:number , t:number) => console.log(m * t);


const ReturnValueMulti = funcMulti(10,5);

const funcDivi = (d:number , v:number) => console.log(d / v);


const ReturnValueDiv = funcDivi(100,5);