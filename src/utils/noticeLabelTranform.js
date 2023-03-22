export const noticeLabelTranform = category => {
  let categoryToDisplay = '';
  switch (category) {
    case 'sell':
      categoryToDisplay = 'Sell';
      break;
    case 'lost-found':
      categoryToDisplay = 'Lost/found';
      break;
    case 'for-free':
      categoryToDisplay = 'In good hands';
      break;
    default:
      categoryToDisplay = 'asdsSell';
  }
  return categoryToDisplay;
};
