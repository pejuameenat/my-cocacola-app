import { dropDown } from '../data'
import Drop from './Drop'
const DropDowns = (props) => {
  const { head, text, click, color, borderColor, lists } =
    dropDown[props.currentElement]
  return (
    <>
      {props.showDropDown && (
        <div
          className={`h-fit w-full py-4 bg-white border-t-8 border-b border-solid duration-300 delay-100  ease-in ${borderColor} lg:fixed lg:z-20 lg:top-17`}
        >
          <div className=" flex flex-col lg:flex-row gap-8 w-4/5 ml-auto">
            <article className="w-4/12">
              <h3 className="font-bold lg:text-4xl">{head}</h3>
              <span>{props?.title}</span>
              <p className="py-3">{text}</p>
              <button
                type="button"
                className={`w-full text-white p-3 ${color} text-lg tracking-wide uppercase font-semibold`}
              >
                {click}
              </button>
            </article>
            <article className="lg:w-9/12 flex flex-col gap-5">
              {lists.map((el, i) => {
                return (
                  <ul className="lg:flex gap-4" key={i}>
                    {el.map((drop) => (
                      <Drop key={drop.id} {...drop} />
                    ))}
                  </ul>
                )
              })}
            </article>
          </div>
        </div>
      )}
    </>
  )
}

export default DropDowns
