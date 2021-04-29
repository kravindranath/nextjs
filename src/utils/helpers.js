import _first from 'lodash/first';
import _isArray from 'lodash/isArray';

export function getFirst(item){
    if(_isArray(item)){
        return _first(item);
    }
    return '';
}