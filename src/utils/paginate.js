import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;

    // Methods from lodash:
    // _.slice(items, startIndex)
    // _.take()

    return _(items).slice(startIndex).take(pageSize).value();
}