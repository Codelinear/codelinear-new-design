import quote from './assets/Vector.jpg'
const Tradejiniquote = () => {
  return (
    <div className="py-[128px] flex flex-col relative gap-[32px] justify-center items-center">
        <img src={quote} className='absolute z-[-1] left-[199.53px] top-[57.66px]' alt="" />
      <h1 className="w-[745px] text-center text-[36px] leading-[120%] letter-spacing-2">
        “Lectus arcu proin eleifend mauris. Nulla eget eu tincidunt neque nec
        nibh mi placerat. Viverra ac lorem ultrices dolor. Nam euismod
        porttitor.”
      </h1>
      <p className="w-[175px] text-base text-center">Lorem Ipsum, Position, TRADEJINI</p>
    </div>
  );
};
export default Tradejiniquote;
