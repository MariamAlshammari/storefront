
export function selectCategory(categorayName) {
    return {
      type: 'SELECT_CATEGORY',
      payload: categorayName,
    };
  }
  
  export function filterProducts(categorayName, allProducts) {

    return {
      type: 'FILTER_PRODUCTS',
      payload: { categorayName, allProducts },
    };
  }