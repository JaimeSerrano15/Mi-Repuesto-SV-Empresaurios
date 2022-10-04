export const applyFilters = (array, search) => {
    if (search === "") return array;

    return array.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
};