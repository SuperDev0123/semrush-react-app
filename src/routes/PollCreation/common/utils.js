export const priceBoxTotalPrice = ({
  audience,
  selectedCriteriaList,
  costInformation,
}) => {
  const { costPerAdditionalCriteria, costPerResponse } = costInformation

  const fullSelectedCriteriaList = selectedCriteriaList.filter(
    (item) => !!item.price
  )
  const totalPrice =
    audience.pollResponses *
    (costPerResponse +
      fullSelectedCriteriaList.length * costPerAdditionalCriteria)
  return totalPrice.toFixed(2)
}

export const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }
    reader.readAsDataURL(file)
  })

export const getExtension = (filename) => {
  const parts = filename.split('.')
  return parts ? parts[parts.length - 1] : ''
}

export const isImage = (filename) => {
  const ext = getExtension(filename)
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
    case 'webp':
    case 'gif':
    case 'bmp':
    case 'png':
      return true
  }
  return false
}

export const isVideo = (filename) => {
  const ext = getExtension(filename)
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
    case 'mp3':
    case 'wav':
      return true
  }
  return false
}
