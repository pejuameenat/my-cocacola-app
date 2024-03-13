const Drop = (props) => {
  return (
    <ul>
      <div>
        <h3 className="font-bold border-b border-black">
          <a href="">{props.h3Link}</a>
        </h3>
        <li className="pt-2">
          <a href="">{props.list1}</a>
        </li>
        <li className="pt-2">
          <a href="">{props?.list2}</a>
        </li>
        <li className="pt-2">
          <a href="">{props?.list3}</a>
        </li>
      </div>
      <div>
        <h3 className="font-bold border-b border-black">
          <a href="">{props.h3Link}</a>
        </h3>
        <li className="pt-2">
          <a href="">{props.list1}</a>
        </li>
      </div>
    </ul>
  )
}

export default Drop
