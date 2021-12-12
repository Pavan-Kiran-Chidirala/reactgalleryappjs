// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesArray, onClickItem, id} = props
  const {imageUrl, imageAltText} = imagesArray
  const classCreate = id !== imagesArray.id ? 'highlight' : ''
  const onClickButton = () => {
    onClickItem(imageUrl, imageAltText)
  }
  return (
    <li className="li-item">
      <button className="btn" type="button" onClick={onClickButton}>
        <img
          src={imagesArray.thumbnailUrl}
          className={`'small-image' ${classCreate}`}
          alt={imagesArray.thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
