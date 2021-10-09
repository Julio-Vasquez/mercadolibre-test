import {
  loader,
  bar1,
  bar2,
  bar3,
  bar4,
  bar5,
  bar6,
} from './Loadin.module.scss'

export const Loading = () => {
  return (
    <div className={loader}>
      <div className={bar1}></div>
      <div className={bar2}></div>
      <div className={bar3}></div>
      <div className={bar4}></div>
      <div className={bar5}></div>
      <div className={bar6}></div>
    </div>
  )
}
