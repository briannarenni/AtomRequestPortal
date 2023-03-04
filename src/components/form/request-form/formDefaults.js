export const defaults = {
  userId: currUser.userId,
  fullName: currUser.fullName,
  amount: 0.0,
  category: '',
  comments: null
};

export const categories = [
  { value: 'Travel', label: 'Travel' },
  { value: 'Lodging', label: 'Lodging' },
  { value: 'Job Supplies', label: 'Job Supplies' },
  { value: 'Meals/Catering', label: 'Meals/Catering' },
  { value: 'Medical', label: 'Medical' },
  { value: 'Misc/Other', label: 'Misc/Other' }
];
