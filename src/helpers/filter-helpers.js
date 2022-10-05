export const applyFilters = (array, search) => {
    if (search === "") return array;

    return array.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
};

export const applyPagination = (items, page, rowsPerPage) => {
    //const { items, page, rowsPerPage } = props
    return items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};

// export const sortTransactions = (
//   order,
//   list
// ) => {
//   const arrCopy = [...list];

//   switch (order) {
//     case "": {
//       return arrCopy.filter((producto => producto.category === ""))
//     }
//     case "newest": {
//       return arrCopy.sort((a, b) => {
//         return b.date - a.date;
//       });
//     }
//     default:
//       return list;
//   }
// };