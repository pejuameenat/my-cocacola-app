
const FooterCard = (props) => {
  return (
    <div className="text-white">
      <h5 className="text-slate-600 font-semibold text-sm">{props.h5}</h5>
      <ul className="">
        <li className="list-elements">{props.list1}</li>
        <li className="list-elements">{props.list2}</li>
        <li className="list-elements">{props.list3}</li>
        <li className="list-elements">{props.list4}</li>
        <li className="list-elements">{props.list5}</li>
      </ul>
    </div>
  )
}

export default FooterCard