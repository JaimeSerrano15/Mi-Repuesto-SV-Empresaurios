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